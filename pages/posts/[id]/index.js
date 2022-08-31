import React, { useEffect, useState } from "react";
import http from "../../../services/http/httpService";
import { useQuill } from "react-quilljs";
import styles from "../../../styles/PostDetails.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useAuth } from "../../../services/auth/useAuth";

const PostDetails = ({ data }) => {
  const { title, creationTime, content, imageUrl } = data;
  const [authenticated, setAuthenticated] = useState(false);
  const { quill } = useQuill();
  const auth = useAuth();
  const [text, setText] = useState(content);
  const router = useRouter();

  useEffect(() => {
    setAuthenticated(auth.isAuth());
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(text);
      quill.on("text-change", () => {
        setText(quill.root.innerHTML); // Get text only
      });
    }
  }, [quill]);

  return (
    <div className={styles.post}>
      <RenderHeadPost data={data} />
      <div className={styles.main}>
        <img src={imageUrl ?? ""} alt={title} className={styles.image} />
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.creationTime}>
          Published on{" "}
          <span>{new Date(creationTime).toLocaleDateString()}</span>
        </p>

        <hr className={styles.hr} />

        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        {authenticated && (
          <Link href={router.asPath + "/edit"}>
            <button className={styles.editBtn}>Edit</button>
          </Link>
        )}
      </div>
    </div>
  );
};

const RenderHeadPost = ({ data }) => {
  return (
    <Head>
      <meta property="og:image" content={data.imageUrl ?? ""} />
      <meta property="og:image:secure_url" content={data.imageUrl ?? ""} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
    </Head>
  );
};

PostDetails.Head = RenderHeadPost;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const result = await http.get("api/services/app/Posts/Get", {
    params: { id },
  });
  const data = result.data;
  return {
    props: {
      data: data.result,
    },
  };
};

export default PostDetails;
