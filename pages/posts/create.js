import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import CustomEditor from "../../components/Editor/Editor";
import { useAuth } from "../../services/auth/useAuth";
import http from "../../services/http/httpService";
import styles from "../../styles/Create.module.css";
import types from "../../types";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();
  const { checkAuth } = useAuth();
  const editorRef = useRef(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const createPost = () => {
    const typeKey = type || types[0].name;
    http
      .post("api/services/app/Posts/Create", {
        title,
        description,
        imageUrl,
        type: typeKey,
        content: editorRef.current.getContent(),
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
        <h3>Type</h3>
        <select
          className={styles.selectType}
          name="types"
          required={true}
          onChange={(e) => setType(e.target.value)}
        >
          {types.map((ty) => (
            <option value={ty.name} key={ty.name}>
              {ty.label}
            </option>
          ))}
        </select>
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
            alt="image"
            className={styles.preview}
          />
        )}
      </div>

      <div className={styles.segment}>
        <h3>Content: </h3>
        <CustomEditor initialValue={""} editorRef={editorRef} />
      </div>

      <button
        className={styles.btn}
        onClick={createPost}
        disabled={!title || !description || !imageUrl}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePost;
