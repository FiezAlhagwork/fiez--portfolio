import { useContext } from "react";
import "./App.css";
import Container from "./components/Container";

import { modes } from "./context/Context";
import { IoIosArrowUp } from "react-icons/io";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import Header from "./components/Header";
import AllProject from "./Pages/AllProject";
import Footer from "./components/footer";

const App = () => {
  const spans = ["", "", "", "", ""];
  const { mode } = useContext(modes);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex -z-50 pointer-events-none transition-colors w- ${
          mode === true ? "bg-[#232323]" : "bg-[#ECEFF1] "
        } `}
      >
        {/* backgrond  */}
        {spans.map((data, index) => {
          return (
            <span key={index} className={`${mode === true ? "" : ""}`}></span>
          );
        })}
      </div>
      
      <a
        href="#top"
        className={` ${mode === true ? "border-[#ddd] text-white border border-solid " : "border-[#1d1d1d] text-[#1d1d1d] border border-solid"} fixed bottom-3 right-3 md:bottom-5 md:right-8  p-2 md:p-3 rounded-full  z-50 animate-updown`} 
      >
        <button className=" text-xl">
          <IoIosArrowUp />
        </button>
      </a>
      <a
        href="#top"
        className={` ${mode === true ? "border-[#ddd] text-white border border-solid " : "border-[#1d1d1d] text-[#1d1d1d] border border-solid"} fixed bottom-3 right-3 md:bottom-5 md:right-8  p-2 md:p-3 rounded-full  z-50 animate-updown`} 
      >
        <button className=" text-xl">
          <IoIosArrowUp />
        </button>
      </a>
      

      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
          <Route path="/AllProject" element={<AllProject />} />
        </Routes>
        <Footer/>
        
      </Container>
    </>
  );
};

export default App;
