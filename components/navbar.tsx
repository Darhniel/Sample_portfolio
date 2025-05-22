"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="font-medium w-11/12 text-sm sm:w-[488px] flex flex-row justify-between items-center text-[#000000] px-2 h-10 sm:h-16 bg-white rounded-4xl m-auto border border-[#00000033] pl-4">
      <p className="">OD</p>
      <Link href={"/work"} className=" sm:py-4 sm:px-8">
        My Work
      </Link>
      <div className="h-5/6 w-40 rounded-4xl border border-[#000000] text-center flex justify-center items-center">
        Work with me
      </div>
    </div>
  );
};
export default Navbar;
