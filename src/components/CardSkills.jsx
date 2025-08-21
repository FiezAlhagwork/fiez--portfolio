import { useContext } from "react";
import { modes } from "../context/Context";

const CardSkills = ({ data }) => {
  const { mode } = useContext(modes);
  return (
    <div
      className={` ${
        mode ? "text-[#fff]" : "bg-[#ECEFF1] text-[#1d1d1d]"
      } borders  rounded-xl relative shadow-xl py-6 px-4 bgImg `}
    >
      <div className={` flex gap-8 items-center`}>
        <div className={` ${data.class} text-6xl`}>{data.icon}</div>
        <h4 className="text-xl font-semibold">{data.name}</h4>
      </div>
    </div>
  );
};

export default CardSkills;
