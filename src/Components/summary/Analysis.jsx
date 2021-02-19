import React from "react";
import "../../Style/analysis.css";
function Analysis(props) {
  return (
    <div className="analysis">
      <div className="analysis_section">
        <div className="analysis_together">
          <p>{props.icon}</p>
          <div className="analysis_theTwo">
            <h5>{props.title}</h5>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
      <div className="analysis_amount">
        <h6>{props.currency}</h6>
        <p>{props.amount}</p>
      </div>
    </div>
  );
}

export default Analysis;
