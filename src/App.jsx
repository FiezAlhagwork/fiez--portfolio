import { useContext } from "react";
import "./App.css";
import Container from "./components/Container";

import { modes } from "./context/Context";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";
import Header from './components/Header'
import AllProject from "./Pages/AllProject";

const App = () => {
  const spans = ["", "", "", "", ""];
  const { mode } = useContext(modes);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex -z-50 pointer-events-none transition-colors w- ${
          mode === true
            ? "bg-[#232323]"
            : "bg-[#ECEFF1] "
        } `}
      >
        {/* backgrond  */}
        {spans.map((data, index) => {
          return <span key={index} className={`${mode === true? "span": "spans"}`}></span>;
        })}
      </div>
      <div>

      </div>

      <Container>
      <Header />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/projectDetails/:id" element={<ProjectDetails/>}/>
          <Route  path="/AllProject" element={<AllProject/>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;
