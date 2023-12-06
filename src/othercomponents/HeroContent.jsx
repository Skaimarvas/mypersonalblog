import React, { useContext } from "react";
import hero1 from "../assets/hero-right-2.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
//hooks
import useAxios from "../hooks/useAxios";
import { ContextObject } from "../context/useContext";

export default function HeroContent() {
  const [data] = useAxios();
  const { isEnglish } = useContext(ContextObject);
  const { hero } = data;
  const title = isEnglish ? hero.title.english : hero.title.turkish;
  const content = isEnglish ? hero.content.english : hero.content.turkish;

  return (
    <div className="flex flex-wrap-reverse gap-[83px] justify-between absolute  mt-[13rem]  xl:mx-[15rem]  lg:mx-[5rem] sm:mx-[3rem] max-w-[1300px]">
      <div className="flex flex-col items-start gap-[36px] justify-around max-w-[529px]  h-[376px]  ">
        <p className="md:text-[#CBF281]  sm:text-[#72aa0b] dark:text-[#CBF281]  text-[54px] font-bold leading-[59.4px]">
          {" "}
          {title}
        </p>
        <p className="text-[24px] leading-normal text-white ">{content}</p>
        <div className="flex gap-3 ">
          <button className="flex items-center  dark:border dark:border-white bg-white rounded-md p-3 gap-[10px] hover:bg-stone-700 dark:bg-special dark:hover:bg-stone-700">
            <FaGithub className="text-[#3730A3] text-[26px] dark:text-white " />{" "}
            <span className="text-[18px] font-medium leading-[28px] dark:text-white">
              Github
            </span>
          </button>
          <button className="flex items-center dark:border dark:border-white bg-white rounded-md p-3 gap-[10px] hover:bg-stone-700 dark:bg-special dark:hover:bg-stone-700">
            <FaLinkedinIn className="text-[#3730A3] text-[26px] dark:text-white" />
            <span
              className="text-[18px] font-medium leading-[28px] ${
                dark:text-white"
            >
              Linkedin
            </span>
          </button>
        </div>
      </div>
      <div>
        <img
          className="w-[350px] h-[375px] shadow-lg rounded-lg object-cover "
          src={hero1}
          alt="hero-right"
        />
      </div>
    </div>
  );
}
