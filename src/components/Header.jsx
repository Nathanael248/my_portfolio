export function Header() {
  return (
    <>
      <div
        className="flex justify-between items-space-between items-center  
       p-2 px-4 max-w-3xl bg-gray-900 text-white mx-auto my-6 font-s border border-solid rounded-3xl"
      >
        <span>NATHY PAPY</span>
        <div className="flex space-x-4 max-w-md  ">
          <span>ABOUT</span>
          <span>PROJECTS</span>
          <span>SERVICES</span>
          <span>TESTIMONIALS</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border-none border-blue-700 rounded-4xl">
          Contact me
        </button>
      </div>
    </>
  );
}
