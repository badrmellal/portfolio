import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-indigo-500 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-white block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-100 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-indigo-400">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-indigo-400 border-2 border-indigo-400"></div>
                <div className="line w-[230px] bg-gray-200 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-indigo-400 border-2 border-indigo-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-indigo-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] text-indigo-500 font-semibold sm:text-xl">
                  Software Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-300 sm:text-base">
                  Morocco Digitals
                </span>
                <span className=" text-[.9rem] font-semibold text-indigo-400 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-300">
                During my ongoing internship at Morocco Digitals, I serve as a Full Stack Developer with a primary focus 
                on backend development utilizing Java/SpringBoot. In addition to backend development, My responsibilities 
                involve crafting interactive and user-friendly interfaces that enhance the overall user experience 
                using React JS and TailwindCSS.
                I play a key role in constructing the backend API, this involves facilitating data storage and 
                retrieval processes, contributing to the seamless functionality of the application.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-indigo-400">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-indigo-400 border-2 border-indigo-400"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-indigo-400 border-2 border-indigo-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-indigo-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] text-indigo-500 font-semibold sm:text-xl">
                  Bsc Degree, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-300 sm:text-base">
                Goldsmiths, University of London 
                </span>
                <span className=" text-[.9rem] font-semibold text-indigo-400 sm:text-base">
                  Year 2021 - Year 2025
                </span>
                <p className=" text-[.9rem] text-justify text-gray-300">
                As an undergraduate student, I have a good understanding of web development technologies such as HTML, CSS, 
                Tailwind CSS, JavaScript, and React JS. Additionally, I'm proficient in backend technologies such as Java, Node.js. 
                I also have skills in C++, MySql, PostgreSQL and problem-solving using Data structures and Algorithms.
                In the upcoming semester, we'll delve into the latest advancements in artificial intelligence and 
                explore cutting-edge technologies.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
