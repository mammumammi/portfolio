import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  delay:1.3,
  duration:1.5,
  scale:1
  })
  
  width > 768 ? animateWithGsapTimeline(tl,introRef.current,{y:10,opacity:0,scale:1.5,duration:2,},{
            start:'85% 60%',
            end:'130% 80%',scrub:0.6}): animateWithGsapTimeline(tl,introRef.current,{y:10,opacity:0,duration:2,scale:1.5},{start:'100% 30%',end:'150% 70%',scrub:0.9,markers:true}) ;
  })
  
    


  
  return(
    <div>
    
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
   </div>
  )
}
export default App
