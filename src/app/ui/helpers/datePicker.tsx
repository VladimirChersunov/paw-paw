'use client'
import { useState, useCallback } from 'react';
import Calendar from './calendar';
import CircularSelector from './circularSelector';
import generateYears from '@/app/lib/helpers/generateYears';

const DatePicker: React.FC = () => {
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<number>(new Date().getDate());

  //генерация массива годов 
  const years = generateYears(1925, 2030);

  //массив месяцев
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
  ]

  const currentYear = new Date().getFullYear().toString()
  const currentMonth = new Date().getMonth()
 

  // Обработчики изменения года и месяца  
  const handleYearChange = useCallback((selectedIndex: number) => {
    setYear((prev) => parseInt(years[selectedIndex]))    
  }, [years, setYear]);
  
  const handleMonthChange = useCallback((selectedIndex: number) => {
    setMonth((prev) => selectedIndex+1)       
  }, [setMonth]);
  


  return (
    <div
      className="absolute shadow-2xl shadow-slate-300  p-10  rounded-xl bg-skin-fill z-50  w-max select-none left-10 top-[-165px] border border-skin-base"
    >
      <div className='flex flex-col items-center'>
        <div className='flex mb-4'>
          <CircularSelector
            onChange={handleYearChange}
            selected={years.indexOf(currentYear)}
            dataArray={years}
          />

          <CircularSelector
            onChange={handleMonthChange}
            selected={currentMonth}
            dataArray={months}
          />
        </div>
        <div className=''>
          <Calendar
            month={month}
            year={year}
            selectedDate={selectedDate}           
            onDateClick={setSelectedDate}
          />
        </div>
      </div>
    </div>
  )
}
export default DatePicker
