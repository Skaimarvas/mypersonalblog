import React from "react";
import useAxios from "../hooks/useAxios";
import { useContext } from "react";
import { ContextObject } from "../context/useContext";

export default function LangSwitcher() {
  const { toggleLangMode, isEnglish } = useContext(ContextObject);
  const [data] = useAxios();
  const { switcher } = data;

  // const { language, toggleLangMode } = props;
  return (
    <div className="flex-[0.7] flex w-3/6 justify-end w-5/6 bg-[#4731D3] dark:bg-[#171043]">
      <div className="mt-5 mr-3">
        <button className="flex " onClick={() => toggleLangMode()}>
          {isEnglish ? (
            <>
              <span className=" text-[#CAF181] text-[15px] font-bold leading-normal tracking-[1.5px] dark:text-[#BAB2E7]  ">
                {switcher.turkish[0]}
              </span>
              <span className="md:block hidden text-[15px] font-bold leading-normal tracking-[1.5px] text-[#D9D9D9] dark:text-[#777]">
                {switcher.turkish[1]}
              </span>
            </>
          ) : (
            <>
              <span className="md:block hidden text-[15px] font-bold leading-normal tracking-[1.5px] text-[#D9D9D9]      dark:text-[#777]">
                {switcher.english[0]}&nbsp;
              </span>
              <span className="text-[#CAF181] text-[15px] font-bold leading-normal tracking-[1.5px]  dark:text-[#BAB2E7]">
                {switcher.english[1]}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
