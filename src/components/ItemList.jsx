import EmptyView from './EmptyView';
import Select from 'react-select';
import { options } from '../lib/constants';
import { useState, useMemo } from 'react';
import { useItemsStore } from '../stores/itemsStore';

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const deleteItem = useItemsStore((state) => state.deleteItem);

  const [sortBy, setSortBy] = useState(options[0]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === 'packed') {
        return b.packed - a.packed;
      }

      if (sortBy === 'unpacked') {
        return a.packed - b.packed;
      }

      return;
    });
  }, [items, sortBy]);

  const handleChange = (option) => {
    setSortBy(option.value);
  };

  return (
    <ul className='item-list'>
      {!items.length && <EmptyView />}

      {items.length > 0 && (
        <section className='sorting'>
          <Select
            onChange={handleChange}
            defaultValue={sortBy}
            options={options}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

export function Item({ item, deleteItem, toggleItem }) {
  return (
    <li className='item'>
      <label>
        <input
          onChange={() => toggleItem(item.id)}
          checked={item.packed}
          type='checkbox'
        />
        {item.name}
      </label>
      <button
        onClick={() => deleteItem(item.id)}
        style={{ color: 'red', fontWeight: 'bold' }}
      >
        x
      </button>
    </li>
  );
}
