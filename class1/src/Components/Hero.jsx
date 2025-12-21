import React from 'react'
import hero from '../assets/img1.webp'

const Hero = () => {
  return (
    <div className=' px-3 py-2 bg-[#121212]'>
    <div className=' h-screen w-full relative bg-cover 
     rounded-2xl text-[#F4F2ED]' style={{backgroundImage:`url(${hero})`}}>
        <div id='overlay' className='h-full w-full absolute inset-0 bg-black/30'></div>
      <h1 className=' text-8xl font-light'><span className=' absolute top-60 left-22'>FASHION </span>
      <span className=' absolute top-85 left-50'>& BRANDING</span></h1>
      <p className=' absolute top-120 left-55 w-110 '>Bringing Your Fashion Brand's Unique Identity to Life Through Strategic Marketing and Advertising.</p>
      <a className=' absolute top-120 left-255 text-xs  '>LEARN MORE</a>
    </div>
    </div>
  )
}

export default Hero