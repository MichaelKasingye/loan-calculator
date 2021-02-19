import React from "react";
import "../Style/button.css";

export function Button({ onClick, disabled, type }) {
  return (
    <div className="button" onClick={onClick} type={type}>
      <p disabled={disabled}>Calculate loan amount</p>
    </div>
  );
}

export function Note() {
  return (
    <div className="note">
      <p>Please, fill all form fields</p>
    </div>
  );
}
