import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import http from "../../services/http/httpService";
import styles from "../../styles/Create.module.css";

const CreatePost = () => {
  const { quill, quillRef } = useQuill();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(text);
      quill.on("text-change", () => {
        setText(quill.root.innerHTML); // Get text only
      });
    }
  }, [quill]);

  const createPost = () => {
    http
      .post("api/services/app/Posts/Create", {
        title,
        description,
        imageUrl,
        content: text,
      })
      .then(() => {
        router.back();
      })
      .catch((e) => {
        alert("There was an error with the request");
      });
  };

  return (
    <div className={styles.create}>
      <div className={styles.segment}>
        <h3>Title: </h3>
        <input
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.segment}>
        <h3>Description: </h3>
        <input
          placeholder="Description"
          className={styles.input}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className={styles.segment}>
        <h3>Image Url: </h3>
        <input
          placeholder="Image url"
          className={styles.input}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {imageUrl && (
          <img
            src={imageUrl}
            width={150}
            height={150}
            className={styles.preview}
          />
        )}
      </div>

      <div className={styles.segment}>
        <h3>Content: </h3>
        <div className={styles.ql}>
          <div
            ref={quillRef}
            style={{ width: "max-width", minHeight: "200px" }}
          />
        </div>
      </div>

      <button
        className={styles.btn}
        onClick={createPost}
        disabled={!title || !description || !imageUrl || !text}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePost;
