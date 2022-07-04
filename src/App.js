import React, { useState } from 'react';
import Counters from './components/counters/counters';
import Navbar from './components/navbar/navbar';

function App() {
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
    const counters = list.counters.filter((c) => c.id !== counterId);
    setList({ counters });
  };

  const handleReset = () => {
    const counters = list.counters.map((c) => {
      c.value = 0;
      return c;
    });
    setList({ counters });
  };

  const handleIncrement = (counter) => {
    const counters = [...list.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setList({ counters });
  };

  const handleDecrement = (counter) => {
    const counters = [...list.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0 && counters[index].value--;
    setList({ counters });
  };

  return (
    <>
      <Navbar totalCounters={list.counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          onDelete={handleDelete}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counters={list.counters}
        />
      </main>
    </>
  );
}

export default App;
