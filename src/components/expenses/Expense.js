import classes from "./Expense.module.css";

import Card from "../UI/Card";

// Component that show the total income and expense
const Expense = (props) => {
  let expenseAmount = 0;
  let incomeAmount = 0;

  props.items.forEach((item) => {
    if (item.income) {
      incomeAmount += item.amount;
    } else if (item.income === false) {
      expenseAmount += item.amount;
    }
  });

  // RegEx used for thousand separators
  const search_value = /\B(?=(\d{3})+(?!\d))/g;

  return (
    <Card className={classes.wrapper}>
      <div className={classes.income}>
        <h2>INCOME</h2>
        <p>{`$${incomeAmount
          .toFixed(2)
          .toString()
          .replace(search_value, ",")}`}</p>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.expense}>
        <h2>EXPENSE</h2>
        <p>{`$${expenseAmount
          .toFixed(2)
          .toString()
          .replace(search_value, ",")}`}</p>
      </div>
    </Card>
  );
};

export default Expense;
