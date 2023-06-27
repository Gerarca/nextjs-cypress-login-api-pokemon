import { ChangeEventHandler } from "react";

export default function SimpleInput(
  {
    type,
    name,
    value,
    placeHolder,
    onChange
  }
  :{
    type: string,
    name: string,
    value: string,
    placeHolder?: string,
    onChange: ChangeEventHandler<HTMLInputElement>
  }
) {

  return (
    <div className="relative w-full mx-auto">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        className="w-full
        py-2
        text-base
        border border-gray-300
        rounded
        outline-none
        focus:ring-blue-500 focus:border-blue-500 focus:ring-1"        
      />
    </div>
  );
}