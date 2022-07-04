import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {
  const [list, setList] = useState({
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  });

  const handleDelete = (counterId) => {
    console.log('Evenet handler called', counterId);
  };

  return (
    <div>
      {list.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          value={counter.value}
          id={counter.id}
        />
      ))}
    </div>
  );
};

export default Counters;
