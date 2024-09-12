import React, { useContext } from "react";
import { modes } from "../context/Context";
import { useParams, Link } from "react-router-dom";
import { projectData } from "../constant";
import { GoArrowLeft } from "react-icons/go";

const ProjectDetails = () => {
  const { mode } = useContext(modes);
  const { id } = useParams();
  console.log(id);

  const data = projectData.find((item) => item.id === Number(id));
  if (data) {
    return (
      <section
        className={` ${
          mode === true ? "bg-[#1d1d1d] text-[#fff]" : "bg-[#dee4e7] text-[#1d1d1d]"
        } rounded-lg my-5 shadow-xl transition-colors px-10 md:px-16 py-9 md:py-11 `}
      >
        <div>

          <Link to="/">
            <div className="flex items-center text-sm gap-3 md:text-xl ">
              <GoArrowLeft />
              <span>Back Home</span>
            </div>
          </Link>

          <div className=" h-80 mt-6 ">
            <img className=" w-full h-full object-cover md:object-cover rounded-lg" src={data.imag1} alt="" />
          </div>

          <div className={`flex flex-col md:flex-row justify-between pt-9`} >
            <div className=" w-full md:w-1/2  ">
                <h1 className=" text-4xl my-2">{data.name}</h1>
                <p className=" text-sm md:text-base  font-normal leading-6">{data.description}</p>
            </div>
            <div className="bg-[#232323] p-4 w-full  md:w-1/3 my-7 md:my-0 rounded-lg  ">
                
            </div>

          </div>

        </div>
      </section>
    );
  } else {
    return <div>page not data</div>;
  }
};

export default ProjectDetails;
