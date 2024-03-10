"use client";
import Input from "./universalInput";
import { InputProps } from '../lib/definitions';
import {FormEvent} from 'react';
import useInput from "../lib/hooks/inputHook";

const UniversalForm: React.FC<{ inputs: InputProps[] }> = ({ inputs }) => {
  
 // Создаем массив экземпляров useInput для каждого input
 const inputFields = inputs.map(input => useInput(input.value || ''));

  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Проходимся по всем полям ввода и валидируем их
    inputFields.forEach(validateInput);

    // Создаем новый FormData объект из текущей формы
  const formData = new FormData(e.currentTarget as HTMLFormElement);



  console.log(formData.getAll)

    
     
  
  // Используем formData.get('name') для получения значения каждого поля по имени
  const username = formData.get('username');
  const password = formData.get('password');

  
  
  // Теперь у вас есть доступ к значениям полей
  console.log('Username:', username, 'Password:', password);
    
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
      {inputFields.map((input, index) => (
        <Input
          key={index}
          {...inputs[index]}
           value={input.value}
          error={input.error}
          onChange={input.onChange}
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






