import React, { useMemo, useState } from "react";
import Title from "./Title";
import { useContext } from "react";
import { modes } from "../context/Context";
import { skills } from "../constant";
import CardSkills from "./CardSkills";
import {motion ,AnimatePresence} from "framer-motion"

const Skills = () => {
  const buttons = [
    { id: 1, cat: "Frameworks" },
    { id: 2, cat: "language" },
    { id: 3, cat: "Tools" },
  ];
  const { mode } = useContext(modes);
  const [select, setSelect] = useState("");
  const filterFrameworks = useMemo(() => {
    return skills.filter((item) => item.cat === "Frameworks");
  }, []);
  const filterlanguage = useMemo(() => {
    return skills.filter((item) => item.cat === "language");
  }, []);
  const filterVersionControl = useMemo(() => {
    return skills.filter((item) => item.cat === "Tools");
  }, []);

  let data = skills;
  if (select === "Frameworks") {
    data = filterFrameworks;
  } else if (select === "language") {
    data = filterlanguage;
  } else if (select === "Tools") {
    data = filterVersionControl;
  } else {
    data = skills;
  }

  return (
    <div
      className={` ${
        mode === true
          ? "bg-[#1d1d1d] text-[#fff] border-b-[#ffffff33]"
          : "bg-[#dee4e7] text-[#1d1d1d] border-b-gray-500"
      }  py-8 px-10  mt-10 border-b border-b-solid rounded-t-xl  `}
    >
      <div className="text-center py-4">
        <Title
          title="Our Skills"
          discrption="Spotlight on"
          hilight="Success"
          discrption2="Route"
        ></Title>
      </div>
      <div className="flex justify-center gap-4 my-3">
        {buttons.map((item) => {
          return (
            <button
            key={item.id}
              className={`w-[120px] py-4 px-5 h-[30px] md:w-[150px] rounded-lg  md:h-[50px] my-3 flex items-center justify-center md:rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full  before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 before:transition-all border border-solid font-normal md:font-semibold ${
                mode === true
                  ? "before:bg-[#c8f31d] hover:text-[#1d1d1d]  border-[#c8f31d]"
                  : "before:bg-gradient-to-r before:from-violet-600 before:to-indigo-600 border-indigo-600 hover:text-[#fff] "
              } ${
                select === item.cat
                  ? mode === true
                    ? "bg-[#c8f31d] text-[#1d1d1d]"
                    : "text-[#fff] bg-gradient-to-r from-violet-600 to-indigo-600 border-indigo-600"
                  : ""
              }`}
              onClick={() => {
                setSelect(item.cat);
              }}
            >
              {item.cat}
            </button>
          );
        })}
      </div>
      <motion.div layout className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center px-5 py-5">
        <AnimatePresence>
          {data.map((item) => {
            return <CardSkills key={item.id} data={item} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Skills;
