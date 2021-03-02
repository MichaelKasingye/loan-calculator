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
        <h5>Loan-[{curency}] </h5>
        <p  key={Math.random()}>
          {formatNumber(loanAmount)}
        </p>
      </div>

      <div className="box">
        <h5>Period </h5>
        <p>{duration} months</p>
      </div>

      <div className="box">
        <h5>Interest rate </h5>
        <p>{interestRate}%</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loanData: state.generalLoanFields.loanFields,
});
export default connect(mapStateToProps)(loanDetail);
