import React from "react";
import { IoMusicalNotes } from "react-icons/io5";
import { TbDeviceImacCode } from "react-icons/tb";
import { BiGlobe } from "react-icons/bi";

const interests = [
  {
    icon: IoMusicalNotes,
    label: "Music",
    desc: "Love listening to music and exploring different genres and sounds.",
  },
  {
    icon: TbDeviceImacCode,
    label: "Building",
    desc: "Turning ideas into reality through coding and design.",
  },
  {
    icon: BiGlobe,
    label: "Exploring",
    desc: "Following new research, technologies, and innovations emerging around the world.",
  },
];

export default function InterestsSection() {
  return (
    <section className="bg-[#0d0d0d] w-full rounded-2xl px-12 py-24 font-['DM_Sans']">
      <p className="font-['Share_Tech_Mono'] text-xs text-blue-500 tracking-[2.5px] uppercase mb-2.5">
        The person behind the code
      </p>
      <div className="flex items-center gap-3 mb-10">
        <div className="w-[3px] h-7 bg-blue-500 rounded-full shrink-0" />
        <h2 className="font-['Share_Tech_Mono'] text-xl text-white">
          Beyond <span className="text-blue-500">coding</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {interests.map((item) => 
        {
          const Icon = item.icon;
          return (
          <div
            key={item.label}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-blue-600/50 transition-all duration-200"
          >
            <div className="w-16 h-16 rounded-full bg-[#0d0d0d] border border-zinc-700 flex items-center justify-center">
              <Icon className="text-2xl text-blue-400" />
            </div>
            <h3 className="font-['Share_Tech_Mono'] text-white text-base">{item.label}</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
          </div>)
})}
      </div>
    </section>
  );
}