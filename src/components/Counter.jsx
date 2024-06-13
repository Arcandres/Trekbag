export default function Counter({ totalItems, packedItems }) {
  return (
    <p>
      <b>{packedItems}</b> / {totalItems} items packed
    </p>
  );
}
