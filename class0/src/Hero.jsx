import hero from "./assets/hero.png";
const Hero = () => {
  return (
    <div className="px-6 py-4">
      <img src={hero} alt="" className="pb-3 w-full object-cover rounded-3xl" />
    </div>
  );
};

export default Hero;
