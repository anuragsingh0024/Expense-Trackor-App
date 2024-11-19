import React, { useState } from "react";

const Balance = (props) => {
  const changeTxnBtn = () => {
    if (props.txnBtn) {
      props.onTxnBtn(false);
    } else {
      props.onTxnBtn(true);
    }
  };
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload()
    
  };

  const total = props.transactions.reduce((acc, txn) => {
    return txn.type === "INCOME" ? acc + txn.amount : acc - txn.amount;
  }, 0);
  return (
    <>
      <div className="flex justify-between w-full px-2 mt-8">
        <p className="font-medium text-xl">
          Balance: <span>₹{total}</span>
        </p>
        <div className="flex gap-5">
          <button
            onClick={changeTxnBtn}
            className="bg-black text-white px-3 py-1 rounded-md font-medium add"
          >
            {props.txnBtn ? "Cancel" : "ADD"}
          </button>

          <button
            onClick={clearLocalStorage}
            className="bg-black text-white px-3 text-lg py-1 rounded-md font-medium reset"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Balance;
