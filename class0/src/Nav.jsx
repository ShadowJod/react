const Nav = () => {
  return (
    <div className=" px-6 py-3 flex items-center justify-between w-full">
      <h2 className=" cursor-pointer text-[#1C1C1C]
 font-bold font-sans text-2xl">
        Horizon Courts
      </h2>

      <div className=" flex gap-10 items-center">
        <a
          href=""
          className=" px-2 py-1 ease-in hover:border hover:border-black/80 rounded-3xl"
        >
          About Us
        </a>
        <a
          href=""
          className=" px-2 py-1 ease-in hover:border hover:border-black/80 rounded-3xl"
        >
          Services
        </a>
        <a
          href=""
          className=" px-2 py-1 ease-in hover:border hover:border-black/80 rounded-3xl"
        >
          Coaches
        </a>
        <a
          href=""
          className=" px-2 py-1 ease-in hover:border hover:border-black/80 rounded-3xl"
        >
          Events
        </a>
        <a
          href=""
          className=" px-2 py-1 ease-in hover:border hover:border-black/80 rounded-3xl"
        >
          Contact
        </a>
      </div>

      <button className=" px-6 py-2 bg-[#1c1c1c] text-white text-sm  rounded-3xl cursor-pointer">
        Book Now
      </button>
    </div>
  );
};

export default Nav;
