import { useContext } from "react";
import { modes } from "../context/Context";
import { buttons } from "../constants";
import Button from "./Button";

const SkillsFilterButtons = ({ setSelect, select }) => {
  const { mode } = useContext(modes);
  return (
    <div className="flex justify-center gap-4 my-3">
      {buttons.map((item) => {
        return (
          <Button
            key={item.id}
            className={` py-3 px-5  rounded-lg  my-3 flex items-center justify-center md:rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full  before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 before:transition-all border border-solid font-normal md:font-semibold ${
              mode
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
          </Button>
        );
      })}
    </div>
  );
};

export default SkillsFilterButtons;
