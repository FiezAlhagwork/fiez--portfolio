import React, { useContext } from 'react'
import { modes } from '../context/Context'
import { GoArrowUpRight } from "react-icons/go";
import {Link} from "react-router-dom"


const CardProjects = ({items}) => {
  const {mode} = useContext(modes)
  return (
    <Link to={`/projectDetails/${items.id}`}>
    <div className={` group w-full   `}>
      <div className={`h-60 p-2 rounded-lg   transition-all duration-300 ${mode === true ?  "group-hover:border-[#c8f31d]" : "group-hover:border-indigo-600"} border-2    border-transparent `}>
        <img className='h-full rounded-lg object-cover' src={items.imag1} alt="ss" />
      </div>
      <div className='p-2 flex justify-between items-center'>
        <div>
        <button className={`${mode === true ?  " border-[#c8f31d] group-hover:text-black group-hover:bg-[#c8f31d]" : "border-indigo-600 group-hover:text-[#fff] group-hover:bg-indigo-600 shadow-lg"} outline-none border border-solid  px-7 py-2 font-medium text-md transition-all duration-300   rounded-md`} >View</button>
          <p className='pt-3 text-md'>{items.name}</p>
        </div>
        <div className={`text-3xl ${mode === true ? 'group-hover:text-[#c8f31d]' : 'group-hover:text-indigo-600' } `}>
          <GoArrowUpRight/>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CardProjects