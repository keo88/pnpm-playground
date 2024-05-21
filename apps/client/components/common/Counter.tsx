'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);

  return (
    <button
      onClick={increment}
      className='flex aspect-square flex-col items-center justify-center gap-2 rounded bg-white p-2 text-black'
    >
      <span className='text-lg'>Count</span>
      <span className='text-base'>{count}</span>
    </button>
  );
}

export default Counter;
