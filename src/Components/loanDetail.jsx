import React from "react";
import { connect } from "react-redux";
import { formatNumber } from "../code_Library/functions";
import "../Style/loanDetail.css";

function loanDetail(props) {
  const loanInfo = props.loanData;
  const curency = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.curency);
  const loanAmount = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.loanAmount);
  const duration = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.duration);
  const interestRate = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.interestRate);
  return (
    <div className="loanDetail">
      <div className="box ">
        <h4>LOAN-[{curency}] </h4>
        <p className="red" key={Math.random()}>
          {formatNumber(loanAmount)}
        </p>
      </div>

      <div className="box">
        <h4>PERIOD </h4>
        <p>{duration} Months</p>
      </div>

      <div className="box">
        <h4>INTEREST RATE </h4>
        <p>{interestRate}%</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loanData: state.generalLoanFields.loanFields,
});
export default connect(mapStateToProps)(loanDetail);
