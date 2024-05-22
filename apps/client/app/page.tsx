import Counter from '@/components/common/Counter';
import Header from '@/components/common/Header';

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <Header/>
      <main
        className='flex-1 overflow-x-hidden overflow-y-auto'
        style={{
          perspective: '300px'
        }}>
        <div className='bg-purple-600 h-screen flex justify-center items-center'>
          Intro
          <Counter/>
        </div>
        <div style={{
          transformStyle: 'preserve-3d',
          zIndex: -1
        }} className='relative h-[80vh]'>
          <div className='absolute text-white inset-0 flex justify-center items-center'>
            Front
          </div>
          <div style={{
            transform: 'translate3d(0,0,-300px) scale(2.1)',
          }} className='h-full flex justify-center items-center text-black bg-fuchsia-200'>
            Back
          </div>
        </div>
        <div className='bg-blue-600 h-screen flex justify-center items-center'>End</div>
      </main>
    </div>
  );
}
