import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function History({ transaction = [] }) {
  return (
    <div className="p-4 border-b bg-white">
      <h4 className="text-lg font-semibold mb-3 text-gray-800">History</h4>
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {transaction.length === 0 ? (
          <p className="text-gray-500 text-sm">No transactions yet.</p>
        ) : (
          transaction.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center p-2 bg-gray-50 rounded-lg"
            >
              <span className="text-gray-700">{t.text}</span>
              <span
                className={
                  t.amount < 0
                    ? "text-red-500 font-medium"
                    : "text-green-500 font-medium"
                }
              >
                {t.amount < 0 ? "-" : "+"}
                <MdOutlineCurrencyRupee className="flex justify-center  inline" />
                {Math.abs(t.amount)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;
