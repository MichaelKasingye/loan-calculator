import React from "react";
import { connect } from "react-redux";
import {  useHistory } from "react-router-dom";
import { formatNumber } from "../code_Library/functions";

import "../Style/qualify.css";
function Qualify(props) {
  const history = useHistory();
  const loanInfo = props.loanData;
  const loanInstalments = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.loanInstalments);
  const curency = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.curency);
  function sumaryPage(event) {
    history.push("/summary");
  }

  return (
    <div className="qualify">
      <div className="qualify_info">
        <h4>{props.title}</h4>
        <p key={Math.random()}>
          {curency}: {formatNumber(loanInstalments)}
        </p>
      </div>
      {loanInstalments >= 1 ? (
        <span>
          <button className="button" onClick={sumaryPage}>
            View Summary Results
          </button>
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  loanData: state.generalLoanFields.loanFields,
});
export default connect(mapStateToProps)(Qualify);
