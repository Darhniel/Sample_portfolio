"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const goToWorks = () => {
    router.push("/#work");
  };

  return (
    <div className="fixed right-0 left-0 z-50 font-medium w-11/12 text-sm sm:w-[488px] flex flex-row justify-between items-center text-[#000000] px-1 h-10 sm:h-12 bg-white rounded-4xl m-auto border border-[#00000033] pl-5">
      <Link href={"/"} className="">
        OD
      </Link>
      <div className="flex flex-row items-center h-5/6">
        <div
          onClick={goToWorks}
          className=" sm:py-4 sm:px-6 sm:-ml-5 mr-3 sm:mr-0 cursor-pointer"
        >
          My Work
        </div>
        <div className="h-full w-36 rounded-4xl bg-[#363636] text-[#FAFAFA] border border-[#000000] text-center flex justify-center items-center">
          <a href="https://calendly.com/olojodaniel99/30min" target="_blank"> Let&apos;s talk Design</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
