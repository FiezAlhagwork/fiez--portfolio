import React from "react";
import { useContext } from "react";
import { modes } from "../context/Context";

const Title = ({title,discrption,hilight,discrption2 ,element}) => {
  const {mode} = useContext(modes)
  return (
    <>
      <h5 className="uppercase font-semibold text-gray-500 tracking-widest  ">
        {title}
      </h5>
      <h1 className="text-2xl md:text-4xl mt-3 font-extrabold leading-8">
        {discrption} <span className={`${mode === true ? 'text-[#c8f31d]':'bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600'}`}>{hilight}</span>{" "}{element}
        {discrption2}
      </h1>
      </>
  );
};

export default Title;
