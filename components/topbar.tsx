import Carousels from "./carousels";

const Topbar = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center gap-4 w-11/12 sm:w-[90%] md:w-[80%] m-auto mt-5">
        <p className="text-3xl sm:text-6xl text-[#363636]">OLOJO DANIEL</p>
        <p className="text-[#CFCFCF] text-2xl sm:text-6xl">
          PRODUCT DESIGNER & PITCH DECK DESIGNER
        </p>
        <p className="text-[#363636] md:w-[75%]">
          I partner with startup founders to bring their vision to life through
          design that captivates users and attracts investors.
        </p>
        <button className="flex justify-center items-center bg-[#363636] sm:py-3 sm:px-8 px-6 py-2 rounded-4xl text-sm">
          work with me
        </button>
      </div>

{/* Carousel Section */}
<Carousels/>

    </div>
  );
};
export default Topbar;
