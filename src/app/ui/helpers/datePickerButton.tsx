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
    <div ref={refDatePicker} className='p-1 mt-2 select-none '>
      <div className='relative'>
        <div
          onClick={() => {
            setOpen(visible => !visible)
          }}
          className='cursor-pointer text-xl rounded-lg  mb-1  flex items-center justify-center '
        >
          &#x1F4C5;
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
