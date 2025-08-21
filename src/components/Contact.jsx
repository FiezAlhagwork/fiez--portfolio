import { useContext } from "react";
import { modes } from "../context/Context";
import Title from "./Title";
import TextFiled from "./TextFiled";
import { whatsappLink } from "../constants";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils";
import SocialMedaList from "./SocialMedaList";
import Button from "../components/Button";

const Contact = () => {
  const { mode } = useContext(modes);
  useGSAP(() => {
    animateWithGsap("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  return (
    <div
      className={`${
        mode ? "bg-[#1d1d1d] text-[#fff]" : "bg-[#dee4e7] text-[#1d1d1d]"
      } shadow-xl rounded-md my-12 r relative transition-colors py-16 px-10 `}
    >
      <div className=" flex gap-x-10 flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5">
          <Title
            title="Get In Touch"
            description="Let's make your brand"
            highlight="brilliant"
            desorption2="!"
          />
          <p className={`  my-6 opacity-0 translate-y-36`} id="title">
            If you would like to work with us or just want to get in touch,
            Reach out, we're here to listen and assist!{" "}
          </p>
          <a href={whatsappLink} className=" my-6">
            <button className=" text-3xl underline">+963 991 734 151</button>
          </a>

          <ul className=" flex mt-6  gap-x-5">
            <SocialMedaList />
          </ul>
        </div>
        <form className="w-full md:w-3/5 ">
          <div className="md:flex block  gap-x-4 ">
            {" "}
            <TextFiled
              name="name"
              type="text"
              labelName="Name"
              placeholder="Name"
              customStyleLabel="w-full mt-5"
            />
            <TextFiled
              name="email"
              type="email"
              labelName="email"
              placeholder="email"
              customStyleLabel="w-full mt-5"
            />
          </div>

          <TextFiled
            name="subject"
            type="subject"
            labelName="subject"
            placeholder="subject  "
            customStyleLabel="w-full mt-5"
          />
          <TextFiled
            name="Message"
            type="Message"
            labelName="Message"
            placeholder="Message  "
            customStyle="pb-20 "
            customStyleLabel="w-full mt-7"
          />
          <Button type="button" customStyleButton={"w-full"}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
