import React from 'react'
import Nav from './Components/Nav.jsx'
import './index.css'
import Hero from './Components/Hero.jsx'
import Box from './Components/Box.jsx'
import Branding from './Components/Branding.jsx'
import Section1 from './Components/Section1.jsx'
import Section2 from './Components/Section2.jsx'

const App = () => {
  return (
    <div className=''>
      <Nav/>
      <Hero/>
      <div className=' flex bg-[#121212] px-3 py-1 gap-3'>
        <Box title='BRANDING' p='Develop a strong, recognizable fashion brand identity.' a='ABOUT BRANDING'/>
        <Box title='IDENTITY' p='We create a unique and consistent image for your fashion brand.' a='ABOUT IDENTITY'/>
        <Box title='MARKETING' p='Reach and engage your target audience effectively on all platforms' a='ABOUT MARKETING'/>
        <Box title='E-COMMERCE' p='Optimize online sale drive growth for your e-commerce store' a='ABOUT E-COMMERCE'/>
      </div>
      <Branding/>
      <Section1/>
      <Section2/>

    </div>
  )
}

export default App