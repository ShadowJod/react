import React from "react";
import img2 from "../assets/img2.webp";

const Section1 = () => {
  return (
    <div className="grid grid-cols-2 bg-[#121212] text-[#F4F2ED] p-3 gap-3">
      <div className=" h-screen">
        <img
          src={img2}
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>

      <div className="h-screen flex flex-col bg-[#212121] rounded-xl p-12 gap-35">
        <p style={{ fontFamily: "MyFont3" }} className=" text-xs">
          ABOUT
        </p>
        <div className="flex flex-col gap-5">
          <h1 className=" uppercase text-5xl">
            Bringing <br /> Fashion Brands to life
          </h1>
          <div className=" flex gap-5">
            <p className=" tracking-wide">
              At our agency, we are passionate about bringing fashion brands to
              life. With a combination of creative vision, strategic thinking,
              and industry expertise. We help
            </p>
            <p className=" tracking-wide">
              our clients transform their ideas into vibrant realities that
              resonate with their target audience, leaving a lasting impact in
              the fashion industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
