import React, { useRef } from "react";
import { useContext } from "react";
import { modes } from "../context/Context";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils";

const Title = ({
  title,
  description,
  highlight,
  description2,
  element,
  id,
  customStyleDiv,
}) => {
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
    <div className={`${customStyleDiv}`}>
      <div
        ref={titleRef}
        className={` ${customStyleDiv} opacity-0 translate-y-20`}
        id={id}
      >
        <h5 className="uppercase font-semibold text-gray-500 tracking-widest ">
          {title}
        </h5>
        <h1 className="text-2xl md:text-4xl mt-3 font-extrabold leading-8">
          {description}{" "}
          <span
            className={`${
              mode === true
                ? "text-[#c8f31d]"
                : "bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600"
            }`}
          >
            {highlight}
          </span>{" "}
          {element}
          {description2}
        </h1>
      </div>
    </div>
  );
};

export default Title;
