import classes from "./Expense.module.css";
import Card from "../UI/Card";

const Expense = () => {
  return (
    <Card className={classes.wrapper}>
      <div className={classes.income}>
        <h2>INCOME</h2>
        <p>$500.00</p>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.expense}>
        <h2>EXPENSE</h2>
        <p>$240.00</p>
      </div>
    </Card>
  );
};

export default Expense;
