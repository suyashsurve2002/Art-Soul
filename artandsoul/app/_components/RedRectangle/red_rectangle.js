"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const RedRectangle = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".red-rectangle", 
        start: "-50% center", 
        end: "60% center",
        scrub: 1, 
        markers:true,
      },
    });

    tl.to(".red-rectangle", {
      backgroundColor: "#CF2E28",
      color:"#F7F5F0", 
    });
  }, []); 

  return (
    <div className="red-rectangle py-[50px] h-[100%] text-[#F7F5F0] flex justify-around items-center bg-[#fff]">
      <div className="w-[40%]">
       <div className="flex justify-between items-center">
       <Image src="/firstRoom.jpg" width="286" height="500"></Image>
        <Image src="/thirdRoom.jpg" width="109" height="128"></Image>
       </div>
        <Image src="/secondRoom.jpg" width="328" height="249" className="mt-[50px]"></Image>
        
      </div>
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
