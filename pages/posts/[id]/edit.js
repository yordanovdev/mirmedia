import React, { useEffect, useRef, useState } from "react";
import styles from "../../../styles/PostItemEdit.module.css";
import createStyles from "../../../styles/Create.module.css";
import http from "../../../services/http/httpService";
import { useRouter } from "next/router";
import { useAuth } from "../../../services/auth/useAuth";
import { v4 as uuidv4 } from "uuid";
import CustomEditor from "../../../components/Editor/Editor";
import types from "../../../types";

const EditPost = ({ data }) => {
  const { content, description, imageUrl, title, id, type } = data;
  const { checkAuth } = useAuth();
  const [text, setText] = useState(content);
  const [typeText, setTypeText] = useState(type);
  const [titleText, setTitle] = useState(title);
  const [descriptionText, setDescription] = useState(description);
  const [imageUrlText, setImageUrl] = useState(imageUrl);
  const router = useRouter();

  const editorRef = useRef(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const handleSave = () => {
    if (!text || !titleText || !descriptionText || !imageUrlText || !typeText) {
      return;
    }
    const dataUpdate = {
      ...data,
      id: id,
      content: editorRef.current?.getContent(),
      title: titleText,
      description: descriptionText,
      imageUrl: imageUrlText,
      type: typeText || types[0].name,
    };
    http
      .put("api/services/app/Posts/Update", {
        ...dataUpdate,
      })
      .then(() => {
        router.back();
      })
      .catch(() => {
        alert("There was an error with the request");
      });
  };

  return (
    <div className={createStyles.create}>
      <div className={createStyles.segment}>
        <h3>Title: </h3>
        <input
          placeholder="Title"
          className={createStyles.input}
          value={titleText}
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={createStyles.segment}>
        <h3>Description: </h3>
        <input
          placeholder="Description"
          className={createStyles.input}
          value={descriptionText}
          required={true}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.segment}>
        <h3>Type</h3>
        <select
          className={styles.selectType}
          name="types"
          defaultValue={typeText}
          required={true}
          onChange={(e) => setTypeText(e.target.value)}
        >
          {types.map((ty) => (
            <option value={ty.name} key={ty.name}>
              {ty.label}
            </option>
          ))}
        </select>
      </div>

      <div className={createStyles.segment}>
        <h3>Image Url: </h3>
        <input
          placeholder="Image url"
          className={createStyles.input}
          value={imageUrlText}
          required={true}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {imageUrl && (
          <img
            src={imageUrl}
            width={150}
            height={150}
            className={createStyles.preview}
          />
        )}
      </div>
      <CustomEditor initialValue={content} editorRef={editorRef} />
      <button className={styles.saveBtn} onClick={() => handleSave()}>
        Save
      </button>
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

export default EditPost;
