'use client';
import Link from "next/link";
import IconGoogle from "../icons/iconsGoogle";
import IconFacebook from "../icons/iconsFacebook";
import IconApple from "../icons/iconsApple";
import SocialIcon from "./social-icon";


export default function SignInForm() {
  return (
    <form className="flex flex-col items-center justify-center gap-[30px] py-[30px] w-[430px] ">
      <h1 className="font-semibold text-center text-[40px] leading-[150%]">Sign in</h1>
      <div className="w-full border-[2px] rounded-[10px] border-border-secondary dark:border-border-secondary">
        <input
          className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-placeholder-color"
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <span className="hidden w-full text-[12px] text-skin-error  my-[-15px] px-5">Error</span>
      </div>
      <div className="w-full border-[2px] rounded-[10px] border-border-secondary dark:border-border-secondary">
        <input
          className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-placeholder-color"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <span className="hidden w-full text-[12px] text-skin-error  my-[-15px] px-5">Error</span>
      </div>
      <button className=" w-[200px] border-[2px] rounded-[12px] p-3 mt-2 bg-skin-button-accent text-skin-inverted text-[16px] hover:opacity-40">
        Sign in
      </button>
      <p>Log in with:</p>
      <SocialIcon/>
      <p className="text-center text-[24px] mt-[30px]">
        Don`t have an account?
        <span
          className=" ml-[12px] hover:opacity-40 cursor-pointer text-[#008282]">
          <Link href='/signup'>Sign up!</Link>
        </span>
      </p>

    </form>
  );
}



