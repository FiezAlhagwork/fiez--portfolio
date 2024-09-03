import React, { useContext } from 'react'
import { modes } from '../context/Context'
import Title from './Title'


const Project = () => {
    const {mode} = useContext(modes)
  return (
    <div className={`py-8 px-10 ${mode === true ?  "bg-[#1d1d1d]" : "bg-[#dee4e7]"} `}>
        <div className='text-center'> 
        <Title title="Our Project" discrption="Dive into my" hilight=" portfolio &" discrption2="give me your feedback" element={<br/>}/>
        </div>

    </div>
  )
}

export default Project