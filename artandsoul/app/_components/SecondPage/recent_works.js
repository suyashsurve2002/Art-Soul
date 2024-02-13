"use client";
import { useEffect, useRef } from "react";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export const RecentWorks = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section w-[100vw]">
            <div className="flex justify-around items-center py-[50px]">
              <div className="flex-col justify-between w-[50%]">
                <p className="pt-[50px] text-[14px] text-[#BF9F61]">01/05 ●</p>
                <p className="pt-[50px] text-[16px] text-[#442B22]">
                  Recent Works by
                </p>
                <h1 className="pt-[50px] text-[120px] text-[#CF2E28] leading-[120px] font-[500]">
                  Shashikant Dhotre
                </h1>
                <h2 className="pt-[50px] text-[24px] text-[#BF9F61]">
                  1st – 15th February
                </h2>
              </div>
              <div className="w-[40%] flex items-center justify-center">
                <Image src="/owl.jpg" width="490" height="617" className="rotate-[10.7deg] rounded-[245px]"></Image>
              </div>
            </div>
          </div>

          <div className="scroll-section w-[100vw]">
            <div className="flex justify-around items-center py-[50px]">
              <div className="flex-col justify-between w-[50%]">
                <p className="pt-[50px] text-[14px] text-[#BF9F61]">01/05 ●</p>
                <p className="pt-[50px] text-[16px] text-[#442B22]">
                  Recent Works by
                </p>
                <h1 className="pt-[50px] text-[120px] text-[#CF2E28] leading-[120px] font-[500]">
                  Suyash Surve
                </h1>
                <h2 className="pt-[50px] text-[24px] text-[#BF9F61]">
                  1st – 15th February
                </h2>
              </div>
              <div className="w-[40%] flex items-center justify-center">
                Image
              </div>
            </div>
          </div>

          <div className="scroll-section w-[100vw]">
            <div className="flex justify-around items-center py-[50px]">
              <div className="flex-col justify-between w-[50%]">
                <p className="pt-[50px] text-[14px] text-[#BF9F61]">01/05 ●</p>
                <p className="pt-[50px] text-[16px] text-[#442B22]">
                  Recent Works by
                </p>
                <h1 className="pt-[50px] text-[120px] text-[#CF2E28] leading-[120px] font-[500]">
                  Bhavesh Pharate
                </h1>
                <h2 className="pt-[50px] text-[24px] text-[#BF9F61]">
                  1st – 15th February
                </h2>
              </div>
              <div className="w-[40%] flex items-center justify-center">
                Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
