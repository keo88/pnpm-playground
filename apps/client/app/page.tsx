import Counter from '@/components/common/Counter';
import Header from '@/components/common/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <Counter />
      </main>
    </>
  );
}
