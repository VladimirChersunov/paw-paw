// Этот файл содержит определения типов для ваших данных.
// Он описывает форму данных и какой тип данных должен принимать каждое свойство.

import { ChangeEvent } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder: string
  error: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined
}