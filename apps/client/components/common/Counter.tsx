'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);

  return (
    <button
      onClick={increment}
      className='rounded bg-white text-black aspect-square flex flex-col justify-center items-center gap-2 p-2'
    >
      <span className='text-lg'>Count</span>
      <span className='text-base'>{count}</span>
    </button>
  );
}

export default Counter;
