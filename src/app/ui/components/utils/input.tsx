import { InputProps } from "@/app/lib/definitions";
// interface InputPropsItem {
//   props: InputProps
// }

const Input = (inputProps: InputProps) => {
  console.log(inputProps)
  const { type, label, value, name, placeholder, error, disabled, onChange } = inputProps;
  return (
    <div>
      <div className="w-full border-[2px] rounded-[10px] border-skin-base dark:border-skin-base">
        <input
          className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-2 rounded-[10px] placeholder:text-skin-base"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
      {error && <span className="w-full text-[12px] text-skin-error my-[-15px] px-5">Error</span>}
    </div>

  );
};

export default Input;