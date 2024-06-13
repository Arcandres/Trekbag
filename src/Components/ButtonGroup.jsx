import Button from './Button';
import { buttons } from '../lib/constants';

export default function ButtonGroup() {
  return (
    <section className='button-group'>
      {buttons.map((text, index) => (
        <Button key={index} type='secondary'>
          {text}
        </Button>
      ))}
    </section>
  );
}
