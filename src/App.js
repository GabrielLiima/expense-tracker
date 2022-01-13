import classes from "./App.module.css";
import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/UI/Section";
import Card from "./components/UI/Card";
import Expense from "./components/expenses/Expense";
import ItemList from "./components/items/ItemList";
import ItemForm from "./components/items/ItemForm";

function App() {
  const [items, setItems] = useState([]);

  const onAddItemHandler = (enteredItems) => {
    setItems((prevItems) => {
      return [enteredItems, ...prevItems];
    });
  };

  const deleteItemHandler = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
    });
  };

  return (
    <Card className={classes.container}>
      <Header items={items} />
      <Expense items={items} />
      <Section>History</Section>
      {items.length === 0 && (
        <p className={classes["no-history"]}>
          No transaction found. Try adding one!
        </p>
      )}
      <ItemList onDeleteItem={deleteItemHandler} items={items} />
      <Section>Add new transaction</Section>
      <ItemForm onAddItem={onAddItemHandler} />
    </Card>
  );
}

export default App;
