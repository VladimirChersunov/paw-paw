"use client"

import React, { useState } from 'react';
import Calendar from './calendar';
import CircularSelector from './circularSelector'; // Импортируем компонент CircularSelector

const DatePicker: React.FC = () => {
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = (new Date().getMonth() + 1).toString();
  const currentDate = new Date().getDate();

  const [year, setYear] = useState<string>(currentYear);
  const [month, setMonth] = useState<string>(currentMonth);
  const [selectedDate, setSelectedDate] = useState<number | null>(currentDate);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const generateYears = (): string[] => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 100; i <= currentYear; i++) {
      years.push(i.toString());
    }
    return years;
  };

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

  // Обработчики изменения года и месяца
  const handleYearChange = (newYear: string) => {
    setYear(newYear);
  };

  const handleMonthChange = (newMonth: string) => {
    setMonth(newMonth);
    setSelectedIndex(selectedIndex+1)
  };

  return (
    <div
      className={`absolute z-50 shadow-2xl shadow-yellow-300  p-10
        rounded-xl  w-max select-none right-0 `}>
      <div className="flex flex-col items-center">
        <div className="flex mb-4">
          <CircularSelector options={generateYears()} onChange={handleYearChange} />
          <CircularSelector options={months} onChange={handleMonthChange} />
        </div>
        <div className="calendar-container">
          <Calendar month={month} year={year} selectedDate={selectedDate} selectedIndex={selectedIndex} onDateClick={setSelectedDate} />
        </div>
      </div>
    </div>

  );
};

export default DatePicker;
