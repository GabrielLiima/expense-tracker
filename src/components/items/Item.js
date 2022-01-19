import { useState } from "react";

import classes from "./Item.module.css";

import Card from "../UI/Card";

// A component that shows the title and amount of the transaction
const Item = (props) => {
  const [deleteMode, setDeleteMode] = useState(false);

  const deleteHandler = () => {
    props.onDeleteItem(props.id);
  };

  const deleteModeHandler = () => {
    setDeleteMode(!deleteMode);
  };

  // RegEx used for thousand separators
  const search_value = /\B(?=(\d{3})+(?!\d))/g;

  return (
    <li onClick={deleteModeHandler}>
      <Card className={`${props.income ? classes.income : classes.expense}`}>
        {deleteMode && (
          <button className={classes.delete} onClick={deleteHandler}>
            x
          </button>
        )}
        <div className={classes.title}>{props.title}</div>
        <div className={classes.amount}>
          {`${props.income ? "+" : "-"}${props.amount
            .toFixed(2)
            .toString()
            .replace(search_value, ",")}`}
        </div>
      </Card>
    </li>
  );
};

export default Item;
