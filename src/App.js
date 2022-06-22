import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const defaultExpenses = [
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
  {
    id: "e3",
    title: "Spare Parts",
    amount: 69.99,
    date: new Date(2019, 5, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
