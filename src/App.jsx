import React, { useEffect, useContext } from "react";
//css
import "./App.css";
//components
import Skills from "./components/Skills";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
//hooks
import useAxios from "./hooks/useAxios";
import { ContextObject } from "./context/useContext";

function App() {
  const { initialModeDedection } = useContext(ContextObject);
  const [data, getRequest] = useAxios();

  useEffect(() => {
    initialModeDedection();
    getRequest();
  }, []);

  return (
    <>
      <Header />
      <Skills />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
