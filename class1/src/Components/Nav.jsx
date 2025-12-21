import React from 'react'


const Nav = () => {
  return (
    <div className=' w-full bg-[#121212] text-[#F4F2ED] flex justify-between p-3 items-center'>
        <h3 className=' font-mono pl-2'>ALVY</h3>

        <div id='hyperlink' className='font-mono flex gap-2'>
            <a className=' px-3 py-2 bg-[#2A2A2A]   rounded-md text-sm'>PROJECTS</a>
            <a className=' px-3 py-2 bg-[#2A2A2A]   rounded-md text-sm'>SERVICES</a>
            <a className=' px-3 py-2 bg-[#2A2A2A]   rounded-md text-sm'>STUDIO</a>
            <a className=' px-3 py-2 bg-[#2A2A2A]   rounded-md text-sm'>BLOG</a>
            <a className=' px-3 py-2 bg-[#2A2A2A]   rounded-md text-sm' >PAGES</a>
            <a className=' px-3 py-2 bg-[#2A2A2A]   rounded-md text-sm'>CART</a>
            <button className=' px-3 py-2 bg-[#AD9D49]   rounded-md text-[#1A1A1A] text-sm'>GET IN TOUCH</button>
        </div>
    </div>
  )
}

export default Nav