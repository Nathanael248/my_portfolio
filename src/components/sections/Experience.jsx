import React, { useState } from "react";

const experiences = [
  {
    id: "it",
    role: "IT Support / Computer Maintenance",
    company: "Company / Organization Name",
    location: "Location",
    period: "Dates",
    icon: "ti-device-desktop",
    type: "Professional",
    bullets: [
      "Provided technical support and troubleshooting for computers, printers, routers, and other office equipment.",
      "Performed computer maintenance, hardware troubleshooting, and software-related problem solving.",
      "Assisted with office networking, including router configuration and network connectivity troubleshooting.",
      "Worked with data recovery and storage-related tasks, including hard-drive recovery using a duplicator dock.",
      "Supported installation and maintenance of VoIP and office communication equipment.",
    ],
  },
  {
    id: "dev",
    role: "Self-Directed Frontend Developer",
    company: "Independent",
    location: "",
    period: "Month Year – Present",
    icon: "ti-code",
    type: "Development",
    bullets: [
      "Developed frontend skills through structured courses, hands-on practice, and personal projects.",
      "Built responsive and interactive websites and web applications using HTML, CSS, JavaScript, and React.",
      "Practiced REST API integration, asynchronous JavaScript, DOM manipulation, component-based development, and responsive UI design.",
      "Used Git and GitHub for version control and project management.",
      "Applied knowledge through multiple personal projects, including an e-commerce clone, weather application, landing pages, and interactive JavaScript applications.",
    ],
  },
];

export default function ExperienceSection() {
  const [active, setActive] = useState("it");
  const current = experiences.find((e) => e.id === active);

  return (
    <section className="bg-[#0d0d0d] w-full rounded-2xl px-12 py-24 font-['DM_Sans']">
      <p className="font-['Share_Tech_Mono'] text-xs text-blue-500 tracking-[2.5px] uppercase mb-2.5">
        Background
      </p>
      <div className="flex items-center gap-3 mb-10">
        <div className="w-[3px] h-7 bg-blue-500 rounded-full shrink-0" />
        <h2 className="font-['Share_Tech_Mono'] text-xl text-white">
          Work <span className="text-blue-500">experience</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        <div className="flex flex-col gap-2">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActive(exp.id)}
              className={`flex items-start gap-3 px-4 py-4 rounded-xl text-left transition-all duration-200 w-full border ${
                active === exp.id
                  ? "bg-blue-600/15 border-blue-600/40 text-white"
                  : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
              }`}
            >
              <i
                className={`ti ${exp.icon} text-base mt-0.5 shrink-0 ${
                  active === exp.id ? "text-blue-400" : "text-zinc-600"
                }`}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-normal leading-snug">{exp.role}</p>
                <p className={`text-xs mt-1 ${active === exp.id ? "text-blue-400" : "text-zinc-600"}`}>
                  {exp.type}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-[#111] border border-zinc-800 rounded-2xl p-7 flex flex-col gap-6">
          <div className="pb-5 border-b border-zinc-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-600/30 flex items-center justify-center shrink-0">
                <i className={`ti ${current.icon} text-blue-400 text-lg`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-['Share_Tech_Mono'] text-white text-base leading-tight">
                  {current.role}
                </h3>
                <p className="text-zinc-500 text-xs mt-0.5">
                  {current.company}{current.location ? ` · ${current.location}` : ""}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 font-['Share_Tech_Mono'] text-[11px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              <i className="ti ti-calendar text-xs" aria-hidden="true" />
              {current.period}
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            {current.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <i className="ti ti-chevron-right text-blue-500 text-sm mt-1 shrink-0" aria-hidden="true" />
                <p className="text-zinc-300 text-sm font-light leading-relaxed">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}