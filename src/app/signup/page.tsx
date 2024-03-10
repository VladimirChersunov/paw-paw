import UniversalForm from '../ui/universalForm';
import AuthLogo from '../ui/auth/logo';
import { InputProps } from '../lib/definitions';
import SocialIcon from '../ui/auth/social-icon';
import Link from 'next/link';

export default function SignUpPage() {
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
      type: "date",
      label: "date",
      value: "",
      name: "date",
      placeholder: "date",
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
      label: "Password",
      type: "password",
      placeholder: "Password...",
      name: "password",
      value: "",
      error: false,
      disabled: false,
    },
    {
      label: "re-Password",
      type: "password",
      placeholder: "re-Password...",
      name: "rePassword",
      value: "",
      error: false,
      disabled: false,
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