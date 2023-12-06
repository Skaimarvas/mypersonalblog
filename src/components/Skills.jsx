import React, { useContext } from "react";
import javascript from "../assets/js.jpeg";
import node from "../assets/node.jpeg";
import react from "../assets/react.png";
import vscode from "../assets/vscode.png";
import redux from "../assets/redux.png";
import figma from "../assets/figma.jpeg";
import { ContextObject } from "../context/useContext";

export default function Skills() {
  const { isEnglish } = useContext(ContextObject);

  return (
    <div className="flex h-screen xl:h-screen lg:h-[1050px] sm:h-[1200px] bg-white  dark:bg-[#252128]">
      <div className="flex  my-[5rem] xl:mx-[15rem] lg:mx-[5rem] sm:mx-[3rem] w-[1300px] ">
        <div className="flex flex-col flex-wrap justify-between  gap-[34px] w-full">
          <div className="md:h-full">
            <span className="text-[48px] leading-normal text-[#CBF281] dark:text-[#4832D3]">
              {isEnglish ? "Skills" : "Yetenekler"}
            </span>
          </div>
          <div className="skilldiv">
            <img src={javascript} alt="js" className="skillimage" />
            <span className="skillname">JAVASCRIPT</span>
          </div>
          <div className="skilldiv ">
            <img src={react} alt="js" className="skillimage" />
            <span className="skillname">REACT</span>
          </div>
          <div className="skilldiv ">
            <img src={redux} alt="node" className="skillimage" />
            <span className="skillname">REDUX</span>
          </div>
          <div className="skilldiv ">
            <img src={node} alt="js" className="skillimage" />
            <span className="skillname">NODE</span>
          </div>
          <div className="skilldiv ">
            <img src={vscode} alt="js" className="skillimage" />
            <span className="skillname">VSCODE</span>
          </div>
          <div className="skilldiv ">
            <img src={figma} alt="js" className="skillimage" />
            <span className="skillname">FIGMA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
