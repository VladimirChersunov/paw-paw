'use client'
import { useState, useEffect, useRef } from 'react'
import DatePicker from './datePicker'

export function DatePickerButton () {
  const refDatePicker = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [open])

  const handleClickOutside = (e: MouseEvent) => {
    if (!refDatePicker.current?.contains(e.target as Node)) {
      setOpen(false)
    }
  }

  return (
    <div ref={refDatePicker} className='p-1 mt-2'>
      <div className='relative'>
        <div
          onClick={() => {
            setOpen(visible => !visible)
          }}
          className='flex select-none flex-row bg-fill-base rounded-lg items-center justify-center border mb-2 border-yellow-300'
        >
          <input
            className='rounded-l-lg outline-none bg-inherit pl-1 '
            placeholder='Enter birth date'
          />
          <div className='w-[40px] h-[40px] cursor-pointer text-3xl rounded-lg  mb-1  flex items-center justify-center '>
            &#x1F4C5;
          </div>
        </div>

        {open && (
          <>
            <DatePicker />
          </>
        )}
      </div>
    </div>
  )
}
