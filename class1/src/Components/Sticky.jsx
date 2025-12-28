import React from "react";
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'
import img6 from '../assets/img6.webp'

const Sticky = () => {
  return (
    <div>
    <div className="w-full h-screen box-border bg-[#121212] p-3 text-[#F4F2ED]">
  <div style={{backgroundImage: `url(${img4})`}} className="h-full w-full text-[#F4F2ED] bg-cover rounded-2xl fixed top-3">
  </div>
</div>

<div className="w-full h-screen box-border bg-[#121212] pb-3 px-3 text-[#F4F2ED]">
  <div style={{backgroundImage: `url(${img5})`}} className="h-full w-full text-[#F4F2ED] bg-cover rounded-2xl sticky top-0">
  </div>
</div>

<div className="w-full h-screen box-border bg-[#121212] pb-3 px-3 text-[#F4F2ED]">
  <div style={{backgroundImage: `url(${img6})`}} className="h-full w-full text-[#F4F2ED] bg-cover rounded-2xl sticky top-0">
  </div>
</div>

</div>

  )
};

export default Sticky;
