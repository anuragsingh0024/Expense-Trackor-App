import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/Transactions";
import ProgressBar from "./components/ProgressBar";


const getLoaclStorageClicked = () => {
  const clicked = JSON.parse(localStorage.getItem("clicked"))
  if(clicked){
    return JSON.parse(localStorage.getItem("clicked"))
  }
  else {
    return false
  }
}
const getLoaclStorage = () => {
  const transactions = JSON.parse(localStorage.getItem("transactions"));
  
  if (transactions) {
    return JSON.parse(localStorage.getItem("transactions"));
  } else {
    return [];
  }
};

const App = () => {
  const [isAddTxnVisible, setIsAddTxnVisible] = useState(false);
  const [transactions, setTransactions] = useState(getLoaclStorage());
  const [clicked, setClicked] = useState(getLoaclStorageClicked());
  const [income, setIncome] = useState(null);
  const [expense, setExpense] = useState(null)

  const data = (income, expense) => {
         setIncome(income);
         setExpense(expense)
  }
  console.log(transactions)
  const addTransaction = (payload) => {
    setTransactions([...transactions, payload]);
  };

  //loacl storage se chhed chhad;;
  const setLocalStorage = () => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("clicked", JSON.stringify(clicked));
  };

  useEffect(() => {
    setLocalStorage();
  }, [transactions]);
  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center mt-12 ">
        <div className="w-[350px] lg:w-[420px] md-[400px] flex flex-col items-center justify-start">
          <Header />
          <Balance
            txnBtn={isAddTxnVisible}
            onTxnBtn={setIsAddTxnVisible}
            transactions={transactions}
          />
          {isAddTxnVisible ? (
            <AddTransaction
              onTxnBtn={setIsAddTxnVisible}
              transactions={addTransaction}
              clicked={setClicked}
            />
          ) : (
            ""
          )}

          <IncomeExpense transactions={transactions} sendData = {data}/>
          {clicked ? <Transactions transactions={transactions} /> : ""}
          {clicked ? <ProgressBar income={income} expense={-expense}/>: ""}
          
      
        </div>
      </div>
    </>
  );
};

export default App;
