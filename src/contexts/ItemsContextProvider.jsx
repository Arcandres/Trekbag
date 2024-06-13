import { initialItems } from '../lib/constants';
import { useState, useEffect, createContext } from 'react';

export const ItemsContext = createContext();

export function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  );

  const handleAddItem = (itemName) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: itemName,
      packed: false,
    };

    setItems([...items, newItem]);
  };

  const handleDelete = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);

    setItems(newItems);
  };

  const handleToggle = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(newItems);
  };

  const handleAllCompleted = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));

    setItems(newItems);
  };

  const handleAllInComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));

    setItems(newItems);
  };

  const handleRemoveAll = () => {
    setItems([]);
  };

  const handleReset = () => {
    setItems(initialItems);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleAllCompleted,
        handleAllInComplete,
        handleReset,
        handleToggle,
        handleDelete,
        handleRemoveAll,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
