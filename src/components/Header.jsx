
import { ToggleButton } from "./ToggleButton";
import { useContext } from "react";
import { modes } from "../context/Context";
import SocialMedaList from "./SocialMedaList";

const Header = () => {
  const { mode } = useContext(modes);

  return (
    <div className=" flex justify-between items-center py-6  " id="top">
      <h1
        className={`text-4xl font-bold ${
          mode
            ? "text-white"
            : " bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600"
        } `}
      >
        Fiez
      </h1>
      <ul className="md:flex hidden gap-4 ml-10 ">
        <SocialMedaList />
      </ul>
      <h2 className="text-lg  ">
        <ToggleButton />
      </h2>
    </div>
  );
};

export default Header;
