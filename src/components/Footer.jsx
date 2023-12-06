import React, { useContext } from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram, FaCodepen } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import useAxios from "../hooks/useAxios";
import { ContextObject } from "../context/useContext";

export default function Footer() {
  const [data] = useAxios();
  const { isEnglish } = useContext(ContextObject);
  const { message, description } = data.footer;
  const newMessage = isEnglish ? message.english : message.turkish;
  const newDescription = isEnglish ? description.english : description.turkish;

  return (
    <div className="flex flex-col justify-center items-center bg-[#F9F9F9] dark:bg-[#252128] h-full xl:h-[454px]">
      <div className="flex flex-col justify-center  items-center gap-[24px] my-[84px] max-w-[483px] ">
        <div>
          <h3 className="text-[#4731D3] dark:text-[#8F88FF] text-[48px] font-bold leading-[72px]">
            {newMessage}
          </h3>
        </div>
        <div className="px-4">
          {" "}
          <p className="text-[#120B39] text-[24px] leading-9 dark:text-white text-center">
            {newDescription}
          </p>{" "}
        </div>
        <div className="text-[#4731D3] dark:text-[#8F88FF] text-[20px] font-medium tracking-[1px] underline">
          {" "}
          <a href="mailto:almilasucode@gmail.com">
            almilasucode@gmail.com
          </a>{" "}
        </div>
        <div className="flex gap-[24px] pb-2 text-[#4731D3] dark:text-[#8F88FF]">
          <FiTwitter className="w-[35px] h-[35px] " />
          <FaCodepen className="w-[35px] h-[35px]" />
          <FiAtSign className="w-[35px] h-[35px]" />
          <FaInstagram className="w-[35px] h-[35px]" />
        </div>
      </div>
    </div>
  );
}
