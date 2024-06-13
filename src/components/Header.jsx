import Counter from './Counter';
import Logo from './Logo';

export default function Header({ totalItems, packedItems }) {
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItems} packedItems={packedItems} />
    </header>
  );
}
