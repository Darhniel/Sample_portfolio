const Contact = () => {
  return (
    <div className="bg-[#16181B] max-h-[500px] flex flex-col gap-8 items-center justify-center w-full text-center px-6 sm:px-10">
      <div className="relative w-full max-h-[320px] flex items-center justify-center overflow-hidden">
        <p className="font-semibold text-6xl sm:text-[120px] md:text-[150px] lg:text-[290px] text-[#CFCFCF] md:tracking-[-0.8rem] lg:tracking-[-1.2rem] leading-none mx-10">
          CONTACT
        </p>
      </div>
      <div className=" flex flex-col gap-2 font-semibold text-[20px] mt-4 pb-2 uppercase text-[#F9FFFC] tracking-tight">
        <a href="mailto:olojodaniel99@gmail.com">Olojodaniel99@gmail.com</a>
        <p>LINKEDIN</p>
      </div>
    </div>
  );
};
export default Contact;
