import { useContext } from "react";
import { modes } from "../context/Context";
import Title from "./Title";
import { GoArrowUpRight } from "react-icons/go";
import CardProjects from "./CardProjects";
import { Link } from "react-router-dom";
import { projectData } from "../constants";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils";

const Project = () => {
  const { mode } = useContext(modes);
  useGSAP(() => {
    animateWithGsap("#viewAll", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);
  return (
    <div
      className={`py-16 px-10 shadow-xl rounded-b-2xl ${
        mode ? "bg-[#1d1d1d] text-[#fff]" : "bg-[#dee4e7] text-[#1d1d1d]"
      }  `}
    >
      <div className=" flex justify-between items-center">
        {""}
        <Title
          title="Our Project"
          description="Dive into my"
          highlight=" portfolio &"
          description2="give me your feedback"
          element={<br />}
        />
        <Link to="AllProject">
          <button
            className=" flex items-center text-end mt-3 text-base md:text-xl cursor-pointer font-semibold opacity-0  translate-y-36  "
            id="viewAll"
          >
            View All Work{" "}
            <span className="ml-3 mt-3 text-lg md:text-3xl  ">
              <GoArrowUpRight className="" />
            </span>
          </button>
        </Link>
      </div>
      <ProjectList />
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-16">
      {projectData.map(
        (item, index) =>
          index < 3 && <CardProjects key={item.id} items={item} />
      )}
    </div>
  );
};

export default Project;
