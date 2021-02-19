import React from "react";
import "../Style/title.css";
function Title({ content }) {
  return (
    <div className="title">
      <h2>{content}</h2>
    </div>
  );
}

export default Title;
