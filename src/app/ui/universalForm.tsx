"use client";
import Input from "./universalInput";
import { InputProps } from '../lib/definitions';
import { ChangeEvent, FormEvent, useState } from 'react';
import useInput from "../lib/hooks/inputHook";

const UniversalForm: React.FC<{ inputs: InputProps[] }> = ({ inputs }) => {

  const { value, error, onChange, setError } = useInput("")

  const [name, setName] = useState('')
  


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim()) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <form
    onSubmit={handleSubmit}
      className="flex flex-col item-center gap-2">
      <h1 className="text-center text-xl uppercase pb-3">Sign Up</h1>
      {inputs.map((item, index) => (
        <Input
          key={index}
          {...item}
        />
      ))}
      <button
        type="submit"
        className="bg-white/20 p-3 mt-2 rounded-md hover:bg-white/40 text-xs">
        Submit
      </button>
    </form>
  );
};

export default UniversalForm;






