import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import styles from "../../../styles/PostItemEdit.module.css";
import http from "../../../services/http/httpService";
import { useRouter } from "next/router";

const EditPost = ({ data }) => {
  const { quill, quillRef } = useQuill();
  const [text, setText] = useState(data.content);
  const router = useRouter();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(text);
      quill.on("text-change", () => {
        setText(quill.root.innerHTML); // Get text only
      });
    }
  }, [quill]);

  const handleSave = () => {
    http
      .put("api/services/app/Posts/Update", { ...data, content: text })
      .then(() => {
        router.back();
      });
  };

  return (
    <div className={styles.main}>
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
