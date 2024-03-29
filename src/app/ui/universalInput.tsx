import { InputProps } from "@/app/lib/definitions";

const Input = (item: InputProps) => {
  const { type, label, value, name, placeholder, error, disabled, onChange, icon } = item;

  
  //console.log(value)
  return (
    <div className="z-10">
      <div className="w-full border-[2px] rounded-[10px] border-skin-base  flex flex-row justify-center items-center ">
        <input
          className="block w-full h-[60px] bg-inherit text-[15px] p-[20px] outline-none rounded-[10px] placeholder:text-skin-base "
          type={type}
          id={label}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required
        />
        {icon}
      </div>
      {error && <span className="w-full text-[12px] text-skin-error my-[-15px] px-5">Error</span>}
    </div>

  );
};

export default Input;