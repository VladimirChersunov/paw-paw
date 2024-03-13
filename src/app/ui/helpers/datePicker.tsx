"use client"
import React, { useState } from 'react';
import Calendar from './calendar';

const DatePicker: React.FC = () => {
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = (new Date().getMonth() + 1).toString();
  const currentDate = new Date().getDate();

  const [year, setYear] = useState<string>(currentYear);
  const [month, setMonth] = useState<string>(currentMonth);
  const [selectedDate, setSelectedDate] = useState<number | null>(currentDate);

  const generateYears = (): string[] => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 100; i <= currentYear; i++) {
      years.push(i.toString());
    }
    return years;
  };

  const months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex mb-4">
        <select
          className="w-[50%] mr-4 px-4 py-2 bg-[#00d8d8] text-center text-white rounded-md focus:outline-none focus:bg-[#C9FFFF] focus:text-[#00d8d8]"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {generateYears().map((year) => (
            <option key={year} value={year} >
              {year}
            </option>
          ))}
        </select>
        <select
          className="w-[50%]px-4 py-2 bg-[#00d8d8] text-center text-white rounded-md focus:outline-none focus:bg-[#C9FFFF] focus:text-[#00d8d8]"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.name}
            </option>
          ))}
        </select>
      </div>
      <div className="calendar-container">
        <Calendar month={month} year={year} selectedDate={selectedDate} onDateClick={handleDateClick} />
      </div>
    </div>
  );
};

export default DatePicker;

// export default function DatePicker() {
//   // Генерация списка годов (за сто лет от текущего)
//   const generateYears = () => {
//     const currentYear = new Date().getFullYear();
//     const years = [];
//     for (let i = currentYear - 100; i <= currentYear; i++) {
//       years.push(i);
//     }
//     return years;
//   };

//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//   const day = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
//   return (
//     <div >
//       <div className="flex justify-between mb-[20px]">
//         <button>left</button>
//         <select>
//           <option value="">Select Month</option>
//           {months.map((month) => (
//             <option key={month} value={month}>
//               {month}
//             </option>
//           ))}
//         </select>

//         <select>
//           <option value="">Select Year</option>
//           {generateYears().map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>

//         {/* <select
//           name="year"
//           id="year"
//           value={year}
//         >
//         </select> */}
//         <button>rigth</button>
//       </div>
//       <ul className="flex flex-row items-center justify-center gap-[30px]">
//         {day.map((item, index) => {
//           return (
//             <li
//               className={`${(index == 5 || index == 6) ? 'text-skin-error' : 'text-skin-base'}`}
//               key={index}
//             >
//               {item}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// };
