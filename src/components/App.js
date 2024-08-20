// App.js
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
    { id: 3, name: "Lettuce", category: "Produce" },
    { id: 4, name: "String Cheese", category: "Dairy" },
    { id: 5, name: "Swiss Cheese", category: "Dairy" },
    { id: 6, name: "Cookies", category: "Dessert" },
  ]);

  const handleItemFormSubmit = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;