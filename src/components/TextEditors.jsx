import React, { useState, useEffect } from "react";

const TextEditors = () => {
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [list, setList] = useState(false);

  useEffect(() => {
    const savedText = localStorage.getItem("textEditorContent");
    if (savedText) {
      setText(savedText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("textEditorContent", text);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleEditor = (format) => {
    switch (format) {
      case "bold":
        setBold(!bold);
        break;
      case "italic":
        setItalic(!italic);
        break;
      case "underline":
        setUnderline(!underline);
        break;
      case "list":
        setList(!list);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Rich Text Editor</h2>
      <div>
        <button onClick={() => handleEditor("bold")}>Bold</button>
        <button onClick={() => handleEditor("italic")}>Italic</button>
        <button onClick={() => handleEditor("underline")}>Underline</button>
        <button onClick={() => handleEditor("list")}>List</button>
      </div>
      <div>
        <textarea
          rows={10}
          style={{
            width: "100%",
            fontWeight: bold ? "bold" : "normal",
            fontStyle: italic ? "italic" : "normal",
            textDecoration: underline ? "underline" : "normal",
            listStyleType: list ? "disc" : "none",
          }}
          onChange={handleChange}
          value={text}
        ></textarea>
      </div>
    </div>
  );
};

export default TextEditors;