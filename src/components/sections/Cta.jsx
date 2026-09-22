import React from "react";

export default function CTASection() {
  return (
    <section className="bg-black w-full rounded-2xl px-12 py-16 font-['DM_Sans'] text-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-blue-600/10 blur-3xl rounded-full z-0" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="font-['Share_Tech_Mono'] text-xs text-blue-500 tracking-[2.5px] uppercase">
          Let's work together
        </p>
        <h2 className="font-['Share_Tech_Mono'] text-3xl sm:text-4xl text-white leading-tight max-w-xl">
          Got a project in <span className="text-blue-500">mind?</span>
        </h2>
        <p className="text-zinc-400 text-[15px] font-light leading-relaxed max-w-md">
          I'm open to frontend roles, internships, and freelance projects. If you're building
          something and need a developer who cares about the details — let's talk.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <a
            href="mailto:nathy@dev.com"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-normal px-7 py-3 rounded-full border border-blue-600 hover:border-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <i className="ti ti-mail text-sm" aria-hidden="true" />
            Get in touch
          </a>
          <a
            href="#"
            className="bg-transparent hover:bg-blue-500/10 text-white text-sm font-normal px-7 py-3 rounded-full border border-blue-500 transition-colors duration-200 flex items-center gap-2"
          >
            <i className="ti ti-download text-sm" aria-hidden="true" />
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-5 mt-4">
          {[
            { icon: "ti-brand-github", label: "GitHub" },
            { icon: "ti-brand-linkedin", label: "LinkedIn" },
            { icon: "ti-brand-x", label: "X / Twitter" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
            >
              <i className={`ti ${s.icon} text-base`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}