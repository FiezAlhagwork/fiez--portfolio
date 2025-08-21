import { useContext } from "react";
import { SocialMediData } from "../constants";
import SocialMedi from "./SocialMedi";
import { modes } from "../context/Context";

const SocialMedaList = () => {
  const { mode } = useContext(modes);
  return (
    <>
      {SocialMediData.map((data) => {
        return (
          <SocialMedi
            key={data.id}
            className={`  p-3 rounded-full border border-solid border-gray-500 ${
              mode === true
                ? " text-white hover:bg-white hover:text-black"
                : "text-black hover:bg-black hover:text-[#fff]"
            } transition-all duration-400`}
            link={data.link}
            icon={data.icon}
          />
        );
      })}
    </>
  );
};

export default SocialMedaList;
