import React from "react";
import { useContext } from "react";
import { modes } from "../context/Context";
const TextFiled = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    coustmStyle,
    coustmStylabel,
    required
  }) => {
    const {mode} = useContext(modes)
  return (
      <div className={` ${coustmStylabel} `}>
        <input
          name={name}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          className={` ${mode === true ? " border  border-solid bg-[#fff]  focus:ring-[#c8f31d] focus:border-[#c8f31d] " : "border border-solid border-[#1d1d1d]  focus:ring-[#4649ff] focus:border-[#4649ff] "} bg-transparent    text-gray-900 text-sm rounded-lg 
         outline-none
          w-full p-3 ${coustmStyle}`}
          onChange={handleChange}
        />
      </div>
  );
};

export default TextFiled;
