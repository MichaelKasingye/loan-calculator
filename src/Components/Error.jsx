import React from "react";
import "../Style/Error.css";
export function Error(props) {
  return (
    <>
      <span className="error">
        <strong>ERROR:</strong> Fill forms using only numbers without letters,
        commas or spaces
      </span>
    </>
  );
}

export function ErrorSection(props) {
  return (
    <>
      <span className="error">
        <strong>ERROR</strong>
      </span>
    </>
  );
}
