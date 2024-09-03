import { useContext } from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { modes } from "./context/Context";
import Project from "./components/Project";

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

      <Container>
        <Header />
        <Landing />
        <Services />
        <Skills />
        <Project/>
      </Container>
    </>
  );
};

export default App;
