import React from "react";
import img3 from "../assets/img3.webp";

const Section2 = () => {
  return (
    <div className="grid grid-cols-2 bg-[#121212] text-[#F4F2ED] px-3 gap-3 min-h-screen">
      {/* IMAGE COLUMN */}
      <div className="order-2">
        <img
          src={img3}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* CONTENT COLUMN */}
      <div className="flex flex-col rounded-xl gap-5 order-1">
        <div className="bg-[#2A2A2A] p-10 rounded-2xl flex flex-col gap-2">
          <h2 className="uppercase">Video Production</h2>
          <p className=" text-sm text-[#F4F2ED] opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus vero cumque et voluptatibus molestiae dolore nisi ipsam ex est?</p>
        </div>

        <div className="bg-[#2A2A2A] p-10 rounded-2xl flex flex-col gap-2">
         <h2 className="uppercase">Video Production</h2>
          <p className=" text-sm text-[#F4F2ED] opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus vero cumque et voluptatibus molestiae dolore nisi ipsam ex est?</p>
        </div>

        <div className="bg-[#2A2A2A] p-10 rounded-2xl flex flex-col gap-2">
          <h2 className="uppercase">Video Production</h2>
          <p className=" text-sm text-[#F4F2ED] opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus vero cumque et voluptatibus molestiae dolore nisi ipsam ex est?</p>
        </div>

        <div className="bg-[#2A2A2A] p-10 rounded-2xl flex flex-col gap-2">
         <h2 className="uppercase">Video Production</h2>
          <p className=" text-sm text-[#F4F2ED] opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus vero cumque et voluptatibus molestiae dolore nisi ipsam ex est?</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
