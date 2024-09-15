import React from "react";
import myPhoto from "../image/Capture.PNG";
import javaScript from "../image/javascript.svg";
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6"; 
import SocialMedi from "./SocialMedi";
import { useContext } from "react";
import {modes} from "../context/Context"




const Landing = () => {
  const { mode } = useContext(modes);
  const SocialMeda = [
    { id: 1, icon: <FaLinkedinIn />, link: "" },
    { id: 2, icon: <FaGithub />, link: "" },
    { id: 3, icon: <FaWhatsapp />, link: "" },
  ];

  const DownloadCVButton = () => {

      const link = document.createElement('a');
      link.href = `${process.env.PUBLIC_URL}/fiezAlhagCv.pdf`; // استبدل 'path_to_your_cv_file.pdf' بمسار ملف الـ PDF الخاص بك
      link.download = 'fiezAlhagCv.pdf'; // اسم الملف الذي سيتم تنزيله
      link.click();

  }

  
  return (
    <section className={`${mode === true ? 'bg-[#1d1d1d] text-[#fff]': "bg-[#dee4e7] text-[#1d1d1d]"} shadow-xl rounded-md my-6 r relative transition-colors `}>
      <main className=" grid grid-cols-4 lg:grid-cols-12 py-16">
        <div className=" col-span-4 px-2 md:px-10">
          <div className="">
            <div className={`px-4 py-8  ${mode === true ? 'borders' : "border border-solid border-gray-800"}  md:px-4 rounded-md md:py-8` }>
              <div className="relative text-center">
                <div className="w-full">
                  <img className="object-contain" src={myPhoto} alt="" loading="lazy" />
                </div>
                <div className=" absolute w-10 h-10 backdrop-blur-sm px-2 py-2 rounded-xl -left-5 top-16 rotate-12 borders ">
                  <img src={javaScript} alt="" />
                </div>
                <div className=" absolute text-2xl text-cyan-500 backdrop-blur-sm px-2 py-2 rounded-xl left-4 bottom-6 -rotate-12 borders ">
                  <FaReact />
                </div>
                <div className=" absolute text-2xl text-red-700 backdrop-blur-sm px-2 py-2 rounded-xl -right-3 top-0 -rotate-12 borders ">
                  <FaAngular />
                </div>
                <div className=" absolute text-2xl text-black backdrop-blur-sm px-2 py-2 rounded-xl -right-3 bottom-24 rotate-12 borders ">
                  <FaGithub />
                </div>
              </div>
              <div className=" text-center  py-3  ">
                <h4 className="text-3xl ">Fiez Alhag</h4>
                <p className="text-sm text-gray-700 uppercase pt-2">Available For Freelance</p>
                <ul className="md:flex hidden justify-center items-center my-4 gap-2">
                  {SocialMeda.map((data) => {
                    return (
                        <SocialMedi key={data.id} className={` p-4 rounded-md border border-solid border-gray-500 ${mode === true ? '  hover:bg-[#fff] hover:text-black' : 'hover:bg-black hover:text-[#fff]'} transition-all duration-300`} link={data.link} icon={data.icon}/>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-4 md:col-span-8 px-10 lg:px-0 lg:pr-3 mt-6 lg:mt-0   ">
          <h1 className="lg:text-6xl text-4xl mt-3  ">
            <span className=""> Hello, I’m <span className={`font-semibold ${mode === true ? "text-[#c8f31d]" : "bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 "}`}> Fiez Alhag</span></span>

            ,<br />
            <span className=" mb-2"> 
              <span className={`${mode === true ? 'borders' : 'border border-solid border-black'} relative    py-3 px-5 text-3xl lg:text-5xl mb-3  `}>
                Front-end Developer  
                <li className={` ${mode === true ? ' after:bg-white before:bg-white'  : 'after:bg-black before:bg-black'} after:absolute after:w-2 after:h-2 after:p-1  after:rounded-full after:-top-1 after:-left-1 before:absolute before:w-2 before:h-2 before:p-1  before:rounded-full before:-right-1 before:-top-1`}></li>
                <li className={` ${mode === true ? ' after:bg-white before:bg-white'  : 'after:bg-black before:bg-black'} after:absolute after:w-2 after:h-2 after:p-1  after:rounded-full after:-bottom-1 after:-left-1 before:absolute before:w-2 before:h-2 before:p-1  before:rounded-full before:-right-1 before:-bottom-1`}   ></li>
              </span>
                <span> Based</span> <br className=" hidden lg:inline"/> in Syria
            </span>
          </h1>
          <div className="flex lg:flex-row flex-col gap-10 mt-20 ">
            <h1 className="text-6xl">
                  +2 <span className="text-sm">Years <br/> of Experience</span>
            </h1>
            <h1 className="text-6xl">
                  +10 <span className="text-sm">Clients <br/> Worldwide</span> 

            </h1>
            <div className="flex justify-center items-center">
            <button className={`${mode === true ?  " border-[#fff] hover:text-black hover:bg-[#fff]" : "border-black hover:text-[#fff] hover:bg-black shadow-lg"} outline-none border border-solid  px-10 py-3 font-medium text-md transition-all duration-300   rounded-md`} onClick={DownloadCVButton} >Download CV</button>
            </div>
          </div>
         
        </div>
      </main>
      <div className={`lg:block hidden rounded-b-md absolute w-2/6 ${mode === true ? 'bg-[#1d1d1d]' : "bg-[#dee4e7]"}  h-[10%] -bottom-14 left-0 shadow-xl `}>
      </div>
    </section>
  );
};

export default Landing;
