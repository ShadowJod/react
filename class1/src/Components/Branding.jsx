import React from 'react'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'
import logo5 from '../assets/logo5.svg'
import logo6 from '../assets/logo6.svg'

const Branding = () => {
  return (
    <div className=' flex bg-[#121212] justify-between px-10 py-10 '>
        <img src={logo1} alt="" className=' w-15' />
        <img src={logo2} alt="" className=' w-25' />
        <img src={logo3} alt="" className=' w-10' />
        <img src={logo4} alt="" className=' w-15' />
        <img src={logo5} alt="" className=' w-25' />
        <img src={logo6} alt="" className=' w-10' />

    </div>
  )
}

export default Branding