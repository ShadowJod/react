import React from 'react'
import footer1 from './assets/footer1.png'
import footer2 from './assets/footer2.png'

const Footer = () => {
  return (
    <div className='px-6 py-15 flex justify-between border border-black/20 '>
        <div className='flex flex-col w-90 gap-8'>
            <button className='border border-black/20 px-2 py-0.5 rounded-3xl text-sm w-fit'>Services</button>
            <p className=' text-2xl text-[#1C1C1C]
'>Explore our full range of coaching, training, and tennis experience. From first serve to match point - we've got the right program for you</p>

            <button className=' mt-10 px-3 py-0.5 bg-black/90 text-white text-sm rounded-2xl justify-self-end w-fit'>Explore More</button>
        </div>
        <img src={footer1} alt=""  className=' w-90 rounded-3xl'/>
        <img src={footer2} alt="" className=' w-90 rounded-3xl'/>
    </div>
  )
}

export default Footer