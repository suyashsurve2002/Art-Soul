import React from "react";
import { FeaturedImageSwiper } from "./featured_images_swiper";

export const FeaturedArtist = () => {
  return (
    <div className="flex-col items-center justify-center">
      <FeaturedImageSwiper />
      <div className="flex justify-center items-center mt-[100px] pb-[100px]">
        <div className="flex-col text-center justify-center items-center px-[100px]">
          <h6 className="text-[14px] text-[#CF2E28]">OUR FEATURED ARTISTS</h6>
          <h2 className="pt-[50px] italic text-[24px] text-[#BF9F61] leading-[46px]">
            Sudip Roy
          </h2>
          <p className="pt-[10px] text-[16px] leading-[30px] text-[#442B22] px-[320px]">
            The gallery pursues a discourse within India and overseas of
            aesthetic dialogues, producing spectacles that vary in genre,
            materiality and conceptual thought across the historical timeline of
            Indian Art.
          </p>
          <button className="mt-[50px] rounded-[30px] px-[20px] py-[5px] border-[1px] solid border-[#4C4431] text-[#4C4431] text-[12px]">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};
