// import React, { useState } from "react";

// const skillCategories = [
//   {
//     id: "languages",
//     icon: "ti-code",
//     label: "Languages",
//     skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
//   },
//   {
//     id: "frontend",
//     icon: "ti-layout-2",
//     label: "Front-End",
//     skills: ["React.js", "Responsive Web Design", "Component-Based Development"],
//   },
//   {
//     id: "styling",
//     icon: "ti-brush",
//     label: "Styling",
//     skills: ["Tailwind CSS", "CSS Modules"],
//   },
//   {
//     id: "tools",
//     icon: "ti-tools",
//     label: "Tools & Version Control",
//     skills: ["Git", "GitHub", "VS Code"],
//   },
//   {
//     id: "web",
//     icon: "ti-world",
//     label: "Web Development",
//     skills: ["REST APIs", "JSON", "DOM Manipulation", "Browser Developer Tools"],
//   },
//   {
//     id: "practices",
//     icon: "ti-settings",
//     label: "Development Practices",
//     skills: [
//       "Reusable Components",
//       "Form Handling",
//       "State Management",
//       "Debugging",
//       "Cross-Browser Compatibility",
//     ],
//   },
// ];

// export default function SkillsSection() {
//   const [active, setActive] = useState("languages");
//   const current = skillCategories.find((c) => c.id === active);

//   return (
//     <section className="bg-[#0d0d0d] w-full rounded-2xl px-12 py-14 font-['DM_Sans']">

//       {/* Heading */}
//       <p className="font-['Share_Tech_Mono'] text-xs text-blue-500 tracking-[2.5px] uppercase mb-2.5">
//         What I work with
//       </p>
//       <div className="flex items-center gap-3 mb-10">
//         <div className="w-[3px] h-7 bg-blue-500 rounded-full shrink-0" />
//         <h2 className="font-['Share_Tech_Mono'] text-xl text-white">
//           Technical <span className="text-blue-500">skills</span>
//         </h2>
//       </div>

//       {/* Two-col layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">

//         {/* LEFT — category tabs */}
//         <div className="flex flex-col gap-2">
//           {skillCategories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActive(cat.id)}
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 w-full ${
//                 active === cat.id
//                   ? "bg-blue-600/15 border border-blue-600/40 text-white"
//                   : "bg-transparent border border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
//               }`}
//             >
//               <i
//                 className={`ti ${cat.icon} text-base ${
//                   active === cat.id ? "text-blue-400" : "text-zinc-600"
//                 }`}
//                 aria-hidden="true"
//               />
//               <span className="text-sm font-normal">{cat.label}</span>
//               {active === cat.id && (
//                 <i className="ti ti-chevron-right text-blue-400 text-sm ml-auto" aria-hidden="true" />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* RIGHT — skill detail panel */}
//         <div className="bg-[#111] border border-zinc-800 rounded-2xl p-7 flex flex-col gap-6">

//           {/* Panel heading */}
//           <div className="flex items-center gap-3 pb-5 border-b border-zinc-800">
//             <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-600/30 flex items-center justify-center">
//               <i className={`ti ${current.icon} text-blue-400 text-lg`} aria-hidden="true" />
//             </div>
//             <div>
//               <p className="font-['Share_Tech_Mono'] text-white text-base">{current.label}</p>
//               <p className="text-zinc-500 text-xs mt-0.5">
//                 {current.skills.length} skill{current.skills.length !== 1 ? "s" : ""}
//               </p>
//             </div>
//           </div>

//           {/* Skill tags */}
//           <div className="flex flex-wrap gap-3">
//             {current.skills.map((skill) => (
//               <span
//                 key={skill}
//                 className="font-['Share_Tech_Mono'] text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>

//           {/* Code-line visual filler — matches about section aesthetic */}
//           <div className="mt-auto pt-4 border-t border-zinc-800/60 flex flex-col gap-2 opacity-30">
//             {[["70%"], ["50%"], ["85%"], ["40%"]].map(([w], i) => (
//               <div
//                 key={i}
//                 className="h-1.5 rounded-full bg-blue-600"
//                 style={{ width: w }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom row — all skills as flat pills */}
//       <div className="mt-8 pt-7 border-t border-zinc-800/60">
//         <p className="font-['Share_Tech_Mono'] text-[10px] tracking-[1.5px] uppercase text-zinc-600 mb-4">
//           All skills
//         </p>
//         <div className="flex flex-wrap gap-2">
//           {skillCategories.flatMap((cat) =>
//             cat.skills.map((skill) => (
//               <span
//                 key={skill}
//                 onClick={() => setActive(cat.id)}
//                 className="text-[11px] text-zinc-400 bg-zinc-900 border border-zinc-800 hover:border-blue-600/50 hover:text-blue-300 px-3 py-1 rounded-full cursor-pointer transition-all duration-150"
//               >
//                 {skill}
//               </span>
//             ))
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useState } from "react";

const skills = [
  {
    icon: "ti-brand-javascript",
    name: "JavaScript ES6+",
    description:
      "Clear understanding of modern JS syntax, async patterns, and its wider ecosystem.",
  },
  {
    icon: "ti-brand-html5",
    name: "HTML5",
    description:
      "Build browser-friendly, semantic markup with good accessibility standards.",
  },
  {
    icon: "ti-palette",
    name: "CSS3",
    description:
      "Style user-friendly, beautiful designs with layouts, animations, and responsive techniques.",
  },
  {
    icon: "ti-brand-react",
    name: "React.js",
    description:
      "Build dynamic, component-driven UIs with hooks, state management, and clean architecture.",
  },
  {
    icon: "ti-wind",
    name: "Tailwind CSS",
    description:
      "Rapidly craft consistent, responsive designs using utility-first CSS classes.",
  },
  {
    icon: "ti-file-type-css",
    name: "CSS Modules",
    description:
      "Scope styles locally to components, keeping projects clean and collision-free.",
  },
  {
    icon: "ti-brand-git",
    name: "Git & GitHub",
    description:
      "Version control, branching workflows, and collaborative development on remote repositories.",
  },
  {
    icon: "ti-api",
    name: "REST APIs",
    description:
      "Consume and integrate external APIs, handle JSON data, and manage async requests cleanly.",
  },
  {
    icon: "ti-layout-grid",
    name: "Responsive Design",
    description:
      "Craft layouts that look and work great across all screen sizes and devices.",
  },
  {
    icon: "ti-components",
    name: "Component Architecture",
    description:
      "Design reusable, maintainable components with clear separation of concerns.",
  },
  {
    icon: "ti-variable",
    name: "State Management",
    description:
      "Handle local and global application state effectively using React patterns.",
  },
  {
    icon: "ti-bug",
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
    <section className="bg-[#0d0d0d] w-full rounded-2xl px-12 py-14 font-['DM_Sans']">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="font-['Share_Tech_Mono'] text-sm text-zinc-500 tracking-[2px] flex items-center justify-center gap-2 mb-3">
          <i className="ti ti-hexagons text-blue-500 text-base" aria-hidden="true" />
          Explore
        </p>
        <h2 className="font-['Share_Tech_Mono'] text-4xl text-white">
          My <span className="text-blue-500">Skill Set</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 min-h-[260px]">
        {visible.map((skill) => (
          <div
            key={skill.name}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex flex-col items-center text-center gap-5 hover:border-blue-600/50 transition-all duration-200"
          >
            {/* Icon circle */}
            <div className="w-20 h-20 rounded-full bg-[#0d0d0d] border border-zinc-700 flex items-center justify-center shrink-0">
              <i className={`ti ${skill.icon} text-3xl text-white`} aria-hidden="true" />
            </div>

            {/* Name */}
            <h3 className="font-['Share_Tech_Mono'] text-lg leading-tight">
              <span className="text-blue-400">{skill.name.split(" ")[0]}</span>{" "}
              <span className="text-white">{skill.name.split(" ").slice(1).join(" ")}</span>
            </h3>

            {/* Description */}
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-blue-500 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          <i className="ti ti-arrow-left text-sm" aria-hidden="true" />
        </button>

        {/* Dots */}
        {Array.from({ length: totalPages }).map((_, i) => (
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
        </button>
      </div>

      {/* Page counter */}
      <p className="font-['Share_Tech_Mono'] text-center text-xs text-zinc-600 mt-3 tracking-widest">
        {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
      </p>
    </section>
  );
}