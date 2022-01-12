import classes from "./Item.module.css";
import Card from "../UI/Card";

const Item = (props) => {
  return (
    <Card className={`${props.income ? classes.income : classes.expense}`}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.amount}>{`${props.income ? "+" : "-"}${
        props.amount
      }`}</div>
    </Card>
  );
};

export default Item;
