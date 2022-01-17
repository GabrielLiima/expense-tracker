import { useState } from "react";

import classes from "./Item.module.css";
import Card from "../UI/Card";

const Item = (props) => {
  const [deleteMode, setDeleteMode] = useState(false);

  const deleteHandler = () => {
    if (deleteMode) {
      props.onDeleteItem(props.id);
    }
  };

  const enterDeleteMode = () => {
    setTimeout(function () {
      setDeleteMode(true);
    }, 0);
  };

  const leaveDeleteMode = () => {
    setTimeout(function () {
      setDeleteMode(false);
    }, 0);
  };

  return (
    <li onMouseEnter={enterDeleteMode} onMouseLeave={leaveDeleteMode}>
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
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
        </div>
      </Card>
    </li>
  );
};

export default Item;
