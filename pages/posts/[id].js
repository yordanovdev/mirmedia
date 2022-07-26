import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import http from "../../services/http/httpService";
import { useQuill } from "react-quilljs";

const PostDetails = ({ data }) => {
  const { title, creationTime, content } = data;
  const { quill, quillRef } = useQuill();
  const [text, setText] = useState("");

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setText(quill.root.innerHTML); // Get text only
      });
    }
  }, [quill]);

  return (
    <div>
      {/* <h1>{title}</h1>
      <p>{new Date(creationTime).toLocaleDateString()}</p>
      
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      /> */}
      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
      className="ql-editor"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
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
