import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({ setItems, itemText, setItemText }) {
  return (
    <aside className='sidebar'>
      <AddItemForm
        setItems={setItems}
        itemText={itemText}
        setItemText={setItemText}
      />
      <ButtonGroup />
    </aside>
  );
}
