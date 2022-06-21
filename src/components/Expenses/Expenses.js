import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      <ExpenseItem
        expenseTitle={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        expenseTitle={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </Card>
  );
}

export default Expenses;
