import React, { useContext } from "react";
import { modes } from "../context/Context";
import Title from "./Title";
import TextFiled from "./TextFiled";
import SocialMedi from "./SocialMedi";
import { SocialMeda } from "../constant";

const Contact = () => {
  const { mode } = useContext(modes);



  return (
    <div
      className={`${
        mode === true
          ? "bg-[#1d1d1d] text-[#fff]"
          : "bg-[#dee4e7] text-[#1d1d1d]"
      } shadow-xl rounded-md my-12 r relative transition-colors py-16 px-10 `}
    >
      <div className=" flex gap-x-10 flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5">
          <Title
            title="Get In Touch"
            discrption="Let's make your brand"
            hilight="brilliant"
            discrption2="!"
          ></Title>
          <p className={` ${mode === true ? "text-[#ddd]" : " text-"} my-6`}>
            If you would like to work with us or just want to get in touch,
            Reach out, we're here to listen and assist!{" "}
          </p>
          <a href="h" className=" my-6">
            <button className=" text-3xl underline">+963 997 013 656</button>
          </a>

          <div className=" flex mt-6  gap-x-5">
            {SocialMeda.map((data) => {
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
          </div>
        </div>
        <form action="" className="w-full md:w-3/5 ">
          <div className="md:flex block  gap-x-4 ">
            {" "}
            <TextFiled
              name="name"
              type="text"
              labelName="Name"
              placeholder="Name"
              coustmStyle=""
              coustmStylabel="w-full mt-5"
            />
            <TextFiled
              name="email"
              type="email"
              labelName="email"
              placeholder="email"
              coustmStylabel="w-full mt-5"
            />
          </div>

          <TextFiled
            name="subject"
            type="subject"
            labelName="subject"
            placeholder="subject  "
            coustmStylabel="w-full mt-5"
          />
          <TextFiled
            name="Message"
            type="Message"
            labelName="Message"
            placeholder="Message  "
            coustmStyle="pb-20 "
            coustmStylabel="w-full mt-7"
          />
          <div className="w-full mt-4">
            <button
              className={` ${
                mode === true
                  ? "before:bg-[#c8f31d] hover:text-[#1d1d1d]  border-[#ddd]"
                  : "before:bg-gradient-to-r before:from-violet-600 before:to-indigo-600 border-[#1d1d1d] hover:text-[#fff] "
              } w-full py-4 px-5  rounded-lg   my-3 flex items-center justify-center md:rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full  before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 before:transition-all border border-solid font-normal md:font-semibold`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
