import classes from "./Item.module.css";
import Card from "../UI/Card";

const Item = (props) => {
  return (
    <li>
      <Card className={`${props.income ? classes.income : classes.expense}`}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.amount}>{`${
          props.income ? "+" : "-"
        }${props.amount
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</div>
      </Card>
    </li>
  );
};

export default Item;
