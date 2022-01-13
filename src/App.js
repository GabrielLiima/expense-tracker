import classes from "./App.module.css";
import Header from "./components/Header";
import Section from "./components/UI/Section";
import Card from "./components/UI/Card";
import Expense from "./components/expenses/Expense";
import ItemList from "./components/items/ItemList";
import ItemForm from "./components/items/ItemForm";

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
      <ItemList items={items} />
      <Section>Add new transaction</Section>
      <ItemForm />
    </Card>
  );
}

export default App;
