import React, { useEffect, useState } from "react";
import http from "../../../services/http/httpService";
import { useQuill } from "react-quilljs";
import styles from "../../../styles/PostDetails.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const PostDetails = ({ data }) => {
  const { title, creationTime, content, imageUrl } = data;
  const { quill } = useQuill();
  const [text, setText] = useState(content);
  const router = useRouter();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(text);
      quill.on("text-change", () => {
        setText(quill.root.innerHTML); // Get text only
      });
    }
  }, [quill]);

  return (
    <div className={styles.post}>
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
        <Link href={router.asPath + "/edit"}>
          <button className={styles.editBtn}>Edit</button>
        </Link>
      </div>
    </div>
  );
};

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
