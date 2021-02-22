import React from "react";
import { connect } from "react-redux";
import { formatNumber } from "../code_Library/functions";
import "../Style/totalInterest.css";

function TotalInterest(props) {
  const loanInfo = props.loanData;

  const curency = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.curency);
  const loanPaymentToIncome = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.loanPaymentToIncome);
  const totalIntrest = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.totalIntrest);
  const netIncomeBalance = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.netIncomeBalance);
  return (
    <div className="totalInterest">
      <div className="totalInterest_content">
        <div className="details border_left_red">
          <span className="amount">Total Loan Interest[{curency}]</span>
          <span className="figures" key={Math.random()}>
            {formatNumber(totalIntrest)}
          </span>
        </div>

        <div className="details border_right_green border">
          <span className="amount">Income balance[{curency}]</span>
          <span className="figures" key={Math.random()}>
            {formatNumber(netIncomeBalance)}
          </span>
        </div>

        <div className="details border_right_green border">
          <span className="amount">Payment to Income </span>
          <span className="figures" key={Math.random()}>
            {loanPaymentToIncome} %
          </span>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  loanData: state.generalLoanFields.loanFields,
});
export default connect(mapStateToProps)(TotalInterest);
