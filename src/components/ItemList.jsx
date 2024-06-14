import EmptyView from './EmptyView';
import Select from 'react-select';
import { options } from '../lib/constants';
import { useState, useMemo } from 'react';
import { useItemsContext } from '../hooks/useItemsContext';

export default function ItemList() {
  const [sortBy, setSortBy] = useState(options[0]);
  const { items, handleDelete, handleToggle } = useItemsContext();

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

      {items.length && (
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
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

export function Item({ item, handleDelete, handleToggle }) {
  return (
    <li className='item'>
      <label>
        <input
          onChange={() => handleToggle(item.id)}
          checked={item.packed}
          type='checkbox'
        />
        {item.name}
      </label>
      <button
        onClick={() => handleDelete(item.id)}
        style={{ color: 'red', fontWeight: 'bold' }}
      >
        x
      </button>
    </li>
  );
}