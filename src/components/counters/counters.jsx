import React from 'react';
import Counter from '../counter/counter';

const Counters = ({
  onDelete,
  onDecrement,
  onIncrement,
  onReset,
  counters,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset Counts
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
