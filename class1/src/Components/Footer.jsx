import React from "react";

const Footer = () => {
  return (
    <div className=" box-border bg-[#121212] p-3 text-[#F4F2ED] flex gap-2">
      <div className="w-[20%] bg-[#2A2A2A] flex flex-col gap-70 rounded-xl p-5">
        <h4>ALVY</h4>

        <div className=" flex gap-3">
          <i
            style={{
              paddingInline: "4px",
              backgroundColor: "#2E2E2E",
              borderRadius: "50%",
              fontSize: "1.2rem",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            class="ri-instagram-line"
          ></i>
          <i
            style={{
              paddingInline: "4px",
              backgroundColor: "#2E2E2E",
              borderRadius: "50%",
              fontSize: "1.2rem",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            class="ri-twitter-line"
          ></i>
          <i
            style={{
              paddingInline: "4px",
              backgroundColor: "#2E2E2E",
              borderRadius: "50%",
              fontSize: "1.2rem",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            class="ri-facebook-circle-line"
          ></i>
        </div>
      </div>
      <div className="w-[80%]  flex flex-col gap-2 rounded-2xl">
        <div className=" bg-[#2A2A2A] h-[80%] flex gap-40 rounded-xl p-7">
          <div className=" flex flex-col gap-5">
            <h2 className=" mb-2">PAGES</h2>
            <a href="" className=" text-xs opacity-70">
              HOME
            </a>
            <a href="" className=" text-xs opacity-70">
              SERVICES
            </a>
            <a href="" className=" text-xs opacity-70">
              STUDIO
            </a>
            <a href="" className=" text-xs opacity-70">
              JOBS
            </a>
            <a href="" className=" text-xs opacity-70">
              CONTACT
            </a>
            <button className=" bg-[#AD9D49] text-black px-4 py-2 rounded-[10px] text-xs">
              MORE TEMPLATE
            </button>
          </div>

          <div className=" flex flex-col gap-5">
            <h2 className=" mb-2">CMS</h2>
            <a href="" className=" text-xs opacity-70">
              HOME
            </a>
            <a href="" className=" text-xs opacity-70">
              SERVICES
            </a>
            <a href="" className=" text-xs opacity-70">
              STUDIO
            </a>
            <a href="" className=" text-xs opacity-70">
              JOBS
            </a>
            <a href="" className=" text-xs opacity-70">
              CONTACT
            </a>
          </div>

          <div className=" flex flex-col gap-5">
            <h2 className=" mb-2">UTILITY PAGES</h2>
            <a href="" className=" text-xs opacity-70">
              HOME
            </a>
            <a href="" className=" text-xs opacity-70">
              SERVICES
            </a>
            <a href="" className=" text-xs opacity-70">
              STUDIO
            </a>
            <a href="" className=" text-xs opacity-70">
              JOBS
            </a>
            <a href="" className=" text-xs opacity-70">
              CONTACT
            </a>
          </div>
        </div>
        <div className="h-[20%] bg-[#2A2A2A] rounded-xl p-7">
          <h4 className="text-xs  text-white/50">
            MADE BY <span className="text-white underline">PAWEL GOLA </span> - POWERED BY <span className="text-white underline"> WEBFLOW </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
