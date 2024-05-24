import Counter from '@/components/common/Counter';
import Header from '@/components/common/Header';

export default function Home() {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main
        className='flex-1 overflow-y-auto overflow-x-hidden'
        style={{
          perspective: '300px',
        }}
      >
        <div className='flex h-screen items-center justify-center bg-purple-600'>
          Intro
          <Counter />
        </div>
        <div
          style={{
            transformStyle: 'preserve-3d',
          }}
          className='relative h-[80vh]'
        >
          <div className='absolute inset-0 flex items-center justify-center text-white'>Front</div>
          <div
            style={{
              transform: 'translate3d(-50px,0,0) rotateY(45deg)',
            }}
            className='absolute inset-0 flex items-center justify-center bg-yellow-100 text-gray-600'
          >
            Mid
          </div>
          <div
            style={{
              transform: 'translate3d(0,0,-300px) scale(2.1)',
            }}
            className='flex h-full items-center justify-center bg-fuchsia-200 text-black'
          >
            Back
          </div>
        </div>
        <div className='flex h-screen items-center justify-center bg-blue-600'>End</div>
      </main>
    </div>
  );
}
