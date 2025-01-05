import { useState } from "react";

export default function ContactFormInput({
  id,
  name,
  placeholder,
  type,
  label,
}) {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`text-blue-950 font-semibold transition-all duration-300  absolute -z-10 ${
          isEmpty ? "top-0" : "-top-1/2"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`border-b-2 outline-none px-2 py-3 w-full rounded ${
          isEmpty ? "border-b-slate-300" : "border-b-blue-900"
        }`}
        placeholder={placeholder}
        onKeyUp={(e) => {
          e.currentTarget.value !== "" ? setIsEmpty(false) : setIsEmpty(true);
        }}
      />
    </div>
  );
}
