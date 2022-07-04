import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(props.value);

  //   const [listItems, setListItems] = useState({
  //     count: 0,
  //     tags: ['1', '2', '3', '4', '5'],
  //   });

  const formatCount = () => {
    return count === 0 ? 'Zero' : count;
  };

  return (
    <>
      <div className="counter-container">
        <span
          className={`badge badge-${count === 0 ? 'warning' : 'primary'} m-2`}
        >
          {formatCount()}
        </span>
        <button
          onClick={() => setCount(count - 1)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          onClick={() => props.onDelete(props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* <ul>
          {listItems.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default Counter;
