import { useContext } from 'react';
import Button from './Button';
import { ItemsContext } from '../contexts/ItemsContextProvider';

export default function ButtonGroup() {
  const {
    handleAllCompleted,
    handleAllInComplete,
    handleReset,
    handleRemoveAll,
  } = useContext(ItemsContext);

  const buttons = [
    {
      text: 'Mark all as complete',
      onClick: handleAllCompleted,
    },
    {
      text: 'Mark all as incomplete',
      onClick: handleAllInComplete,
    },
    {
      text: 'Reset to initial',
      onClick: handleReset,
    },
    {
      text: 'Remove all items',
      onClick: handleRemoveAll,
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
