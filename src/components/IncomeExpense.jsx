import React from "react";

function IncomeExpense() {
  return (
    <div className="flex justify-between p-4 bg-gray-50 border-b">
      <div className="text-center flex-1">
        <h4 className="text-lg font-semibold text-green-600 mb-2">Income</h4>
        <p className="text-2xl font-bold text-green-500">+$500</p>
      </div>
      <div className="w-px bg-gray-300"></div>
      <div className="text-center flex-1">
        <h4 className="text-lg font-semibold text-red-600 mb-2">Expense</h4>
        <p className="text-2xl font-bold text-red-500">-$210</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
