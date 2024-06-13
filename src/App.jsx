import { useState } from 'react';
import { initialItems } from './lib/constants';

import BackgroundHeading from './Components/BackgroundHeading';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ItemList from './Components/ItemList';
import Sidebar from './Components/Sidebar';

function App() {
  const [items, setItems] = useState(initialItems);
  const [itemText, setItemText] = useState('');

  return (
    <>
      <BackgroundHeading />
      <main className=''>
        <Header />
        <ItemList items={items} setItems={setItems} itemText={itemText} />
        <Sidebar
          setItems={setItems}
          itemText={itemText}
          setItemText={setItemText}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
