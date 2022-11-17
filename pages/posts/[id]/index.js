import React, { useEffect, useState } from "react";
import http from "../../../services/http/httpService";
import { useQuill } from "react-quilljs";
import styles from "../../../styles/PostDetails.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useAuth } from "../../../services/auth/useAuth";

const PostDetails = ({ data }) => {
  const { title, creationTime, content, imageUrl, id, views } = data;
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    setAuthenticated(auth.isAuth());
  }, [auth]);

  useEffect(() => {
    http
      .post("api/services/app/Posts/ViewPost", {}, { params: { id } })
      .then(() => {});
  }, []);

  const deletePost = () => {
    var input = confirm("Are you sure you want to remove this post? ");
    if (input) {
      http
        .delete("api/services/app/Posts/Delete", {
          params: {
            id,
          },
        })
        .then(() => {
          router.back();
        })
        .catch(() => {
          alert("There was an error with the request");
        });
    } else {
    }
  };

  const imageStyles = {
    background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url('${
      imageUrl ?? ""
    }')`,
  };

  var options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={styles.post}>
      <RenderHeadPost data={data} />
      <div className={styles.main}>
        <div className={styles.postInfo}>
          <div className={styles.image} style={imageStyles}></div>
          <div className={styles.postInfoText}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.postDetails}>
              <p className={styles.creationTime}>
                <span>
                  {new Date(creationTime).toLocaleDateString("en-BG", options)}
                </span>
              </p>
              <p>
                <i className="fa-solid fa-eye"></i>
                {views}
              </p>
              <p>
                <i className="fa-regular fa-message"></i>
                10
              </p>
            </div>
          </div>
        </div>
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />

        {authenticated && (
          <React.Fragment>
            <br />
            <hr></hr>
            <br />
            <Link href={router.asPath + "/edit"}>
              <button className={styles.editBtn}>Edit</button>
            </Link>

            <button
              style={{ backgroundColor: "red" }}
              className={styles.editBtn}
              onClick={() => deletePost()}
            >
              Delete
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const RenderHeadPost = ({ data }) => {
  return (
    <Head>
      <title>{data.title}</title>
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
