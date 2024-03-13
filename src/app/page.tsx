import DatePicker from '@/app/ui/helpers/datePicker'
import CircularSelector from './ui/helpers/circularSelector';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'

];

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen  items-center justify-center  p-24">
      <h1 className="text-3xl mb-[40px]">Hello world</h1>
      <DatePicker />
      <CircularSelector options={months} />
    </main>
  );
}
