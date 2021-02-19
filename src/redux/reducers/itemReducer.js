import { All_FIELDS } from "../action/types";
import {
  loanMonthlyPayment,
  totalInterest,
  netIncomeBalance,
  loanPaymentToIncome,
} from "../../code_Library/functions";

const initialState = {
  loanFields: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case All_FIELDS:
      const curency = action.allLoanFields.curency;
      const outStandingLoan = action.allLoanFields.outStandingLoan;
      const income = action.allLoanFields.income;
      const loanAmount = action.allLoanFields.loanAmount - outStandingLoan;
      const duration = action.allLoanFields.duration;
      const interestRate = action.allLoanFields.interestRate;

      const loanInstalments = loanMonthlyPayment(
        loanAmount,
        duration,
        interestRate
      );
      const totalIntrest = totalInterest(loanInstalments, duration, loanAmount);
      const incomeBalance = netIncomeBalance(income, loanInstalments);
      const PaymentToIncome = loanPaymentToIncome(loanInstalments, income);

      const fields = {
        curency: curency,
        income: income,
        outStandingLoan: outStandingLoan,
        loanInstalments: loanInstalments,
        interestRate: interestRate,
        loanAmount: loanAmount,
        totalIntrest: totalIntrest,
        duration: duration,
        netIncomeBalance: incomeBalance,
        loanPaymentToIncome: PaymentToIncome.toFixed(2),
      };
      return {
        ...state,
        loanFields: state.loanFields.concat(fields),
      };
    default:
      return state;
  }
};
