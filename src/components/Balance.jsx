import React from "react";

function Balance() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <h3 className="text-2xl flex justify-center font-bold mb-2">
        Your Balance
      </h3>
      <div className="flex justify-center">
        <span className="text-3xl font-bold">$290.00</span>
      </div>
    </div>
  );
}

export default Balance;
