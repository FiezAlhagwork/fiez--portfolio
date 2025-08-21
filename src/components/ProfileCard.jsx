import myPhoto from "../image/photo_2025-07-03_03-38-52.jpg";
import javaScript from "../image/javascript.svg";
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import SocialMedaList from "./SocialMedaList";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils";

const ProfileCard = ({mode}) => {
  useGSAP(() => {
    animateWithGsap("#myPhoto", {
      opacity: 1,
      ease: "power1.inOut",
      x: 0,
      duration: 1,
      delay: 1.3,
    });
  }, []);
  return (
    <div
      className=" col-span-4 px-2 md:px-10 opacity-0 translate-x-[-300px] "
      id="myPhoto"
    >
      <div
        className={`px-4 py-8  ${
          mode ? "borders" : "border border-solid border-gray-800"
        }  md:px-4 rounded-md md:py-8`}
      >
        <div className="relative text-center">
          <div className="lg:w-[260px] lg:h-[350px] w-full ">
            <img
              className="object-contain w-full h-full"
              src={myPhoto}
              alt="myPhoto "
              width={260}
              height={350}
            />
          </div>
          <div className=" absolute w-10 h-10 backdrop-blur-sm px-2 py-2 rounded-xl -left-5 top-16 rotate-12 borders ">
            <img src={javaScript} alt="java script" />
          </div>
          <div className=" absolute text-2xl text-cyan-500 backdrop-blur-sm px-2 py-2 rounded-xl left-4 bottom-6 -rotate-12 borders ">
            <FaReact />
          </div>
          <div className=" absolute text-2xl text-red-700 backdrop-blur-sm px-2 py-2 rounded-xl -right-3 top-0 -rotate-12 borders ">
            <FaAngular />
          </div>
          <div className=" absolute text-2xl text-black backdrop-blur-sm px-2 py-2 rounded-xl -right-3 bottom-24 rotate-12 borders ">
            <FaGithub />
          </div>
        </div>
        <div className=" text-center  py-3  ">
          <h4 className="text-3xl ">Fiez Alhag</h4>
          <p className="text-sm text-gray-700 uppercase pt-2">
            Available For Freelance
          </p>
          <ul className="flex md:hidden justify-center items-center my-4 gap-2">
            <SocialMedaList />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
