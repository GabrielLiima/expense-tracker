import classes from "./ItemForm.module.css";
import { useState } from "react";
import Card from "../UI/Card";

const ItemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isIncome, setIsIncome] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle.trim() !== "" &&
      enteredAmount.trim() !== "" &&
      isIncome !== ""
    ) {
      const items = {
        id: Math.random().toString(),
        title: enteredTitle,
        amount: +enteredAmount,
        income: isIncome,
      };

      setEnteredTitle("");
      setEnteredAmount("");
      setIsIncome("");

      props.onAddItem(items);
    }
  };

  return (
    <Card className={classes.wrapper}>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter title..."
          value={enteredTitle}
          onChange={titleHandler}
        ></input>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="Enter amount..."
          value={enteredAmount}
          onChange={amountHandler}
        ></input>
        <div className={classes["radio-buttons"]}>
          <div>
            <input
              id="income"
              type="radio"
              name="item-type"
              checked={isIncome === true}
              onChange={() => setIsIncome(true)}
            ></input>
            <label htmlFor="income">Income</label>
          </div>
          <div>
            <input
              id="expense"
              type="radio"
              name="item-type"
              checked={isIncome === false}
              onChange={() => setIsIncome(false)}
            ></input>
            <label htmlFor="expense">Expense</label>
          </div>
        </div>
        <button>Add transaction</button>
      </form>
    </Card>
  );
};

export default ItemForm;
