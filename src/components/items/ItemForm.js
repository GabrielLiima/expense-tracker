import classes from "./ItemForm.module.css";
import Card from "../UI/Card";

const ItemForm = () => {
  return (
    <Card className={classes.wrapper}>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="Enter title..."></input>
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" placeholder="Enter amount..."></input>
        <div className={classes["radio-buttons"]}>
          <div>
            <input id="income" type="radio" name="item-type"></input>
            <label htmlFor="income">Income</label>
          </div>
          <div>
            <input id="expense" type="radio" name="item-type"></input>
            <label htmlFor="expense">Expense</label>
          </div>
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </Card>
  );
};

export default ItemForm;
