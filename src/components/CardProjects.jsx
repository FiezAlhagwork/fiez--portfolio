import { useRef, useContext } from "react";
import { modes } from "../context/Context";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils";
import Button from "./Button";

const CardProjects = ({ items }) => {
  const { mode } = useContext(modes);
  const cardRef = useRef(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    animateWithGsap(cardRef.current, {
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <Link to={`/projectDetails/${items.id}`}>
      <div
        className={` group w-full opacity-0  translate-y-36  `}
        ref={cardRef}
      >
        <div
          className={`h-60 p-2 rounded-lg   transition-all duration-300 ${
            mode
              ? "group-hover:border-[#c8f31d]"
              : "group-hover:border-indigo-600"
          } border-2    border-transparent `}
        >
          <img
            className="h-full rounded-lg object-cover"
            src={items.imag1}
            alt="ss"
            loading="lazy"
          />
        </div>
        <div className="p-2 flex justify-between items-center">
          <div>
            <Button
              customStyleButton={` ${
                mode
                  ? "border-[#c8f31d] group-hover:text-black group-hover:bg-[#c8f31d]"
                  : "border-indigo-600 group-hover:text-[#fff] group-hover:bg-indigo-600 shadow-lg"
              }`}
            >
              View
            </Button>
            <p className="pt-3 text-md">{items.name}</p>
          </div>
          <div
            className={`text-3xl ${
              mode
                ? "group-hover:text-[#c8f31d]"
                : "group-hover:text-indigo-600"
            } `}
          >
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProjects;
