import React from "react";
import "../Style/home.css";
import Title from "../Components/Title";
import Qualify from "../Components/Qualify";
import LoanDetail from "../Components/loanDetail";
import ToatalInterest from "../Components/TotalInterest";
import LoanInputs from "../Components/LoanInputs";

function Home(props) {
  return (
    <div className="home">
      <div className="inner_home">
        <div className="top background1">
          <Title content="LOANA" />
          <Qualify title="MONTHLY PAYMENT" />
          <LoanDetail />
          <ToatalInterest />
        </div>
        <div className="bottom">
          <LoanInputs />
        </div>
      </div>
    </div>
  );
}

export default Home;
