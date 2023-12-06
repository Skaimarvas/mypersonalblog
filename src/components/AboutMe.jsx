import React, { useContext } from "react";
import working from "../assets/working.png";
import useAxios from "../hooks/useAxios";
import { ContextObject } from "../context/useContext";

export default function AboutMe() {
  const [data] = useAxios();
  const { isEnglish } = useContext(ContextObject);
  const { profile, basic, info, infoco, about } = data.aboutmeobj;

  return (
    <div className="flex flex-col h-screen xl:h-[552px] lg:h-[900px] sm:h-[1200px] bg-[#4731D3]  dark:bg-[#171043]">
      <div className="flex flex-col my-[10rem] xl:my-[5rem] gap-10 ">
        <div className="xl:mx-[15rem] lg:mx-[5rem] sm:mx-[3rem]">
          <h2 className="text-[#CBF281] text-[48px] font-bold leading-[48px] tracking-[0.48px]">
            {" "}
            {isEnglish ? profile.english : profile.turkish}
          </h2>{" "}
        </div>
        <div className="flex flex-wrap-reverse items-center  xl:mx-[15rem] lg:mx-[5rem] sm:mx-[3rem] gap-[30px]">
          <div className="flex flex-col w-[300px] items-start gap-[24px] shrink-0 self-stretch">
            <h3 className="text-[30px] text-white font-medium leading-7">
              {isEnglish ? basic.english : basic.turkish}
            </h3>{" "}
            <div className="flex">
              <div className="flex flex-1 flex-col font-semibold text-[#CBF281] leading-6 tracking-[0.16px] w-full h-[222px] gap-5">
                {isEnglish
                  ? info.english.map((item) => <span key={item}>{item}</span>)
                  : info.turkish.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="flex flex-col text-white leading-6 tracking-[0.16px] w-[189px] h-[222px] gap-5">
                {isEnglish
                  ? infoco.english.map((item) => <span key={item}>{item}</span>)
                  : infoco.turkish.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
              </div>
            </div>
          </div>
          <div>
            {" "}
            <img
              src={working}
              alt="working"
              className="object-cover w-[300px] h-[290.685px] shrink-0 rounded-lg shadow-lg"
            />{" "}
          </div>
          <div className="flex flex-col w-[300px]   self-strecth gap-[24px] ">
            <div className="h-[25px]">
              <h3 className="text-[30px] text-white font-medium leading-[30px] self-stretch ">
                {isEnglish ? about.title.english : about.title.turkish}
              </h3>
            </div>
            <div className="text-white">
              <p>
                {isEnglish
                  ? about.content.english[0]
                  : about.content.turkish[0]}
              </p>
              <br />
              <br />
              <p>
                {isEnglish
                  ? about.content.english[1]
                  : about.content.turkish[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
