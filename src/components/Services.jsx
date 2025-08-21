/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from "react";
import CardServices from "./CardServices";
import Title from "./Title";
import { useContext } from "react";
import { modes } from "../context/Context";
import { NavBar, CardServes } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { mode } = useContext(modes);

  return (
    <section
      className={`${
        mode
          ? "bg-[#1d1d1d] text-[#fff] border-gray-600"
          : "bg-[#dee4e7] text-[#1d1d1d] shadow-xl "
      }  rounded-t-md mt-16 lg:mt-32 px-10  relative   transition-colors opacity-0 translate-y-36`}
      id="services-section"
    >
      <div
        className={`${
          mode ? "bg-[#1d1d1d] text-[#fff]" : "bg-[#dee4e7] text-[#1d1d1d] "
        } lg:block hidden rounded-t-md absolute w-[65%]  h-[10%] -top-14 right-0 p-7  `}
      >
        <NavBarList />
      </div>

      <Title
        title="Our Services"
        description="Turn Ideas"
        highlight="Into Actionable"
        description2="Insights"
        id="services-title"
        customStyleDiv={"pt-16 py-10 text-center "}
      />

      <CardServesList />
    </section>
  );
};

export const CardServesList = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = containerRef.current?.children;
    animateWithGsap("#services-section", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      duration: 1,
    });
    if (cards && cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "restart reverse restart reverse",
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
    >
      {CardServes.map((data) => {
        return <CardServices key={data.id} data={data} />;
      })}
    </div>
  );
};

const NavBarList = () => {
  return (
    <ul className="flex justify-between items-center ">
      {NavBar.map((data) => {
        return (
          <a key={data.id} href={data.link} className=" ">
            <li className=" font-medium after:hover:transition-all after:hover:duration-500 uppercase text-sm    ">
              {data.name}
            </li>
          </a>
        );
      })}
    </ul>
  );
};

export default Services;
