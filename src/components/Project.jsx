import React, { useContext } from "react";
import { modes } from "../context/Context";
import Title from "./Title";
import { GoArrowUpRight } from "react-icons/go";
import { projectData } from "../constant";
import CardProjects from "./CardProjects";
import { Link } from "react-router-dom";

const Project = () => {
  const { mode } = useContext(modes);
  return (
    <div
      className={`py-16 px-10 shadow-xl rounded-b-2xl ${
        mode === true
          ? "bg-[#1d1d1d] text-[#fff]"
          : "bg-[#dee4e7] text-[#1d1d1d]"
      }  `}
    >
      <div className=" flex justify-between items-center">
        <div>
          {" "}
          <Title
            title="Our Project"
            discrption="Dive into my"
            hilight=" portfolio &"
            discrption2="give me your feedback"
            element={<br />}
          />
        </div>
        <Link to='AllProject'>
        <button className=" flex items-center text-end mt-3 text-base md:text-xl cursor-pointer font-semibold">
          View All Work{" "}
          <span className="ml-3 mt-3 text-lg md:text-3xl  ">
            <GoArrowUpRight className="" />
          </span>
        </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-16">
        {projectData.map((item,index) => 
          (
           index < 3  &&  <CardProjects key={item.id} items={item}/>
          )
        )}
      </div>
    </div>
  );
};

export default Project;
