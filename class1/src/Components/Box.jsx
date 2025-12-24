import React from 'react'

const Box = (props) => {
  console.log(props);
  
  return (
    <div style={{fontFamily:'MyFont1'}} className=' cursor-pointer grow bg-[#212121] hover:bg-[#2A2A2A] ease-in w-fit rounded-xl text-[#F4F2ED] p-5 flex flex-col gap-3'> 
        <h2 style={{fontFamily:'MyFont3'}}   className='text-xl '>{props.title}</h2>
        <p className='text-base'>{props.p}</p>
        <a className='text-xs mt-3 '>{props.a}</a>
    </div>
  )
}

export default Box