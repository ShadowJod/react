import main1 from "./assets/main1.png";
import main2 from "./assets/main2.png";
import main3 from "./assets/main3.png";
const Section = () => {
  return (
    <div className="px-6 py-15 flex flex-col">
      <div className="flex justify-between ">
        <button className="px-2 py-1 self-start border border-black/40 rounded-3xl">
          About Horizon
        </button>
        <p className=" w-138 text-xl font-sans text-[#1C1C1C]
">
          At Horizon, we don't just play tennis - we live it. Since 2021, our
          club has been a home for players of all levels, from eager beginners
          to seasoned pros.
        </p>
      </div>
      <div className="flex justify-between py-12">
        <img src={main1} alt="" className=" w-90 rounded-3xl" />
        <img src={main2} alt="" className=" w-90 rounded-3xl" />
        <img src={main3} alt="" className=" w-90 rounded-3xl" />
      </div>

      <p className=" text-xl text-center">A few more fact about us in numbers</p>
      <div className=" pt-10 flex items-center justify-center gap-20">
        <div className=" text-3xl font-bold">
          <h3 className=" text-center text-[#1C1C1C]
">12 000+</h3>
        <p className=" text-sm font-light">Hours of play annually</p></div>

        <div className=" text-3xl font-bold">
          <h3 className=" text-center text-[#1C1C1C]
"> 89%</h3>
        <p className=" text-sm font-light">Player Rentention Rate</p></div>

        <div className=" text-3xl font-bold">
          <h3 className=" text-center text-[#1C1C1C]
"> 1,200+</h3>
        <p className=" text-sm font-light">Active Members</p></div>

        <div className=" text-3xl font-bold">
          <h3 className=" text-center text-[#1C1C1C]
"> 125</h3>
        <p className=" text-sm font-light">Annual Tournaments</p></div>
      </div>
    </div>
  );
};

export default Section;
