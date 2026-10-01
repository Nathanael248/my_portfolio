export function Header() {
  return (
    <>
      <div
        className="flex justify-between items-space-between  items-center 
       py-2 px-6 text-sm text-x  bg-blue- h-18 mb-14 font-s  text-gray-400 w-full border-b
       md:
      
     
     "
      >
        {/* 
        flex justify-between items-space-between items-center  
       p-2 px-4 text-sm text- mx-auto my-6 font-s border border-solid rounded-3xl 
     min-[901px]: max-w-3xl text-yellow-400 
     max-[900px]: max-w-2xl
     
     items-center*/}
        <img
          src="/My_logo.svg"
          alt="ON logo"
          className="w-12 h-10"
        />
        {/* <span className="h-6  items-center">NATHY PAPY</span> */}
        <div className=" hidden justify-between items-center  gap-6 text-white md:flex">
          {/* space-x-4 max-w-md */}
          <a href="#About">ABOUT</a>
          <a href="#Projects">PROJECTS</a>
          <a href="#">SERVICES</a>
          <a href="#Experience">TESTIMONIALS</a>
          <button className="py-2 px-3 font-[inter] bg-blue-600 border-radius- text-[14px]   border-solid- rounded-xl">Contact me</button>
        </div>
        {/* Mobile view */}
        <img
            src="/src/assets/menu-outline.svg"
            alt="menu"
            className="w-6 h-6 text-gray-400 md:hidden"
            style={{ filter: "invert(0.5) grayscale(100%)" }}
          />
     
      </div>
    </>
  );
}
