import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 125.0,
      date: new Date(2022, 6, 21),
    },
    {
      id: "e2",
      title: "Car Service",
      amount: 100.0,
      date: new Date(2022, 5, 15),
    },
  ];

  function addExpenseHandler(expense) {
    console.log("In App: ");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
