import classes from "./Card.module.css";

// A basic wrapper used in various components
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
