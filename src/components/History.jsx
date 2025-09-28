import React from "react";

function History({ transactions = [] }) {
  return (
    <div className="p-4 border-b bg-white">
      <h4 className="text-lg font-semibold mb-3 text-gray-800">History</h4>
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-sm">No transactions yet.</p>
        ) : (
          transactions.map((t) => (
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
                {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;
