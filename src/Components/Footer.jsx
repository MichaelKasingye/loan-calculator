import React from "react";
import "../Style/footer.css";
function footer({ name, link }) {
  return (
    <div>
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/michaelkasingye/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer - Michael Kasingye
        </a>
      </div>
    </div>
  );
}

export default footer;
