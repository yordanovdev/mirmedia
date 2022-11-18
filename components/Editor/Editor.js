import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const CustomEditor = ({ initialValue, editorRef }) => {
  const key = "p1florohkpaeibgkoubtlmh6tcjm9ffp1ovdxgfwiox7vab2";
  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue={initialValue}
      id="hello"
      apiKey={key}
      tinymceScriptSrc={"/tinymce/tinymce.min.js"}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | image | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};

export default CustomEditor;
