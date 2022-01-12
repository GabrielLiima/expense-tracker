import classes from "./Header.module.css";

const Header = () => {
  const balance = '$260.00';

  return (
    <div className={classes.wrapper}>
      <h1>Expense Tracker</h1>
      <div className={classes.balance}>
        <h2>YOUR BALANCE</h2>
        <p>{balance}</p>
      </div>
    </div>
  );
};

export default Header;
