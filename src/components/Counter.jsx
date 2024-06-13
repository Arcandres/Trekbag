import { useItemsContext } from '../hooks/useItemsContext';

export default function Counter() {
  const { items } = useItemsContext();

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;

  return (
    <p>
      <b>{packedItems}</b> / {totalItems} items packed
    </p>
  );
}
