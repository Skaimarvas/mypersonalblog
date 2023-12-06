import React from "react";
import LangSwitcher from "../othercomponents/LangSwitcher";
import DarkModeSwitcher from "../othercomponents/DarkModeSwitcher";
import HeroContent from "../othercomponents/HeroContent";

export default function Header() {
  return (
    <>
      <div className="flex h-screen xl:h-screen lg:h-[1050px] sm:h-[1200px]  ">
        <LangSwitcher />

        <DarkModeSwitcher />
        <div className="absolute  py-2  xl:mx-[15rem]  lg:mx-[5rem] sm:mx-[3rem] mt-[2.9rem]  w-[auto]">
          <div>
            <h1 className="text-[#CBF281] text-[32px] font-bold leading-[72px] ">
              {" "}
              Almila Su
            </h1>
          </div>
        </div>
        <HeroContent />
      </div>
    </>
  );
}
