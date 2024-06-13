import { useRef, useState } from 'react';
import Button from './Button';

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState('');
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemText) {
      inputRef.current.focus();

      return;
    }

    onAddItem(itemText);
    setItemText('');
  };

  const handleChange = (event) => {
    setItemText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        autoFocus
        value={itemText}
        onChange={handleChange}
      />
      <Button>Add to list</Button>
    </form>
  );
}
