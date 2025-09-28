import React, { useState } from "react";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import History from "./History";
import Transaction from "./Transaction";

function ExpenceTracker() {
  const [transaction, setTransaction] = useState([]);

  function HandelTransaction(newTransaction) {
    setTransaction([...transaction, newTransaction]);
  }

  return (
    <div className="flex absolute justify-start items-start p-4 mb-[2000px] ">
      <div className="card bg-white w-175 h-[650px] shadow-lg rounded-xl overflow-hidden mb-[30px]">
        {/* //Balance  */}
        <Balance />

        {/* //Income and expense */}
        <IncomeExpense />

        {/* //history  */}
        <History transaction={transaction} />

        {/* add new trancaction  */}
        <Transaction onAddtransaction={HandelTransaction} />
      </div>
    </div>
  );
}

export default ExpenceTracker;
