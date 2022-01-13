import classes from "./Header.module.css";

const Header = (props) => {
  let balance = 0;

  props.items.forEach((item) => {
    if (item.income) {
      balance += item.amount;
    } else {
      balance -= item.amount;
    }
  });

  return (
    <div className={classes.wrapper}>
      <h1>Expense Tracker</h1>
      <div className={classes.balance}>
        <h2>YOUR BALANCE</h2>
        <p>{`${balance < 0 ? "-" : ""}$${Math.abs(balance)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
      </div>
    </div>
  );
};

export default Header;
