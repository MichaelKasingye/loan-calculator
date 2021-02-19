import React from "react";
import "../Style/currencySelect.css";
function CurrencySelect(props) {
  return (
    <>
      <div className="currencySelect">
        <label>
          Currency: <small>UGX,USD,GBP...</small>
        </label>
        <textarea
          rows="1"
          cols="17"
          maxLength="3"
          className="input"
          type="text"
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        ></textarea>
      </div>
    </>
  );
}

export default CurrencySelect;
