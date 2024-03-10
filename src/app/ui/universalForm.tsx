"use client";
import Input from "./universalInput";
import { InputProps } from '../lib/definitions';
import {FormEvent} from 'react';
import useInput from "../lib/hooks/inputHook";

const UniversalForm: React.FC<{ inputs: InputProps[] }> = ({ inputs }) => {
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const usernameInput = useInput('')
  const confirmPasswordInput = useInput('')
  const universalInput = useInput('')  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    validateInput(emailInput)
    validateInput(passwordInput)
    validateInput(usernameInput)
    validateInput(confirmPasswordInput)
    console.log('email ==>', emailInput.value, 'password ==>', passwordInput.value)
  }

  const validateInput = (input: { value: string, setError: (value: boolean) => void }) => {
    if (!input.value.trim()) {
      input.setError(true)
    } else {
      input.setError(false)
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
          {...universalInput}
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






