import React, { useContext } from "react";
import { ContextObject } from "../context/useContext";

export default function DarkModeSwitcher() {
  const { darkMode, toggleDarkMode, mode } = useContext(ContextObject);
  const reverseMode = !darkMode;
  return (
    <div className="flex-[0.3]  bg-[#CBF281] dark:bg-[#1A210B] ">
      <div className="relative w-[200px] mt-5 ml-3">
        <label className="switchlabel">
          <input
            type="checkbox"
            className="switchinput"
            checked={reverseMode}
            onChange={toggleDarkMode}
          />
          <span className="bg-[#3a3a3a]  slider"></span>
        </label>
      </div>
      <span className="md:block hidden ml-[85px] text-[15px] font-bold tracking-[1.5px] leading-normal text-[#4731D3] dark:text-[#D9D9D9]">
        {mode}
      </span>
    </div>
  );
}
