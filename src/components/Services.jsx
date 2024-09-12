/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdDevices } from "react-icons/md";
import { CiBezier } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import CardServices from "./CardServices";
import Title from "./Title";
import { useContext } from "react";
import { modes } from "../context/Context";

const Services = () => {
  const NavBar = [
    { id: 1, name: "home", link: "" },
    { id: 2, name: "Services", link: "" },
    { id: 3, name: "About", link: "" },
    { id: 4, name: "Portfolio", link: "" },
    { id: 5, name: "Contact", link: "" },
  ];
  const CardServeses = [
    {
      id: 1,
      image: <CiBezier/>,
      title: "UI / UX DESIGN",
      discrption:
        "Crafting intuitive, visually appealing, and user-friendly interfaces involves wireframing and prototyping.",
    },
    {
      id: 2,
      image: <HiMiniComputerDesktop/>,
      title: "WEB DEVELOPMENT",
      discrption:
        "Creating complex interactive web apps using HTML, CSS and JavaScript for frontend development.",
    },
    {
      id: 3,
      image:<IoCodeSlashOutline/>,
      title: "WEB APPLICATION",
      discrption:
        "Building interactive web applications using React.js and next.js",
    },
    {
      id: 4,
      image:<MdDevices/>,
      title: "Responsive Design",
      discrption:
        "Optimizing websites and apps for different devices ensures a seamless experience across desktops, tablets, and smartphones.",
    },
    {
      id: 5,
      image:<IoRocketOutline/>,
      title: "PERFORMANCE OPTIMIZATION",
      discrption:
        "Optimizing frontend code and assets to improve loading times , SEO and overall performance.",
    },
    {
      id: 6,
      image: <IoCodeSlashOutline/>,
      title: "COLLABORATION",
      discrption:"Crafting intuitive, visually appealing, and user-friendly interfaces involves wireframing and prototyping.",
    },
  ];

  const { mode } = useContext(modes);
  return (
    <section
      className={`${
        mode === true
          ? "bg-[#1d1d1d] text-[#fff] border-gray-600"
          : "bg-[#dee4e7] text-[#1d1d1d] shadow-xl "
      }  rounded-t-md mt-16 lg:mt-32 px-10  relative   transition-colors`}
    >
      <div
        className={`${
          mode === true
            ? "bg-[#1d1d1d] text-[#fff]"
            : "bg-[#dee4e7] text-[#1d1d1d] "
        } lg:block hidden rounded-t-md absolute w-[65%]  h-[10%] -top-14 right-0 p-7 `}
      >
        <ul className="flex justify-between items-center ">
          {NavBar.map((data) => {
            return (
              <a key={data.id} href={data.link} className=" ">
                <li className=" font-medium after:hover:transition-all after:hover:duration-500 uppercase text-sm    ">
                  {data.name}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
      <div className="py-24 text-center">
        <Title
          title="Our Services"
          discrption="Turn Ideas"
          hilight="Into Actionable"
          discrption2="Insights"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {CardServeses.map((data) => {
          return <CardServices key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Services;
