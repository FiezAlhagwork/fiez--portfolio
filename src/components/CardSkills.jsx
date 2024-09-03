import React from 'react'
import { useContext } from "react";
import { modes } from "../context/Context";
import {motion} from "framer-motion"

const CardSkills = ({data}) => {
  const {mode} =useContext(modes)
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}  layout className={` ${mode === true ?  "text-[#fff]" : "bg-[#ECEFF1] text-[#1d1d1d]"} borders  rounded-xl relative shadow-xl py-6 px-4 bgImg `}>
      <div className={`  flex gap-8 items-center`}>
      <div className={` ${data.class } text-6xl`}>
        {data.icon}
      </div> 
      <h4 className='text-xl font-semibold' >
        {data.name}
      </h4>
      </div>
      <div>
        {/* <div className={`after:absolute after:w-4/5 after:h-[4px]  after:-bottom-[2px] after:left-9 after:md:left-9 after:rounded-lg ${mode === true ? " after:bg-[#fff]": "after:bg-gray-500"}`}></div>
        <div className={`after:absolute after:w-[60%] after:h-[4px]  after:-bottom-[2px] after:left-9 after:md:left-9 after:rounded-lg ${mode === true ? " after:bg-gray-500": "after:bg-[#fff]"}`}></div> */}
      </div>

    </motion.div>
  )
}

export default CardSkills