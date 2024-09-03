import React from "react";
import { useContext } from "react";
import { modes } from "../context/Context";
const CardServices = ({ data }) => {
  const {mode} =useContext(modes)
  return (
    <div className={`${mode === true ?  'after:bg-[#c8f31d] ' : 'bg-[#ECEFF1] after:bg-gradient-to-r after:from-violet-600 after:to-indigo-600'} shadow-xl borders rounded-md  bgImg relative after:absolute after:w-4/5 after:h-[3px] after:bg-[#c8f31d] after:-bottom-[2px] after:left-9 after:md:left-9 after:rounded-lg `}  >
      <div className="py-7 px-6 ">
        <div className={`text-7xl ${mode === true ?  ' text-[#eceff1]' : 'text-[#1d1d1d]'} `} >
          {data.image}
        </div>
        <div className="">
          <h1 className={`text-lg  font-bold py-4 uppercase  `}>
            {data.title}
          </h1>
          <p className={`text-md font-medium leading-relaxed pb-4 ${mode === true ? ' text-gray-400' : 'text-[#1d1d1d]'}`}>{data.discrption}</p>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
