import { DatePickerButton } from './ui/helpers/datePickerButton';

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

    </main>
  );
}
