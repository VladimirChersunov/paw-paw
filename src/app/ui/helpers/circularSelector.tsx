'use client'
import React, { useState, useEffect, useCallback } from 'react'
import IconArrowUp from '../icons/iconsArrowUp'
import IconArrowDown from '../icons/iconsArrowDown'

interface CircularSelectorProps {
  selected: number
  dataArray: string[]
  onChange?: (selectedIndex: number) => void
}

const CircularSelector: React.FC<CircularSelectorProps> = ({
  selected,
  dataArray,
  onChange = () => {}
}) => {
  const [selectedIndex, setSelectedIndex] = useState(selected)
  const [isHovered, setIsHovered] = useState(false)

  const handleNext = useCallback(() => {
    setSelectedIndex(prevIndex =>
      prevIndex === dataArray.length - 1 ? 0 : prevIndex + 1
    )
  }, [dataArray.length])

  const handlePrevious = useCallback(() => {
    setSelectedIndex(prevIndex =>
      prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1
    )
  }, [dataArray.length])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isHovered) {
        if (event.deltaY > 0) {
          handleNext()
        } else {
          handlePrevious()
        }
      }
    }
    if (isHovered) {
      window.addEventListener('wheel', handleScroll)
    }

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [handleNext, handlePrevious, isHovered])

  useEffect(() => {
    onChange(selectedIndex)
  }, [selectedIndex])

  return (
    <div
      className='flex flex-col justify-center items-center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex flex-col justify-center gap-2 items-center w-36 h-40 rounded-lg shadow-lg transition-opacity duration-300'>
        <button
          className='flex justify-center items-center focus:outline-none transform hover:scale-110'
          onClick={handlePrevious}
        >
          <IconArrowUp />
        </button>

        <div className='text-center text-lg'>
          {
            dataArray[
              (selectedIndex === 0 ? dataArray.length : selectedIndex) - 1
            ]
          }
        </div>

        <div className='text-white bg-[#00d8d8] px-4 rounded-xl'>
          {dataArray[selectedIndex]}
        </div>

        <div className='text-center text-lg'>
          {dataArray[(selectedIndex + 1) % dataArray.length]}
        </div>

        <button
          className='focus:outline-none text-2xl transform hover:scale-110'
          onClick={handleNext}
        >
          <IconArrowDown />
        </button>
      </div>
    </div>
  )
}

export default CircularSelector
