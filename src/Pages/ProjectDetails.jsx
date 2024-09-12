import React, { useContext } from "react";
import { modes } from "../context/Context";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectData } from "../constant";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { CiCalendarDate } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbPlanet } from "react-icons/tb";
import { GoIterations } from "react-icons/go";

const ProjectDetails = () => {
  const { mode } = useContext(modes);
  const { id } = useParams();
  const projectId = parseInt(id) || 1;

  const navigate = useNavigate();

  const handlePrevProject = () => {
    if (projectId > 1) {
      navigate(`/projectDetails/${projectId - 1}`);
    }
  };

  const handleNextProject = () => {
    if (projectId < projectData.length) {
      navigate(`/projectDetails/${projectId + 1}`);
    }
  };

  const data = projectData.find((item) => item.id === projectId);

  if (data) {
    return (
      <section
        className={` ${
          mode === true
            ? "bg-[#1d1d1d] text-[#fff]"
            : "bg-[#dee4e7] text-[#1d1d1d]"
        } rounded-lg my-5 shadow-xl transition-colors px-10 md:px-16 py-9 md:py-11 `}
      >
        <div>
          <Link to="/">
            <div className="flex items-center text-sm gap-3 md:text-xl ">
              <GoArrowLeft />
              <span>Back Home</span>
            </div>
          </Link>

          <div className=" h-96 mt-6 ">
            <img
              className=" w-full h-full object-cover md:object-cover rounded-lg"
              src={data.imag1}
              alt=""
            />
          </div>

          <div className={`flex flex-col md:flex-row justify-between pt-9`}>
            <div className=" w-full md:w-1/2  ">
              <h1 className=" text-4xl my-2">{data.name}</h1>
              <p
                className={`text-sm md:text-base  font-normal leading-8 pt-2  ${
                  mode === true ? "text-[#ddd]" : " text-[#2d2d2d]"
                }`}
              >
                {data.description}
              </p>
              <div className="pt-10">
                {data.Features.map((item) => {
                  return (
                    <h1 className="text-lg py-3">
                      <span className="mr-2">
                        <GoIterations />
                      </span>
                      {item}
                    </h1>
                  );
                })}
              </div>
            </div>
            <div
              className={` ${
                mode === true ? "bg-[#232323]" : "bg-[#fff]"
              } p-7 w-full  md:w-1/3 h-fit my-7 md:my-0 rounded-lg  `}
            >
              <div>
                {/* Date */}
                <div>
                  <div className=" flex items-center font-medium">
                    <span className={`text-lg mr-2   `}>
                      <CiCalendarDate />
                    </span>
                    <p className=" text-base">DATE :</p>
                  </div>
                  <p className=" text-base md:text-lg mt-3">28, Apr 2024</p>
                </div>
                {/* CATEGORIES */}
                <div className="pt-6">
                  <div className=" flex items-center font-medium">
                    <span className={`text-lg mr-2   `}>
                      <TfiMenuAlt />
                    </span>
                    <p className=" text-base">CATEGORIES : </p>
                  </div>
                  <p className=" text-base md:text-lg mt-3">
                    {data.categories}
                  </p>
                </div>
                {/*  Website :  */}
                <div className="pt-6">
                  <div className=" flex items-center font-medium pb-3">
                    <span className={`text-lg mr-2   `}>
                      <TbPlanet />
                    </span>
                    <p className=" text-base"> Website :</p>
                  </div>
                  <a href={data.webSite} className=" text-base  ">
                    {data.webSite}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row  gap-7">
            <div>
              <img
                className="w-full h-full  md:object-cover rounded-lg"
                src={data.img2}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full  md:object-cover rounded-lg"
                src={data.img3}
                alt=""
              />
            </div>
          </div>
          <div className=" mt-6 pt-7 border-t border-solid border-[#ddd] flex justify-between">
            <button
              className={`${
                mode === true ? "hover:text-[#c8f31d]" : "hover:text-indigo-600"
              } flex items-center transition-colors duration-200 outline-none border-none text-lg `}
              disabled={projectId === 1}
              onClick={handlePrevProject}
            >
              <span className=" text-3xl mr-2">
                <GoArrowLeft />
              </span>{" "}
              PREV PROJECT
            </button>

            <button
              className={`${
                mode === true
                  ? "hover:text-[#c8f31d]"
                  : " hover:text-indigo-600"
              } flex items-center transition-colors duration-200 outline-none border-none text-lg `}
              disabled={projectId === projectData.length}
              onClick={handleNextProject}
            >
              {" "}
              NEXT PROJECT{" "}
              <span className="text-3xl ml-2">
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return <div>page not data</div>;
  }
};

export default ProjectDetails;
