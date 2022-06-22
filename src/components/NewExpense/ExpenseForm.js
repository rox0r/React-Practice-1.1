import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addingExpenseStatus, setAddingExpenseStatus] = useState("not-active");

  function titleChangerHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangerHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangerHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    onSaveExpenseData(expenseData);
    deactivateAddingExpense();
  }

  function activateAddingExpense() {
    setAddingExpenseStatus("active");
  }
  function deactivateAddingExpense() {
    setAddingExpenseStatus("not-active");
  }

  if (addingExpenseStatus === "not-active") {
    return (
      <button className="new-expense__actions" onClick={activateAddingExpense}>
        Add New Expense
      </button>
    );
  } else {
    return (
      <form onSubmit={submitHandler} method="post">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangerHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangerHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangerHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <button
          className="new-expense__actions"
          onClick={deactivateAddingExpense}
        >
          Cancel
        </button>
        <button className="new-expense__actions" type="submit">
          Add Expense
        </button>
      </form>
    );
  }
}

export default ExpenseForm;
