import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/inter";
import  styles from "./Hero.module.css"
export function Hero() {
  return (
    <>
      {/* <html lang="en"> */}
      {/* <body className="bg-gray-950 min-h-screen flex px-6 py-6 justify-center p-6 font-dm gap-6  "> */}
        {/* Hero Section  */}
        <section className={` ${styles.section} grid  w-full  m-auto  max-w-6xl mx-auto border-1 border-gray-500 border-solid rounded-2xl overflow-hidden min-h-[520px] `}>
          {/* Left Grid  */}
          <div className="bg-black flex flex-col justify-center items-center text- gap-6 pl- py-6 ">
            {/* Eyebrow max-[890px]:px-10 py-12 */}
            {/* <p className="text-white text-base font-normal tracking-[2.5px] ">
              Hi! I'm <span className="text-blue-500">Nathanael</span>
            </p> */}


          <div className="flex flex-col">
            {/* Name */}
            <div className="flex flex-col justify-items-center gap-1 ">
              <h1 className="font-[inter] pb-4  text-blue-500 font-semibold text-4xl tracking-wide mb-4 sm:text-4xl">
                FRONTEND DEVELOPER
              </h1>
              <h1 className="font-[inter] font-bold text-4xl mb-4 font-  text-white leading-tight">
                Hi! I'm{" "}
                <span className="text-blue-600 font-roboto sm:text-4xl"> Nathaniel</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-[15px] pb-6 font-sans leading-relaxed max-w-screen-md md:text-3xl">
              I build modern, responsive, user-friendly and functional web
              applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#"
                className="flex bg-blue-600 hover:bg-transparent text-white text-3xl font-medium  px-3 py-2 rounded-full border border-blue-600 font-[inter] hover:border-blue-500 hover:scale-98 transition-colors duration-200 md:text-sm items-center"
              >
                Let's Connect.
              </a>
              <a
                href="#"
                className="flex bg-transparent h-auto font-[inter] hover:bg-blue-600 text-white text-xl font-medium px-3 py- rounded-full border border-blue-400 hover:scale-98  transition-colors duration-200 md:text-sm  items-center"
              >
                {/* Download My CV */}
                View My Work
              </a>
            </div>

            </div>
          </div>

          {/* Right Grid bg-gradient-to-l from-blue-500/50 to-black 
          
          bg-gradient-to-b from-sky-800/10 from-[5%] via-blue-500/50 via-[50%] to-sky-800/10 to-[95%]
          
             linear-gradient(to-top,#0f172a_90%,transparent_20%,transparent_80%,#0f172a_96%,#0f172a_100%),
             
             linear-gradient(to_bottom,#0f172a_0%,transparent_10%,transparent_90%,#0f172a_100%,#0f172a_10%),*/}

             {/* border-t border-gray-500 */}
         <div className="flex  overflow-hidden bg-gray-950 border  items-center justify- gap-10 ">
          
            <div className="flex w-max whitespace-nowrap animate-scroll gap-10 items-center text-xl ">
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white ">HTML5</span>
          <span className="py-2 px-4 border border-black rounded-2xl  bg-black text-white">CSS3</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">JavaScript</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">React.Js</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">API</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">Tailwind CSS</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">Git</span>
            </div>

            <div className="flex w-max whitespace-nowrap items-center animate-scroll arial-hidden gap-10 text-xl ">
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white ">HTML5</span>
          <span className="py-2 px-4 border border-black rounded-2xl  bg-black text-white">CSS3</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">JavaScript</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">React.Js</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">API</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">Tailwind CSS</span>
          <span className="py-2 px-4 border border-black rounded-2xl bg-black text-white">Git</span>
            </div>
         </div>
        </section>
      {/* </body> */}
      {/* </html> */}
    </>
  );
}
// 