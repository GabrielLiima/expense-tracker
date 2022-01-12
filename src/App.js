import classes from "./App.module.css";
import Header from "./components/expenses/Header";
import Card from "./components/UI/Card";
import Expense from "./components/expenses/Expense";

function App() {
  return (
    <Card className={classes.container}>
      <Header />
      <Expense />
    </Card>
  );
}

export default App;
