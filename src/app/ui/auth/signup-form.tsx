'use client';
import SocialIcon from "@/app/components/social-icon/social-icon";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <form className="flex flex-col items-center justify-center gap-[30px] py-[30px] w-[430px] ">
      <h1 className="font-semibold text-center text-[40px] leading-[150%]">Sign up</h1>
      <div className="w-full border-[2px] rounded-[10px] border-border-secondary dark:border-border-secondary">
        <input
          className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-placeholder-color"
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <span className="hidden w-full text-[12px] text-red-600  my-[-15px] px-5">Error</span>
      </div>
      <div className="w-full border-[2px] rounded-[10px] border-border-secondary dark:border-border-secondary">
        <input
          className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-placeholder-color"
          id="birthday"
          type="birthday"
          name="birthday"
          placeholder="dd/mm/yyyy..."
        />
        <span className="hidden w-full text-[12px] text-red-600  my-[-15px] px-5">Error</span>
      </div>
      <div className="w-full border-[2px] rounded-[10px] border-border-secondary dark:border-border-secondary">
        <input
          className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-placeholder-color"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <span className="hidden w-full text-[12px] text-red-600  my-[-15px] px-5">Error</span>
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
        <span className="hidden w-full text-[12px] text-red-600  my-[-15px] px-5">Error</span>
      </div>
      <div className="w-full border-[2px] rounded-[10px] border-border-secondary dark:border-border-secondary">
        <input
          className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-placeholder-color"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Repeat password"
          required
        />
        <span className="hidden w-full text-[12px] text-red-600  my-[-15px] px-5">Error</span>
      </div>
      <button className=" w-[200px] border-[2px] rounded-[12px] p-3 bg-[#00D8D8] text-[#FAFAFA] text-[16px] hover:opacity-40">
        Sign up
      </button>
      <p>Log in with:</p>
      <SocialIcon/>
      <p className="text-center text-[24px]">
        Have an account?
        <span
          className=" ml-[12px] hover:opacity-40 cursor-pointer text-[#008282]">
          <Link href='/signin'>Sign in!</Link>
        </span>
      </p>

    </form>
  );
}



// export default function LoginForm() {
//   const [errorMessage, dispatch] = useFormState(authenticate, undefined);
//   return (
//     <form action={dispatch} className="space-y-3">
//       <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
//         <h1 className={`${lusitana.className} mb-3 text-2xl`}>
//           Please log in to continue.
//         </h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//               <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 required
//                 minLength={6}
//               />
//               <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>
//         <LoginButton />
//         <div
//           className="flex h-8 items-end space-x-1"
//           aria-live="polite"
//           aria-atomic="true"
//         >
//           {errorMessage && (
//             <>
//               <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
//               <p className="text-sm text-red-500">{errorMessage}</p>
//             </>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }