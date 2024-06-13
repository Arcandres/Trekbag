import Button from './Button';

export default function ButtonGroup({
  onAllCompleted,
  onRemoveAll,
  onReset,
  onAllInComplete,
}) {
  const buttons = [
    {
      text: 'Mark all as complete',
      onClick: onAllCompleted,
    },
    {
      text: 'Mark all as incomplete',
      onClick: onAllInComplete,
    },
    {
      text: 'Reset to initial',
      onClick: onReset,
    },
    {
      text: 'Remove all items',
      onClick: onRemoveAll,
    },
  ];

  return (
    <section className='button-group'>
      {buttons.map(({ text, onClick }) => (
        <Button key={onClick.toString()} onClick={onClick} bType='secondary'>
          {text}
        </Button>
      ))}
    </section>
  );
}
