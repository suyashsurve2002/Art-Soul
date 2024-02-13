import React from "react";

export const RedRectangle = () => {
  return (
    <div className="h-[70vh] text-[#F7F5F0] flex justify-around items-center bg-[#CF2E28]">
      <div className="w-[40%]">Three Images</div>
      <div className="w-[50%] pr-[100px]">
        <h2 className="text-[20px] italic font-[500]">
          “It is my belief that art is transformational. It alters the spectrum
          through which we view the world-sometimes alerting, always reflecting.<br/><br/>
          By forging a connection with our minds through our sensorial
          perceptions, visual and otherwise, the artist reaches deep within to
          impact the soul - therein completing the transaction.”
        </h2>
        <p className="pt-[50px]">● ● ●</p>
        <h6 className="pt-[20px]">Dr. Tarana Khubchandani</h6>
        <p className="text-[#ECD2A0] text-[14px] uppercase">Director of Art & Soul</p>
      </div>
    </div>
  );
};
