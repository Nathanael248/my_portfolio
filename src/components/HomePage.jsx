export function HomePage() {
  return (
    <>
      {/* <html lang="en"> */}
      <body className="bg-gray-950 min-h-screen flex px-6 py-6 justify-center p-6 font-dm">
        {/* Hero Section  */}
        <section className="grid grid-cols-2 w-full max-w-5xl rounded-2xl overflow-hidden min-h-[520px]">
          {/* Left Grid  */}
          <div className="bg-black flex flex-col justify-center gap-4 pl-6 py-14 ">
            {/* Eyebrow max-[890px]:px-10 py-12 */}
            {/* <p className="text-white text-base font-normal tracking-[2.5px] ">
              Hi! I'm <span className="text-blue-500">Nathanael</span>
            </p> */}

            {/* Name */}
            <div className="flex flex-col gap-1">
              <h1 className="font-syne text-xl font-extrabold text-white leading-tight">
                Hi! I'm <span className="text-blue-500">Nathanael</span>
              </h1>
              <p className="font-syne   text-blue-400 font-semibold text-2xl tracking-wide">
                Frontend Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-[15px] font-sans leading-relaxed max-w-sm">
              Building modern, responsive, user-friendly and functional web
              applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium  px-4 py-2 rounded-full border border-blue-600 hover:border-blue-700 transition-colors duration-200 "
              >
                Let's connect.
              </a>
              <a
                href="#"
                className="bg-transparent hover:bg-blue-500/10 text-white text-xs font-medium px-4 py-2 rounded-full border border-blue-500 transition-colors duration-200 "
              >
                Download my CV
              </a>
            </div>
          </div>

          {/* Right Grid bg-gradient-to-l from-blue-500/50 to-black 
          
          bg-gradient-to-b from-sky-800/10 from-[5%] via-blue-500/50 via-[50%] to-sky-800/10 to-[95%]
          
             linear-gradient(to-top,#0f172a_90%,transparent_20%,transparent_80%,#0f172a_96%,#0f172a_100%),
             
             linear-gradient(to_bottom,#0f172a_0%,transparent_10%,transparent_90%,#0f172a_100%,#0f172a_10%),*/}
          <div
            className="

          

          bg-[linear-gradient(to_left,#1e3a8a,#000000)]
          relative flex items-center justify-center overflow-hidden"
          >
            {/* Dot grid background */}
            <div className="grid-dots absolute inset-0 z-0"></div>

            {/* Blue glow  */}
            <div className="absolute w-40 h-40 rounded-full bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 blur-2xl "></div>

            {/* Content  */}
            <div className="relative z-10  flex flex-col items-center gap-6 pl-8 pr-6">
              {/* Avatar  */}
              <div className="w-36 h-36 rounded-full border-2 border-blue-600 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="font-syne text-4xl font-extrabold text-blue-500">
                    NP
                  </span>
                </div>
              </div>

              {/* Skill tags  */}
              <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3.5 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3.5 py-1 rounded-full">
                  TypeScript
                </span>
                <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3.5 py-1 rounded-full">
                  Tailwind CSS
                </span>
                <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3.5 py-1 rounded-full">
                  Vanilla HTML/CSS
                </span>
                <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3.5 py-1 rounded-full">
                  UI Design
                </span>
              </div>
            </div>
          </div>
        </section>
      </body>
      {/* </html> */}
    </>
  );
}
