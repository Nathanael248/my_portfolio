export function Header() {
  return (
    <>
      <div
        className="flex justify-between items-space-between  items-center 
       p-2 px-4 text-sm text-x   my-6 font-s border border-solid rounded-3xl text-gray-400 w-full
       md:
      
     
     "
      >
        {/* 
        flex justify-between items-space-between items-center  
       p-2 px-4 text-sm text- mx-auto my-6 font-s border border-solid rounded-3xl 
     min-[901px]: max-w-3xl text-yellow-400 
     max-[900px]: max-w-2xl
     
     items-center*/}
        <span>NATHY PAPY</span>
        <div className=" hidden justify-between   gap-6 text-white md:flex">
          {/* space-x-4 max-w-md */}
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">SERVICES</a>
          <a href="#">TESTIMONIALS</a>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border-none border-blue-700 rounded-4xl pr-4 ">
            Contact me
          </button>
          <img
            src="/src/assets/menu-outline.svg"
            alt="menu"
            className="w-6 h-6 text-gray-400 md:hidden"
            style={{ filter: "invert(0.5) grayscale(100%)" }}
          />
        </div>
      </div>
    </>
  );
}
