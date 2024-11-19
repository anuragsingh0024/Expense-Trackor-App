import React from "react";

const ProgressBar = ({ income, expense }) => {
  const total = income + expense;

  // Calculate width percentages
  const incomePercent = total > 0 ? (income / total) * 100 : 0;
  const expensePercent = total > 0 ? (expense / total) * 100 : 0;

  return (
    <>
      <div className="flex flex-col items-center border px-12 rounded-md mt-5 py-2">
      <h1 className="font-semibold font-sans mb-2 text-[20px]">
        Overview
      </h1>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden flex">
        <div
          style={{ width: `${incomePercent}%` }}
          className="bg-green-500 h-full text-base"
        ></div>
        <div
          style={{ width: `${expensePercent}%` }}
          className="bg-red-500 h-full"
        ></div>
      </div>
      <div className="flex  font-bold gap-1 font-sans mt-5 mb-2">
        <p>
          INCOME:{" "}
          <span className="text-green-500">{incomePercent.toFixed(2)}%</span>
        </p>
        <pre> || </pre>
        <p>
          EXPENSE:{" "}
          <span className="text-red-500">{expensePercent.toFixed(2)}%</span>
        </p>
       
      </div>
          <span className="mt-2">Made With ❤️ <a className="text-blue-950 font-semibold" href="https://www.instagram.com/anurag__0024/" target="-blank">Admin</a></span>
      </div>

    </>
  );
};

export default ProgressBar;
