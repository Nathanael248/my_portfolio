import React, { useState } from "react";

const stack = ["HTML", "CSS", "JavaScript", "React",  "Tailwind CSS"];

export  function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="bg-[#0d0d0d] w-full rounded-2xl px-12 py-14 font-['DM_Sans']">

      {/* ── TOP HERO BLOCK ── */}
      <div className="text-center mb-12">
        <p className="font-['Share_Tech_Mono'] text-sm text-zinc-500 tracking-[2px] flex items-center justify-center gap-2 mb-3">
          <i className="ti ti-terminal-2 text-blue-500 text-base" aria-hidden="true" />
          Hello...
        </p>
        <h1 className="font-['Share_Tech_Mono'] text-4xl text-white mb-5 leading-tight">
          I'm <span className="text-blue-500">Nathaniel!</span>
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <span className="font-['Share_Tech_Mono'] text-xs text-zinc-400 flex items-center gap-1.5">
            <i className="ti ti-map-pin text-blue-500 text-sm" aria-hidden="true" /> Oyo State, NG
          </span>
          <span className="text-zinc-700 text-base">·</span>
          <span className="font-['Share_Tech_Mono'] text-xs text-zinc-400 flex items-center gap-1.5">
            <i className="ti ti-mail text-blue-500 text-sm" aria-hidden="true" /> nathy@dev.com
          </span>
          <span className="text-zinc-700 text-base">·</span>
          <span className="font-['Share_Tech_Mono'] text-xs text-zinc-400 flex items-center gap-1.5">
            <i className="ti ti-brand-github text-blue-500 text-sm" aria-hidden="true" /> @nathypapy
          </span>
        </div>
      </div>

      {/* ── SECTION HEADING ── */}
      <div className="flex items-center gap-3 mb-7">
        <div className="w-[3px] h-7 bg-blue-500 rounded-full shrink-0" />
        <h2 className="font-['Share_Tech_Mono'] text-xl text-white">
          A little bit <span className="text-blue-500">about me...</span>
        </h2>
      </div>

      {/* ── TWO-COL ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">

        {/* Left — code visual + stack */}
        <div className="flex flex-col gap-5">
          {/* Code block visual */}
          <div className="bg-[#111] border border-zinc-800 rounded-xl p-5 flex flex-col gap-2">
            {[["85%","0.8"],["68%","0.65"],["40%","0.5"],null,["85%","0.8"],["68%","0.65"],["28%","0.4"],null,["40%","0.5"],["28%","0.4"]].map((line, i) =>
              line === null
                ? <div key={i} className="h-1.5" />
                : <div key={i} className="h-2 rounded-full bg-blue-700" style={{ width: line[0], opacity: line[1] }} />
            )}
          </div>

          {/* Tech stack */}
          <div>
            <p className="font-['Share_Tech_Mono'] text-[10px] tracking-[1.5px] uppercase text-zinc-500 mb-3">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="font-['Share_Tech_Mono'] text-[11px] text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — tabs + content */}
        <div className="flex flex-col gap-5">
          {/* Tab switcher */}
          <div className="flex gap-1 bg-[#111] border border-zinc-800 rounded-xl p-1 w-fit">
            {[["about", "About me"], ["summary", "Professional summary"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`text-sm px-5 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === id
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-zinc-500 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex flex-col gap-4">
            {activeTab === "about" ? (
              <>
                <p className="text-zinc-300 text-[15px] font-light leading-relaxed">
                  My transition into tech started with curiosity — I wanted to understand how the digital
                  products we interact with every day actually work behind the scenes. That curiosity grew
                  into a genuine interest in web development and turning ideas into useful software.
                </p>
                <p className="text-zinc-300 text-[15px] font-light leading-relaxed">
                  What motivates me most is solving problems and building software that makes real-life
                  tasks easier. I enjoy taking something complicated, breaking it down, and finding a
                  simpler and more practical approach.
                </p>
                <p className="text-zinc-300 text-[15px] font-light leading-relaxed">
                  I'm also deeply interested in good design — thoughtful design creates a strong first
                  impression even before someone has used a product, communicating clarity, attention to
                  detail, and the standard it aims to deliver.
                </p>
              </>
            ) : (
              <>
                <p className="text-zinc-300 text-[15px] font-light leading-relaxed">
                  I'm an aspiring Frontend Developer focused on building responsive, user-friendly web
                  experiences with HTML, CSS, JavaScript, React, and Tailwind CSS.
                </p>
                <p className="text-zinc-300 text-[15px] font-light leading-relaxed">
                  Through hands-on projects and continuous learning, I've developed practical experience
                  in creating interfaces, working with APIs, and using modern frontend tools and workflows.
                </p>
                <p className="text-zinc-300 text-[15px] font-light leading-relaxed">
                  I'm looking to grow through real-world opportunities where I can contribute, solve
                  problems, and continue developing as a software developer.
                </p>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;