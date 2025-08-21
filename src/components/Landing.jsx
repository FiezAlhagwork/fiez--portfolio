import { useContext, useRef } from "react";
import { modes } from "../context/Context";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils";
import ProfileCard from "./ProfileCard";
import Button from "./Button";

const Landing = () => {
  const { mode } = useContext(modes);

  const contentRef = useRef(null);

  useGSAP(() => {
    animateWithGsap("#section", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
      y: 0,
    });
    animateWithGsap(contentRef.current, {
      opacity: 1,
      ease: "power1.inOut",
      duration: 1,
      delay: 1.3,
      x: 0,
    });
  }, []);

  return (
    <section
      className={`${
        mode ? "bg-[#1d1d1d] text-[#fff]" : "bg-[#dee4e7] text-[#1d1d1d]"
      } shadow-xl rounded-md my-6 r relative transition-colors opacity-0 translate-y-[-300px]`}
      id="section"
    >
      <main className=" grid grid-cols-4 lg:grid-cols-12 py-16">
        <ProfileCard mode={mode} />

        <div
          className=" col-span-4 md:col-span-8 px-10 lg:px-0 lg:pr-3 mt-6 lg:mt-0 opacity-0 translate-x-96"
          ref={contentRef}
        >
          <IntroText mode={mode} />
          <StatsSection mode={mode} />
        </div>
      </main>

      <div
        className={`lg:block hidden rounded-b-md absolute w-2/6  ${
          mode ? "bg-[#1d1d1d]" : "bg-[#dee4e7]"
        }  h-[10%] -bottom-14 left-0 shadow-xl `}
      ></div>
    </section>
  );
};

export default Landing;

export const IntroText = ({ mode }) => {
  return (
    <>
      <h1 className="lg:text-6xl text-4xl mt-3  ">
        <span className="">
          {" "}
          Hello, I’m{" "}
          <span
            className={`font-semibold ${
              mode
                ? "text-[#c8f31d]"
                : "bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 "
            }`}
          >
            {" "}
            Fiez Alhag
          </span>
        </span>
        ,<br />
        <span className=" mb-2">
          <span
            className={`${
              mode ? "borders" : "border border-solid border-black"
            } relative    py-3 px-5 text-3xl lg:text-5xl mb-3  `}
          >
            Front-end Developer
            <span
              className={` ${
                mode
                  ? " after:bg-white before:bg-white"
                  : "after:bg-black before:bg-black"
              } after:absolute after:w-2 after:h-2 after:p-1  after:rounded-full after:-top-1 after:-left-1 before:absolute before:w-2 before:h-2 before:p-1  before:rounded-full before:-right-1 before:-top-1`}
            ></span>
            <span
              className={` ${
                mode
                  ? " after:bg-white before:bg-white"
                  : "after:bg-black before:bg-black"
              } after:absolute after:w-2 after:h-2 after:p-1  after:rounded-full after:-bottom-1 after:-left-1 before:absolute before:w-2 before:h-2 before:p-1  before:rounded-full before:-right-1 before:-bottom-1`}
            ></span>
          </span>
          <span>Based</span> <br className=" hidden lg:inline" /> in Syria
        </span>
      </h1>
    </>
  );
};

export const StatsSection = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 mt-20 ">
      <h1 className="text-6xl">
        +2{" "}
        <span className="text-sm">
          Years <br /> of Experience
        </span>
      </h1>
      <h1 className="text-6xl">
        +10{" "}
        <span className="text-sm">
          Clients <br /> Worldwide
        </span>
      </h1>
      <Button customStyleButton={"px-12"}>Download CV</Button>
    </div>
  );
};
