import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import styles from "../../../styles/PostItemEdit.module.css";
import createStyles from "../../../styles/Create.module.css";
import http from "../../../services/http/httpService";
import { useRouter } from "next/router";
import { useAuth } from "../../../services/auth/useAuth";

const EditPost = ({ data }) => {
  const { content, description, imageUrl, title } = data;
  const { checkAuth } = useAuth();
  const { quill, quillRef } = useQuill();
  const [text, setText] = useState(content);
  const [titleText, setTitle] = useState(title);
  const [descriptionText, setDescription] = useState(description);
  const [imageUrlText, setImageUrl] = useState(imageUrl);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(text);
      quill.on("text-change", () => {
        setText(quill.root.innerHTML); // Get text only
      });
    }
  }, [quill]);

  const handleSave = () => {
    http
      .put("api/services/app/Posts/Update", {
        ...data,
        content: text,
        title: titleText,
        description: descriptionText,
        imageUrl: imageUrlText,
      })
      .then(() => {
        router.back();
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
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={createStyles.segment}>
        <h3>Description: </h3>
        <input
          placeholder="Description"
          className={createStyles.input}
          value={descriptionText}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className={createStyles.segment}>
        <h3>Image Url: </h3>
        <input
          placeholder="Image url"
          className={createStyles.input}
          value={imageUrlText}
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

      <div style={{ width: "max-width", height: "fit-content" }}>
        <div ref={quillRef} />
      </div>
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
