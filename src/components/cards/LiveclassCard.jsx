import { ArrowRight, Brodcast } from "iconsax-react";

export default function LiveclassCard() {
  return (
    <div className="bg-brand-green w-full sm:w-[200px] h-[95px] rounded-lg shadow-md p-3 flex flex-col items-center sm:items-end border border-black mb-4 sm:mb-0">
      <div className="w-full flex flex-col sm:flex-row sm:items-center gap-5 h-1/2 text-xl">
        <div className="relative mb-3 sm:mb-0">
          <Brodcast size="30" className="animate-ping" color="red" />
          <Brodcast size="30" className="absolute top-0" color="red" />
        </div>
        <h1 className="font-black text-center sm:text-left text-base sm:text-lg">
          Live Class
        </h1>
      </div>
      <div className="w-full sm:w-2/3 flex gap-5 h-1/2 text-green-600 items-center text-xs sm:text-sm font-bold hover:cursor-pointer hover:text-base whitespace-nowrap duration-200 ease-in-out">
        <h1>Join Now</h1>
        <ArrowRight className="" size="30" />
      </div>
    </div>
  );
}
