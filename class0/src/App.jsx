import Hero from './Hero.jsx';
import Nav from './Nav.jsx'
import Section from './Section.jsx';
import Footer from './Footer.jsx';

const app = ()=>{
  return <div className='bg-[#F5F5F4] text-[#1C1C1C]'>
   <Nav/>
   <Hero/>
   <Section/>
   <Footer/>
  </div>
}

export default app;