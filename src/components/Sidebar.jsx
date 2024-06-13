import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';
import { useItemsContext } from '../hooks/useItemsContext';

export default function Sidebar() {
  const { handleAddItem } = useItemsContext();

  return (
    <aside className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </aside>
  );
}
