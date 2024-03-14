'use client'

import React, { useState } from 'react'
import Calendar from './calendar'
import CircularSelector from './circularSelector' // Импортируем компонент CircularSelector

const DatePicker: React.FC = () => {
  const [year, setYear] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedIndex, setSelectedIndex] = useState<number>(0)


  //генерация массива годов
  const generateYears = (): string[] => {
    const currentYear = new Date().getFullYear()
    const years = []
    for (let i = currentYear - 100; i <= currentYear; i++) {
      years.push(i.toString())
    }
    return years
  }
  const years = generateYears()

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
  const currentMonth = (new Date().getMonth() + 1)
  console.log(currentMonth)

  

  // Обработчики изменения года и месяца
  const handleYearChange = ( selectedIndex: number) => {
    
  }

  const handleMonthChange = ( selectedIndex: number) => {
  
  }

  return (
    <div
      className={`absolute z-50 shadow-2xl shadow-yellow-300  p-10
        rounded-xl  w-max select-none right-0 `}
    >
      <div className='flex flex-col items-center'>
        <div className='flex mb-4'>
          <CircularSelector onChange={handleYearChange} selected={years.indexOf(currentYear)} dataArray={years} />

          <CircularSelector onChange={handleMonthChange}  selected={currentMonth-1} dataArray={months}/>
        </div>
        <div className='calendar-container'>
          {/* <Calendar
            month={month}
            year={year}
            selectedDate={selectedDate}
            selectedIndex={selectedIndex}
            onDateClick={setSelectedDate}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default DatePicker
