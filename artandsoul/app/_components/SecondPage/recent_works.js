import React from "react";

export const RecentWorks = () => {
  return (
    <div className="flex justify-around items-center py-[50px]">
      <div className="flex-col justify-between w-[50%]">
        <p className="pt-[50px] text-[14px] text-[#BF9F61]">01/05 ●</p>
        <p className="pt-[50px] text-[16px] text-[#442B22]">Recent Works by</p>
        <h1 className="pt-[50px] text-[120px] text-[#CF2E28] leading-[120px] font-[500]">Shashikant Dhotre</h1>
        <h2 className="pt-[50px] text-[24px] text-[#BF9F61]">1st – 15th February</h2>
      </div>
      <div className="w-[40%] flex items-center justify-center">Image</div>
    </div>
  );
};
