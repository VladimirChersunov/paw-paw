"use client"
import UniversalForm from '../ui/universalForm';
import AuthLogo from '../ui/auth/logo';
import { InputProps } from '../lib/definitions';
import SocialIcon from '../ui/auth/social-icon';
import Link from 'next/link';
import IconEye from '../ui/icons/iconsEye';
import IconEyeOff from '../ui/icons/iconsEyeOff';
import { useState } from 'react';

export default function SignUpPage() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);

  const togglePasswordConfirmVisibility = () => {
    setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
  };


  const inputs: InputProps[] = [
    {
      type: "text",
      label: "Username",
      value: "",
      name: "username",
      placeholder: "Username...",
      error: false,
      disabled: false,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Email...",
      name: "email",
      value: "",
      error: false,
      disabled: false
    },
    {
      type: "date",
      label: "date",
      value: "",
      name: "date",
      placeholder: "date",
      error: false,
      disabled: false,
    },
   
    {
      label: "Password",
      type: isPasswordVisible ? "text" : "password",
      placeholder: "Password...",
      name: "password",
      value: "",
      error: false,
      disabled: false,
      icon: isPasswordVisible ? <IconEyeOff onClick={togglePasswordVisibility} /> : <IconEye onClick={togglePasswordVisibility} />
    },
    {
      label: "re-Password",
      type: isPasswordConfirmVisible ? "text" : "password",
      placeholder: "re-Password...",
      name: "rePassword",
      value: "",
      error: false,
      disabled: false,
      icon: isPasswordConfirmVisible ? <IconEyeOff onClick={togglePasswordConfirmVisibility} /> : <IconEye onClick={togglePasswordConfirmVisibility} />
    },
  ];

  return (
    <main className="flex flex-col bg-fill-background-paw-pals items-center justify-center h-screen">
      <AuthLogo />
      <UniversalForm inputs={inputs} />
      <p>Log in with:</p>
      <SocialIcon />
      <p className="text-center text-[24px]">
        Have an account?
        <span
          className=" ml-[12px] hover:opacity-40 cursor-pointer text-skin-link">
          <Link href='/signin'>Sign in!</Link>
        </span>
      </p>
    </main>
  );
}


