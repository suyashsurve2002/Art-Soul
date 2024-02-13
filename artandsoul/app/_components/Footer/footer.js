import React from "react";
import { Line } from "../Line/line";

export const Footer = () => {
  return (
    <div className="py-[50px]">
      <Line />
      <div className="flex justify-between px-[30px] py-[30px]">
        <div>
          <p>Book a Viewing Session</p>
        </div>
        <div className="flex gap-[50px]">
          <a>Artists</a>
          <a>Exhibitions</a>
          <a>Publications</a>
          <a>Public Projects</a>
          <a>About</a>
        </div>
        <div>
          <p>Copyright @Art&Soul 2024</p>
        </div>
      </div>
      <div className="flex justify-end ">
        <div className="flex gap-[50px] py-[20px] border-t-black border-t border-b-black border-b border-solid">
          <a>Instagram</a>
          <a>Facebook</a>
          <a>Linkedin</a>
          <a>Youtube</a>
        </div>
        <div className="flex pl-[200px] pr-[30px] gap-[50px] py-[20px] border-t-black border-t border-b-black border-b border-solid">
          <a>Privacy</a>
          <a>Cookie Policy</a>
          <a>T & C</a>
         
        </div>
      </div>
    </div>
  );
};
