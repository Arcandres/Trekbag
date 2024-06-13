import Button from './Button';

export default function AddItemForm({ setItems, itemText, setItemText }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemText.length) return;

    const newItem = {
      id: crypto.randomUUID(),
      name: itemText,
      packed: false,
    };

    setItems((items) => [...items, newItem]);
  };

  const handleChange = (event) => {
    setItemText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input value={itemText} onChange={handleChange} />
      <Button>Add to list</Button>
    </form>
  );
}
