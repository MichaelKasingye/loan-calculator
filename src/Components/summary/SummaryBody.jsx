import React from "react";
import "../../Style/summaryBody.css";

import { AiOutlineGlobal } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleRight } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import Analysis from "./Analysis";
import { connect } from "react-redux";
import { formatNumber } from "../../code_Library/functions";
import Footer from "../../Components/Footer";

function SummaryBody(props) {
  const loanInfo = props.loanData;

  const curency = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.curency);
  const netIncomeBalance = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.netIncomeBalance);
  const income = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.income);
  const loanPaymentToIncome = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.loanPaymentToIncome);
  const outStandingLoan = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.outStandingLoan);
  const totalIntrest = [...loanInfo]
    .reverse()
    .slice(0, 1)
    .map((info) => info.totalIntrest);

  return (
    <div className="SummaryBody">
      <h4>Details</h4>

      <div className="card">
        <FaBalanceScaleRight className="card_Icons" />
        <Analysis
          icon=""
          title="Net Income Balance"
          content="Income without monthly payment"
          currency={curency}
          amount={formatNumber(netIncomeBalance)}
        />
      </div>

      <div className="card">
        <MdAccountBalanceWallet className="card_Icons" />
        <Analysis
          icon=""
          title="Net Income"
          content="Income stated initially"
          currency={curency}
          amount={formatNumber(income)}
        />
      </div>

      <div className="card">
        <GoGraph className="card_Icons" />
        <Analysis
          icon=""
          title="Loan Payment to Income"
          content="Percentage of loan payment in the income"
          currency=""
          amount={loanPaymentToIncome}
        />
        <strong>%</strong>
      </div>

      <div className="card">
        <MdAccountBalance className="card_Icons" />
        <Analysis
          icon=""
          title="Outstanding Loan Amount"
          content="Current loan running in the Bank"
          currency={curency}
          amount={formatNumber(outStandingLoan)}
        />
      </div>

      <div className="card">
        <AiOutlineGlobal className="card_Icons" />
        <Analysis
          icon=""
          title="Total Interest"
          content="Total loan interest for the period"
          currency={curency}
          amount={formatNumber(totalIntrest)}
        />
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  loanData: state.generalLoanFields.loanFields,
});
export default connect(mapStateToProps)(SummaryBody);
