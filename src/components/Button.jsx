import { useContext } from "react";
import { modes } from "../context/Context";

const Button = ({ customStyleDev, customStyleButton, children, ...props }) => {
  const { mode } = useContext(modes);
  return (
    <div className={` ${customStyleDev}`}>
      <button
        {...props}
        className={` ${
          mode
            ? "before:bg-[#c8f31d] hover:text-[#1d1d1d]  border-[#c8f31d] "
            : "before:bg-gradient-to-r before:from-violet-600 before:to-indigo-600 border-[#1d1d1d] hover:text-[#fff] "
        }  py-4 px-5  rounded-lg   my-3 flex items-center justify-center md:rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full  before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 before:transition-all border border-solid font-normal md:font-semibold ${customStyleButton}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
