import React from "react";
import { useHistory } from "react-router-dom";

import "../../Style/summaryHeader.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { FaDownload } from 'react-icons/fa';
import { connect } from "react-redux";
import { formatNumber } from "../../code_Library/functions";
import logo from'../../Images/logo.png';


function SummaryHeader(props) {
  const history = useHistory();

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
  const loanInstalments = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.loanInstalments);
  const interestRate = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.interestRate);
  function homePage(event) {
    history.push("/");
  }

  return (
    <div className="SummaryHeader">
      <div className="summary_top">
        <div className="summary_nav">
      <KeyboardBackspaceIcon onClick={homePage} />
        <FaDownload onClick={props.download}/>
        </div>
        <h4 className="summary_title">LOANA</h4>
      </div>
      <div className="loan_Infos">
        <h5>Loan Amount</h5>
        <div className="qualify_sections">
          <h4 className="loan_amount">
            <span>{curency}: </span>
            <span>{formatNumber(loanAmount)}</span>
          </h4>
          <h5 className="loan_duration">
            <span>Months</span>
            <span>{duration}</span>
          </h5>
        </div>

        <div className="qualify_sections below">
          <p className="loan_payment">
            Monthly Payment-
            <span>
              {curency}: {formatNumber(loanInstalments)}
            </span>
          </p>
          <p className="loan_rate">
            Rate: <span>{interestRate}%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  loanData: state.generalLoanFields.loanFields,
});
export default connect(mapStateToProps)(SummaryHeader);
