/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import SocialMedi from "./SocialMedi";
import { ToggleButton } from "./ToggleButton";
import { useContext } from "react";
import {modes} from "../context/Context"




const Header = () => {
  const { mode} = useContext(modes);
  const SocialMeda = [
    { id: 1, icon: <FaLinkedinIn />, link: "" },
    { id: 2, icon: <FaGithub />, link: "" },
    { id: 3, icon: <FaWhatsapp />, link: "" },
  ];
  return (
    <div className=" flex justify-between items-center py-6 ">
      <h1 className={`text-4xl font-bold ${mode === true ? 'text-white' : ' bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600' } `}>Fiez</h1>
      <ul className="md:flex hidden gap-4 ml-10 ">
        {SocialMeda.map((data) => {
          return (
              <SocialMedi key={data.id} className={`  p-3 rounded-full border border-solid border-gray-500 ${mode === true ? ' text-white hover:bg-white hover:text-black' :  'text-black hover:bg-black hover:text-[#fff]'} transition-all duration-400`} link={data.link} icon={data.icon}/>
          );
        })}
      </ul>
      <h2 className="text-lg  ">
        <ToggleButton/>
      </h2>

    </div>
  );
};

export default Header;
