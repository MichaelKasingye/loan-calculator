import React, { useState } from "react";
import Input from "./Input";
import { Button, Note } from "./Button";
import CurrencySelect from "./CurrencySelect";
import "../Style/loanInputs.css";
import { connect } from "react-redux";
import { All_FIELDS } from "../redux/action/types";
import Footer from "../Components/Footer";

function LoanInputs(props) {
  const [income, setIncome] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setDuration] = useState("");
  const [outStandingLoan, setOutStandingLoan] = useState("");
  const [curency, setCurency] = useState("");

  return (
    <div className="loanInputs">
      <div className="loan_title">
        <h4>Calculate</h4>
      </div>
      <hr />
      <form className="loanInputs_form">
        <CurrencySelect
          placeholder="Curency here..."
          value={curency}
          onChange={(e) => setCurency(e.currentTarget.value.toUpperCase())}
        />
        <Input
          label=" Your Net Income Here"
          placeholder="Net Income"
          value={income}
          onChange={(e) => setIncome(e.currentTarget.value)}
        />
        <Input
          label=" Desired Loan Amount Here"
          placeholder="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.currentTarget.value)}
        />
        <Input
          label=" Current Running Loan Amount Here"
          placeholder="Running loan "
          value={outStandingLoan}
          onChange={(e) => setOutStandingLoan(e.currentTarget.value)}
        />
        <Input
          label=" Interest Rate in figures Here"
          note="Interest rates are usually above 16"
          placeholder="Interest Rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.currentTarget.value)}
        />
        <label htmlFor=""></label>
        <Input
          label=" Loan Duration in Months Here"
          placeholder="Months"
          value={duration}
          onChange={(e) => setDuration(e.currentTarget.value)}
        />
        {!curency || !income || !loanAmount || !interestRate || !duration ? (
          <Note />
        ) : (
          <Button
            type="submit"
            onClick={() =>
              props.allFields(
                curency,
                income,
                loanAmount,
                duration,
                interestRate,
                outStandingLoan
              )
            }
          />
        )}
      </form>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  loanData: state.generalLoanFields.loanFields,
});
const mapDispatchToProps = (dispatch) => ({
  allFields: (
    curency,
    income,
    loanAmount,
    duration,
    interestRate,
    outStandingLoan
  ) =>
    dispatch({
      type: All_FIELDS,
      allLoanFields: {
        curency: curency,
        income: income,
        loanAmount: loanAmount,
        duration: duration,
        interestRate: interestRate,
        outStandingLoan: outStandingLoan,
      },
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoanInputs);
