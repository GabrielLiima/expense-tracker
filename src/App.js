import classes from "./App.module.css";
import Header from "./components/expenses/Header";
import Card from "./components/UI/Card";

function App() {
  return (
    <Card className={classes.container}>
      <Header />
    </Card>
  );
}

export default App;
