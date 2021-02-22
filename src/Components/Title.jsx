import React from "react";
import "../Style/title.css";
import logo from'../Images/logo.png';
function Title({ content }) {
  return (
    <div className="title">
      <img className="logo" src={logo} alt="Logo"/>
      {/* <h2>{content}</h2> */}
    </div>
  );
}

export default Title;
