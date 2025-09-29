import React, { useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function IncomeExpense({ transaction = [] }) {
  const Income = transaction
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const Expense = transaction
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc - t.amount, 0);

  const Balance = Income - Expense;
  if (Balance < 0) {
    alert("Don't Have Enough Funds !! ");
    return;
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
        <h3 className="text-2xl flex justify-center font-bold mb-2">
          Your Balance
        </h3>
        <div className="flex justify-center">
          <span className="text-3xl font-bold flex items-center gap-1">
            <MdOutlineCurrencyRupee />
            {Balance}
          </span>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="flex justify-between p-4 bg-gray-50 border-b">
        <div className="text-center flex-1">
          <h4 className="text-lg font-semibold text-green-600 mb-2">Income</h4>

          <p className="text-2xl font-bold text-green-500 flex justify-center gap-1 text-3xl ">
            <MdOutlineCurrencyRupee className="size-6 mt-1.5" />
            {Income}
          </p>
        </div>

        <div className="w-px bg-gray-300"></div>

        <div className="text-center flex-1">
          <h4 className="text-lg font-semibold text-red-600 mb-2">Expense</h4>
          <p className="text-2xl font-bold text-red-500 flex justify-center  ">
            <MdOutlineCurrencyRupee className="mt-1 size-6" />
            {Math.abs(Expense)}
          </p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpense;
