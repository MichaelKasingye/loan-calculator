import React from "react";
import { connect } from "react-redux";
import "../Style/input.css";

function Input(props) {
  return (
    <div className="input_data">
      <label htmlFor="">{props.label}</label>
      <p>{props.note}</p>
      <input
        className="input"
        type="number"
        min="1"
        max="100000000000"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  loanData: state.generalLoanFields.loanFields,
});
export default connect(mapStateToProps)(Input);
