import { useItemsStore } from '../stores/itemsStore';

export default function Counter() {
  const items = useItemsStore((state) => state.items);

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;

  return (
    <p>
      <b>{packedItems}</b> / {totalItems} items packed
    </p>
  );
}
