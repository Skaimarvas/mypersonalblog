import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { ContextObject } from "../context/useContext";

export default function Projects() {
  const [data] = useAxios();
  const { isEnglish } = useContext(ContextObject);
  const { title, projectdata } = data.projects;

  return (
    <div className="flex h-full bg-[#CBF281]  dark:bg-[#1A210B]">
      <div className="flex flex-col  my-[5rem] xl:mx-[15rem] lg:mx-[5rem] sm:mx-[3rem] w-[1300px] gap-5 ">
        <div>
          {" "}
          <h1 className="text-[#4731D3] text-[48px] font-bold leading-[48px] tracking-[0.48px] dark:text-[#CBF281]">
            {" "}
            {isEnglish ? title.english : title.turkish}{" "}
          </h1>{" "}
        </div>

        {isEnglish
          ? projectdata.english.map((project, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center  bg-white dark:bg-[#2B2727] gap-[16px] rounded-lg shadow-lg "
              >
                <div className="mx-auto lg:mx-0">
                  {" "}
                  <img
                    src={project.pro}
                    alt="proje image"
                    className="h-[360px] lg:w-[360px] lg:h-[360px] object-cover lg:rounded-l-lg"
                  />{" "}
                </div>
                <div className="flex flex-col  lg:max-w-[584px] py-[25px] px-[32px] items-start gap-[24px]">
                  <div>
                    {" "}
                    <h3 className="text-[#4338CA] text-[32px] font-bold dark:text-[#C1BAED]">
                      {project.projecttitle}
                    </h3>{" "}
                  </div>
                  <div>
                    {" "}
                    <p className="text-[#383838] dark:text-white leading-5">
                      {project.description}
                    </p>{" "}
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="tags">
                      <span>react</span>
                    </div>
                    <div className="tags">
                      <span>redux</span>
                    </div>
                    <div className="tags">
                      <span>vercel</span>
                    </div>
                  </div>
                  <div className="flex gap-[14px]">
                    <span className="text-[#120B39] dark:text-[#CBF281] leading-4 font-medium underline ">
                      <a href={project.url} target="_blank">
                        View Site
                      </a>
                    </span>
                    <span className="text-[#120B39] dark:text-[#CBF281] leading-4 font-medium underline ">
                      <a href={project.giturl} target="_blank">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))
          : projectdata.turkish.map((project, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center  bg-white dark:bg-[#2B2727] gap-[16px] rounded-lg shadow-lg "
              >
                <div className="mx-auto lg:mx-0">
                  {" "}
                  <img
                    src={project.pro}
                    alt="proje image"
                    className="h-[360px] lg:w-[360px] lg:h-[360px] object-cover lg:rounded-l-lg"
                  />{" "}
                </div>
                <div className="flex flex-col  lg:max-w-[584px] py-[25px] px-[32px] items-start gap-[24px]">
                  <div>
                    {" "}
                    <h3 className="text-[#4338CA] text-[32px] font-bold dark:text-[#C1BAED]">
                      {project.projecttitle}
                    </h3>{" "}
                  </div>
                  <div>
                    {" "}
                    <p className="text-[#383838] dark:text-white leading-5">
                      {project.description}
                    </p>{" "}
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="tags">
                      <span>react</span>
                    </div>
                    <div className="tags">
                      <span>redux</span>
                    </div>
                    <div className="tags">
                      <span>vercel</span>
                    </div>
                  </div>
                  <div className="flex gap-[14px]">
                    <span className="text-[#120B39] dark:text-[#CBF281] leading-4 font-medium underline ">
                      <a href={project.url} target="_blank">
                        View Site
                      </a>
                    </span>
                    <span className="text-[#120B39] dark:text-[#CBF281] leading-4 font-medium underline ">
                      <a href={project.giturl} target="_blank">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
