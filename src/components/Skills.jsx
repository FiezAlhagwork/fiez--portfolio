import { useMemo, useState, useRef } from "react";
import Title from "./Title";
import { useContext } from "react";
import { modes } from "../context/Context";
import { skills } from "../constants";
import CardSkills from "./CardSkills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SkillsFilterButtons from "./SkillsFilterButtons";

const Skills = () => {
  const { mode } = useContext(modes);
  const [select, setSelect] = useState("");

  const filteredSkills = useMemo(() => {
    if (!select) return skills;
    return skills.filter((item) => item.cat === select);
  }, [select]);

  return (
    <div
      className={` ${
        mode
          ? "bg-[#1d1d1d] text-[#fff] border-b-[#ffffff33]"
          : "bg-[#dee4e7] text-[#1d1d1d] border-b-gray-500"
      }  py-8 px-10  mt-10 border-b border-b-solid rounded-t-xl  `}
    >
      <Title
        title="Our Skills"
        description="Spotlight on"
        highlight="Success"
        description2="Route"
        customStyleDiv="text-center py-4"
      />

      {/* SkillsFilterButton components  */}
      <SkillsFilterButtons select={select} setSelect={setSelect} />

      <CardSkillsList data={filteredSkills} />
    </div>
  );
};

const CardSkillsList = ({ data }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current?.children;

    if (cards && cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  }, [data]);
  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center px-5 py-5"
    >
      {data.map((item) => {
        return <CardSkills key={item.id} data={item} />;
      })}
    </div>
  );
};

export default Skills;
