import classes from "./Header.module.css";

// A component that renders the main title and total balance
const Header = (props) => {
  let balance = 0;

  props.items.forEach((item) => {
    if (item.income) {
      balance += item.amount;
    } else {
      balance -= item.amount;
    }
  });

  // RegEx used for thousand separators
  const search_value = /\B(?=(\d{3})+(?!\d))/g;

  return (
    <div className={classes.wrapper}>
      <h1>Expense Tracker</h1>
      <div className={classes.balance}>
        <h2>YOUR BALANCE</h2>
        <p>{`${balance < 0 ? "-" : ""}$${Math.abs(balance)
          .toFixed(2)
          .toString()
          .replace(search_value, ",")}`}</p>
      </div>
    </div>
  );
};

export default Header;
