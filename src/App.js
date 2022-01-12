import classes from "./App.module.css";
import Header from "./components/expenses/Header";
import Section from "./components/UI/Section";
import Card from "./components/UI/Card";
import Expense from "./components/expenses/Expense";
import Item from "./components/expenses/Item";

function App() {
  const items = [
    {
      title: "Cash",
      income: true,
      amount: 500,
    },
    {
      title: "Book",
      income: false,
      amount: 40,
    },
    {
      title: "Camera",
      income: false,
      amount: 200,
    },
  ];

  return (
    <Card className={classes.container}>
      <Header />
      <Expense />
      <Section>History</Section>
      <Item
        title={items[0].title}
        income={items[0].income}
        amount={items[0].amount}
      />
      <Item
        title={items[1].title}
        income={items[1].income}
        amount={items[1].amount}
      />
      <Item
        title={items[2].title}
        income={items[2].income}
        amount={items[2].amount}
      />
    </Card>
  );
}

export default App;
