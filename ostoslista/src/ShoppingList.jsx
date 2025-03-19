import { useState } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./itemList";

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div>
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
  );
};

export default ShoppingList;
