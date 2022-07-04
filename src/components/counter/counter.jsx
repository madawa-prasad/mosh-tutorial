import React from 'react';

const Counter = ({ counter, onDecrement, onIncrement, onDelete }) => {
  const formatCount = () => {
    const count = counter.value;
    return count === 0 ? 'Zero' : count;
  };

  return (
    <>
      <div className="counter-container">
        <span
          className={`badge badge-${
            counter.value === 0 ? 'warning' : 'primary'
          } m-2`}
        >
          {formatCount()}
        </span>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Counter;
