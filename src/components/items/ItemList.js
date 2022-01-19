import classes from "./ItemList.module.css";

import Item from "./Item";

// Renders all the items based on the items object received via props
const ItemList = (props) => {
  return (
    <ul className={classes.items}>
      {props.items.map((item) => (
        <Item
          onDeleteItem={props.onDeleteItem}
          key={item.id}
          id={item.id}
          title={item.title}
          income={item.income}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default ItemList;
