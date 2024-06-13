export default function Button({ onClick, bType, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${bType === 'secondary' && 'btn--secondary'}`}
    >
      {children}
    </button>
  );
}
