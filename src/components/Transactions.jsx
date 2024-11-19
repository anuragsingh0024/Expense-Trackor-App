import React, { useState } from "react";

const Transactions = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = props.transactions.filter((txn) => {
    return txn.des.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="flex flex-col w-full px-2 justify-center items-center ">
        <h1 className="font-semibold text-lg">Transactions</h1>

        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="p-2 bg-[#e6e8e9] rounded-lg w-[95%] outline-none px-4 placeholder:text-gray-500 mt-3 mb-3"
        />

        <div className="w-full">
          <ul className="list-none w-full flex flex-col gap-2">
            {filteredTransactions.map((txn, key) => {
              return (
                <li
                  key={txn.id}
                  className={`border p-2 flex justify-between rounded-sm`}
                >
                  <p className="text-lg ml-2">{txn.des}</p>
                  <p
                    className={`font-semibold text-lg mr-4 ${
                      txn.type === "INCOME" ? `text-green-500` : `text-red-500`
                    }`}
                  >
                    {txn.type === "INCOME"
                      ? `+${txn.amount}`
                      : `-${txn.amount}`}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Transactions;
