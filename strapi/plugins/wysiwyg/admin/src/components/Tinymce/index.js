import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";

const API_KEY = process.env.APP_TINY_MCE_KEY || "";

const TinyEditor = ({ onChange, name, value }) => {
  useEffect(() => {
    console.log("API_KEY", API_KEY);
  }, []);

  return (
    <Editor
      apiKey={API_KEY}
      value={value}
      tagName={name}
      onEditorChange={(editorContent) => {
        onChange({ target: { name, value: editorContent } });
      }}
      outputFormat="html"
      init={{}}
    />
  );
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default TinyEditor;
