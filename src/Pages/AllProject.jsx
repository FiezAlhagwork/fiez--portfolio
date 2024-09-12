import React from "react";
import { useContext } from "react";
import { modes } from "../context/Context";
import { projectData } from "../constant";
import CardProjects from "../components/CardProjects";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Title from "../components/Title";

function AllProject() {
  const { mode } = useContext(modes);
  return (
    <section
      className={` ${
        mode === true
          ? "bg-[#1d1d1d] text-[#fff]"
          : "bg-[#dee4e7] text-[#1d1d1d]"
      } rounded-lg my-5 shadow-xl transition-colors px-10 md:px-16 py-9 md:py-11 `}
    >
      <Link to="/">
        <div className="flex items-center text-sm gap-3 md:text-xl ">
          <GoArrowLeft />
          <span>Back Home</span>
        </div>
      </Link>
      <div className=" text-center py-8">
        <Title
          title="Our Project"
          discrption="Dive into my"
          hilight=" portfolio &"
          discrption2="give me your feedback"
          element={<br />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {projectData.map((items) => {
          return <CardProjects key={items.id} items={items} />;
        })}
      </div>
    </section>
  );
}

export default AllProject;
