import { useItemsStore } from '../stores/itemsStore';
import Button from './Button';

export default function ButtonGroup() {
  const allCompleted = useItemsStore((state) => state.allCompleted);
  const allInCompleted = useItemsStore((state) => state.allInCompleted);
  const resetItems = useItemsStore((state) => state.resetItems);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const buttons = [
    {
      text: 'Mark all as complete',
      onClick: allCompleted,
    },
    {
      text: 'Mark all as incomplete',
      onClick: allInCompleted,
    },
    {
      text: 'Reset to initial',
      onClick: resetItems,
    },
    {
      text: 'Remove all items',
      onClick: removeAllItems,
    },
  ];

  return (
    <section className='button-group'>
      {buttons.map((button) => (
        <Button
          key={button.onClick.toString()}
          onClick={button.onClick}
          bType='secondary'
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
