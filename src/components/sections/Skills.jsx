import React, { useState } from "react";
import { FaGithub, FaCss3Alt, FaHtml5,  FaReact  } from "react-icons/fa";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { IoExtensionPuzzleOutline, IoLayersSharp } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { IoMdSync } from "react-icons/io";
import { LuBugOff } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";

const skillCat = [
  'Core Web', 'Front-End Development', 'Styling & UI', 'Development Tools & Practices'
]
const skills = [
  
  {
    icon: TbBrandJavascript,
    name: "JavaScript ES6+",
    description:
      "Clear understanding of modern JS syntax, async patterns, and its wider ecosystem.",
  },
  {
    icon: FaHtml5,
    name: "HTML5",
    description:
      "Build browser-friendly, semantic markup with good accessibility standards.",
  },
  {
    icon: FaCss3Alt,
    name: "CSS3",
    description:
      "Style user-friendly, beautiful designs with layouts, animations, and responsive techniques.",
  },
  {
    icon: FaReact,
    name: "React.js",
    description:
      "Build dynamic, component-driven UIs with hooks, state management, and clean architecture.",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind CSS",
    description:
      "Rapidly craft consistent, responsive designs using utility-first CSS classes.",
  },
  {
    icon: IoLayersSharp,
    name: "CSS Modules",
    description:
      "Scope styles locally to components, keeping projects clean and collision-free.",
  },
  {
    icon: FaGithub,
    name: "Git & GitHub",
    description:
      "Version control, branching workflows, and collaborative development on remote repositories.",
  },
  {
    icon: TbApi,
    name: "REST APIs",
    description:
      "Consume and integrate external APIs, handle JSON data, and manage async requests cleanly.",
  },
  {
    icon: MdDevices,
    name: "Responsive Design",
    description:
      "Craft layouts that look and work great across all screen sizes and devices.",
  },
  {
    icon: IoExtensionPuzzleOutline,
    name: "Component Architecture",
    description:
      "Design reusable, maintainable components with clear separation of concerns.",
  },
  {
    icon: IoMdSync,
    name: "State Management",
    description:
      "Handle local and global application state effectively using React patterns.",
  },
  {
    icon: LuBugOff,
    name: "Debugging",
    description:
      "Diagnose and fix issues using browser DevTools, console inspection, and systematic thinking.",
  },
];

const PER_PAGE = 3;

export default function SkillsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(skills.length / PER_PAGE);
  const visible = skills.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="skills" className="bg-gray-200 w-full my- px-12 py-24 font-['DM_Sans']">

      {/* Heading */}
      <div className="text-center ">
        {/* <p className="font-['Share_Tech_Mono'] text-sm text-zinc-500 tracking-[2px] flex items-center justify-center gap-2 mb-3">
          <i className="ti ti-hexagons text-blue-500 text-base" aria-hidden="true" />
          Explore
        </p> */}

        {/* <div className="border-b border-gray-700 pt-2 w-100% " >Explore &rarr;
        </div> */}

        <h2 className="font-['Share_Tech_Mono']    pb-2 text-4xl text-white mb-12 ">
        <span className="text-black">My</span> <span className="text-blue-600 ">Skills</span>
        </h2>
      </div>

      {/* <div  className="text-2xl text-white my-6 font-['Share_Tech_Mono']">Lfuytyf</div> */}

      {/* {skillCat.map((cat, i) => {return (
        <div>
          <div  className="text-2xl text-white my-6  font-['Share_Tech_Mono']">{cat}
          </div>

          <div>


        // {/* Cards */}
        {/* // <div className="grid grid-cols-1          sm:grid-cols-3 gap-6 min-h-[260px]"> */} 

         

          {/* {
            skillCat.map((cat, i)=>{
              <div key={i} className="text-2xl text-white my-6 font-['Share_Tech_Mono']">{cat}</div>
      
                })
          } */}
          
        
            

            <div className="grid grid-cols-1          sm:grid-cols-3 gap-6 min-h-[260px]">
             {skills.map((skill ) => { const Icon = skill.icon;
             return  (   
              <div>
{/* 
                <div  className="text-2xl text-white my-6  font-['Share_Tech_Mono']">{cat}


                </div>   */}

                    <div
              key={skill.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex flex-col items-center text-center gap-5 hover:-translate-y-1 shadow-lg shadow-gray-400 border-blue-600/50 cursor-pointer  transition-all duration-200 
              "
              >
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-full bg-[#0d0d0d] border border-zinc-700 flex items-center justify-center shrink-0">
                <Icon className="text-3xl text-white" aria-hidden="true" />
                {/* <IconApi /> */}
              </div>

              {/* Name */}
              <h3 className="font-['Share_Tech_Mono'] text-lg leading-tight">
              
                <span className="text-blue-400">{skill.name.split(" ")[0]}</span>{" "}
                <span className="text-white">{skill.name.split(" ").slice(1).join(" ")}</span>
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm  font-light leading-relaxed">
                {skill.description}
              </p>
            </div>
                    

                  </div>

            

                 )}
                 )}

     
            </div> 
          
          
        
     

      {/* Pagination */}
      {/* <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-blue-500 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          <i className="ti ti-arrow-left text-sm" aria-hidden="true" />
        </button>

        {/* Dots */}
        {/* {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`rounded-full transition-all duration-200 ${
              i === page
                ? "w-6 h-2.5 bg-blue-500"
                : "w-2.5 h-2.5 bg-zinc-700 hover:bg-zinc-500"
            }`}
            aria-label={`Page ${i + 1}`}
          />
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-blue-500 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          <i className="ti ti-arrow-right text-sm" aria-hidden="true" />
        </button> */}
      {/* </div> */} 

      {/* Page counter */}
      {/* <p className="font-['Share_Tech_Mono'] text-center text-xs text-zinc-600 mt-3 tracking-widest">
        {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
      </p> */}
    </section>
  );
}