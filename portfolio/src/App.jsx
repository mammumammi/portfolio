import { useEffect, useRef, useState } from 'react'

import './index.css'
import { div, p } from 'framer-motion/client'
import Navbar from './components/Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'
import About from './components/About'
import { ScrollTrigger } from 'gsap/all'
import Skills from './components/Skills'
import { animateWithGsap, animateWithGsapTimeline } from './components/animation'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const introRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  
  useGSAP( ()=>{
    
    const tl = gsap.timeline({ 
   });
    
  


  tl.to(introRef.current,
  {
  opacity:1,
  y:30,
  delay:0.3,
  duration:1.5,
  scale:1
  })
  const scrollTimeline = gsap.timeline({
    scrollTrigger:{
      trigger:introRef.current,
      start:width > 768 ? '85% 60%' : '40% 30%',
      end:width >768 ? '130% 80%' : '70% 70%',
      scrub:0.7,
      
    }
  })
  scrollTimeline.to(introRef.current,{
    y: 10,
    opacity: 0,
    scale: 1.5,
    duration: 2,
    ease: 'none',
  })
  })
  
    


  
  return(
    <div className='overflow-x-hidden overflow-y-hidden'>
    
     <Navbar />
     <div className=' w-full md:h-[90vh] h-[60vh] flex justify-center items-center overflow-hidden z-10'>
     
      <MouseParallax lerpEase={0.0025} strength={0.07}  disableXAxis={true} disableZAxis={true}>

       <div className=' 
       text-5xl top-1/3 md:top-0
       md:text-7xl md:px-0 me intro text-center flex justify-center items-center py-0 md:py-[330px] 
       leading-normal px-[5px]' style={{opacity:0}} ref={introRef}>Aashin Mohammed A Z</div>
      </MouseParallax>

     </div>
     
    <About />
    <Skills />
    <Projects/>
    <Certificates />
    <Footer/>
   </div>
  )
}
export default App
