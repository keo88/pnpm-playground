import { Quicksand } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const quicksand = Quicksand({ subsets: ['latin'] });

function Header() {
  return (
    <header className='flex h-10 items-center justify-between'>
      <h1 className={twMerge(quicksand.className, 'text-2xl')}>
        <strong className='font-bold'>Syn</strong>
        note
      </h1>
      <button className='font-white rounded bg-purple-600 px-2.5 py-1.5 text-xl font-bold'>
        Start
      </button>
    </header>
  );
}

export default Header;
