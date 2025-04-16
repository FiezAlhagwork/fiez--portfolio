import React, { useRef } from "react";
import { useContext } from "react";
import { modes } from "../context/Context";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils";

const Title = ({ title, discrption, hilight, discrption2, element, id }) => {
  const { mode } = useContext(modes);
  const titleRef = useRef(null);
  useGSAP(() => {
    if (!titleRef.current) return;
    animateWithGsap(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={titleRef} className="opacity-0 translate-y-20" id={id}>
      <h5 className="uppercase font-semibold text-gray-500 tracking-widest ">
        {title}
      </h5>
      <h1 className="text-2xl md:text-4xl mt-3 font-extrabold leading-8">
        {discrption}{" "}
        <span
          className={`${
            mode === true
              ? "text-[#c8f31d]"
              : "bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600"
          }`}
        >
          {hilight}
        </span>{" "}
        {element}
        {discrption2}
      </h1>
    </div>
  );
};

export default Title;
