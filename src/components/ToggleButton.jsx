import { FiMoon, FiSun } from "react-icons/fi";
import { useContext,  } from "react";
import gsap from "gsap";
import { modes } from "../context/Context";
import { useGSAP } from "@gsap/react";

export const ToggleButton = ({ selected , setSelected }) => {
  const TOGGLE_CLASSES =
    "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

  const { mode, setMode } = useContext(modes);


  useGSAP(() => {
    gsap.to("#toggleButton", {
      x: mode ? "100%" : "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [mode]);

  return (
    <div className="relative flex w-fit items-center rounded-full overflow-hidden">
      <button
        className={`${TOGGLE_CLASSES} ${
          mode === false ? "text-white" : "text-slate-300"
        }`}
        onClick={() => setMode(false)}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>

      <button
        className={`${TOGGLE_CLASSES} ${
          mode === true ? "text-white" : "text-slate-800"
        }`}
        onClick={() => setMode(true)}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>

      {/* عنصر الخلفية المتحركة  */}
      <div className="absolute inset-0 z-0 flex">
        <span
          id="toggleButton"
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        ></span>
      </div>
    </div>
  );
};
