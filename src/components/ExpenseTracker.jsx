import React, { useState } from "react";

import IncomeExpense from "./IncomeExpense";
import History from "./History";
import Transaction from "./Transaction";

function ExpenceTracker() {
  const [transaction, setTransaction] = useState([]);

  function HandelTransaction(newTransaction) {
    setTransaction([...transaction, newTransaction]);
  }

  return (
    <div className="flex absolute justify-start items-start p-4 ml-4   ">
      <div className="card  w-160 mt-4 h-[600px] shadow-lg rounded-xl overflow-hidden ">
        {/* //Income and expense */}
        <IncomeExpense transaction={transaction} />

        {/* //history  */}
        <History transaction={transaction} />

        {/* add new trancaction  */}
        <Transaction onAddtransaction={HandelTransaction} />
      </div>
    </div>
  );
}

export default ExpenceTracker;
