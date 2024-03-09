"use client";
import Input from "../components/utils/input";
import { InputProps } from '../../lib/definitions';
interface MyFormProps {
  inputs: InputProps[];
}
const UniversalForm: React.FC<InputProps> = ( props ) => {
  return (
      <form
        className="flex flex-col item-center gap-2">
        <h1 className="text-center text-xl uppercase pb-3">Sign Up</h1>
        {/* {inputs.map((inputProps, index) => (
          <Input
            key={index}
            {...inputProps}
          />
        ))} */}
      <Input {...props}/>
        <button
          type="submit"
          className="bg-white/20 p-3 mt-2 rounded-md hover:bg-white/40 text-xs">
          Submit
        </button>
      </form>
  );
};

export default UniversalForm;



// 'use client';
// import SocialIcon from "./social-icon";
// import Link from "next/link";

// export default function SignUpForm() {
//   return (
//     <form className="flex flex-col items-center justify-center gap-[30px] py-[30px] w-[430px] ">
//       <h1 className="font-semibold text-center text-[40px] leading-[150%] text-ski">Sign up</h1>
//       <div className="w-full border-[2px] rounded-[10px] border-skin-base dark:border-skin-base">
//         <input
//           className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-skin-base"
//           id="username"
//           type="text"
//           name="username"
//           placeholder="Username"
//           required
//         />
//         <span className="hidden w-full text-[12px] text-skin-error  my-[-15px] px-5">Error</span>
//       </div>
//       <div className="w-full border-[2px] rounded-[10px] border-skin-base dark:border-skin-base border-skin">
//         <input
//           className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-skin-base"
//           id="birthday"
//           type="birthday"
//           name="birthday"
//           placeholder="dd/mm/yyyy..."
//         />
//         <span className="hidden w-full text-[12px] text-skin-error  my-[-15px] px-5">Error</span>
//       </div>
//       <div className="w-full border-[2px] rounded-[10px] border-skin-base dark:border-skin-base">
//         <input
//           className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-skin-base"
//           id="email"
//           type="email"
//           name="email"
//           placeholder="Email"
//         />
//         <span className="hidden w-full text-[12px] text-skin-error  my-[-15px] px-5">Error</span>
//       </div>
//       <div className="w-full border-[2px] rounded-[10px] border-skin-base dark:border-skin-base">
//         <input
//           className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-skin-base"
//           id="password"
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//         />
//         <span className="hidden w-full text-[12px] text-skin-error  my-[-15px] px-5">Error</span>
//       </div>
//       <div className="w-full border-[2px] rounded-[10px] border-skin-base dark:border-skin-base">
//         <input
//           className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-skin-base"
//           id="confirmPassword"
//           type="password"
//           name="confirmPassword"
//           placeholder="Repeat password"
//           required
//         />
//         <span className="hidden w-full text-skin-error text-[12px]  my-[-15px] px-5">Error</span>
//       </div>
//       <button className=" w-[200px] border-[2px] rounded-[12px] p-3 bg-skin-button-accent text-skin-inverted text-[16px] hover:opacity-40">
//         Sign up
//       </button>
//       <p>Log in with:</p>
//       <SocialIcon />
//       <p className="text-center text-[24px]">
//         Have an account?
//         <span
//           className=" ml-[12px] hover:opacity-40 cursor-pointer text-skin-link">
//           <Link href='/signin'>Sign in!</Link>
//         </span>
//       </p>

//     </form>
//   );
// }



