import classes from "./ItemList.module.css";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Item title={item.title} income={item.income} amount={item.amount} />
      ))}
    </ul>
  );
};

export default ItemList;