import React from "react";

const IncomeExpense = (props) => {
  const income = props.transactions.reduce((acc, txn) => {
    return txn.type === "INCOME" ? acc + txn.amount : acc;
  }, 0);

  const expense = props.transactions.reduce((acc, txn) => {
    return txn.type === "EXPENSE" ? acc - txn.amount : acc;
  }, 0);
  props.sendData(income, expense)
  return (
    <>
      <div className="flex w-full mt-5 gap-3 px-2 mb-5">
        <div className="border-2  w-1/2 rounded-md">
          <p className="text-md  px-5 mt-3">Income</p>
          <p className="text-md font-medium text-green-600 px-5 mt-1 mb-3">
            ₹{income}
          </p>
        </div>
        <div className="border-2  w-1/2 rounded-md">
          <p className="text-md  px-5 mt-3">Expense</p>
          <p className="text-md font-medium text-red-600 px-5 mt-1 mb-3">
            ₹{expense}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;
