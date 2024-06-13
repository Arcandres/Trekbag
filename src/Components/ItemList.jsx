export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  );
}

export function Item({ item }) {
  return (
    <li className='item'>
      <label>
        <input checked={item.packed} type='checkbox' />
      </label>
      <button style={{ color: 'red', fontWeight: 'bold' }}>x</button>
    </li>
  );
}
