import React, { useState } from "react";

function Transaction({ onAddtransaction }) {
  const [Text, setText] = useState("");
  const [Amount, SetAmount] = useState(null);

  function addTransaction(e) {
    e.preventDefault();

    if (!Text || !Amount) {
      alert("Please enter the Amount & Description !!");
      return;
    }

    const newTransaction = {
      text: Text,
      amount: +Amount,
    };

    onAddtransaction(newTransaction);

    setText("");
    SetAmount("");
  }

  return (
    <div className="p-4 bg-white ">
      <h4 className="text-lg font-semibold mb-3 text-gray-800">
        Add Transaction
      </h4>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Enter description..."
          value={Text}
          onChange={(Event) => setText(Event.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Enter amount..."
          value={Amount}
          onChange={(Event) => SetAmount(Event.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
          onClick={addTransaction}
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default Transaction;
