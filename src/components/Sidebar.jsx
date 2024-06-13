import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({
  handleAddItem,
  handleAllCompleted,
  handleAllInComplete,
  handleReset,
  handleRemoveAll,
}) {
  return (
    <aside className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />

      <ButtonGroup
        onAllCompleted={handleAllCompleted}
        onAllInComplete={handleAllInComplete}
        onReset={handleReset}
        onRemoveAll={handleRemoveAll}
      />
    </aside>
  );
}
