import classes from "./Expense.module.css";
import Card from "../UI/Card";

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

  return (
    <Card className={classes.wrapper}>
      <div className={classes.income}>
        <h2>INCOME</h2>
        <p>{`$${incomeAmount
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.expense}>
        <h2>EXPENSE</h2>
        <p>{`$${expenseAmount
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
      </div>
    </Card>
  );
};

export default Expense;
