'use client'
import Input from './universalInput';
import { InputProps } from '../lib/definitions';
import { FormEvent } from 'react';
import { useState } from 'react';

const UniversalForm: React.FC<{ inputs: InputProps[] }> = ({ inputs }) => {


  const [formState, setFormState] = useState<{ [key: string]: string }>(
    inputs.reduce((prev, curr) => ({ ...prev, [curr.name]: curr.value || '' }), {})
  );


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(formState);    
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };  

  return (
    <form onSubmit={handleSubmit} className='flex flex-col item-center gap-2 z-0'>
      <h1 className='text-center text-xl uppercase pb-3'>Sign Up</h1>
      {inputs.map((input, index) => (
        <Input
          key={index}
          {...input}
          value={formState[input.name]}
          onChange={handleChange}
        />
      ))}
      <button
        type='submit'
        className='bg-white/20 p-3 mt-2 rounded-md hover:bg-white/40 text-xs'
      >
        Submit
      </button>
    </form>
  )
}

export default UniversalForm
