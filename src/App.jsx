import { useState } from 'react';
import { initialItems } from './lib/constants';

import BackgroundHeading from './Components/BackgroundHeading';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ItemList from './Components/ItemList';
import Sidebar from './Components/Sidebar';
import { useEffect } from 'react';

function App() {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;

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
    <>
      <BackgroundHeading />
      <main>
        <Header totalItems={totalItems} packedItems={packedItems} />

        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleAllCompleted={handleAllCompleted}
          handleReset={handleReset}
          handleRemoveAll={handleRemoveAll}
          handleAllInComplete={handleAllInComplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
