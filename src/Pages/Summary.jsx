import React from "react";
import SummaryHeader from "../Components/summary/SummaryHeader";
import SummaryBody from "../Components/summary/SummaryBody";

function Summary() {
  return (
    <div className="home ">
      <div className="inner_home ">
        <div className="top background2">
          <SummaryHeader />
        </div>
        <div className="bottom background1">
          <SummaryBody />
        </div>
      </div>
    </div>
  );
}

export default Summary;
