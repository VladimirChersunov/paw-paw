import { DatePickerButton } from './ui/helpers/datePickerButton';
import Link from 'next/link';

export default function Home() {

  if (typeof window === 'undefined') {
    // Серверный рендеринг 
     console.log('Серверный рендеринг');
  } else {
    // Клиентский рендеринг 
     console.log('Клиентский рендеринг');
  }
  return (
    <main className="flex flex-col  min-h-screen  items-center justify-start  p-24">
      <h1 className="text-3xl mb-[40px]">Hello world</h1>
      <DatePickerButton/>      
      <span
          className=" mt-[120px] hover:opacity-40 cursor-pointer text-skin-link">
          <Link href='/signin'>Sign in!</Link>
        </span>
        <span
          className=" mt-[12px] hover:opacity-40 cursor-pointer text-skin-link">
          <Link href='/signup'>Sign up!</Link>
        </span>
    </main>
  );
}
