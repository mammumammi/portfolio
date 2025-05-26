import { useEffect, useState } from 'react'
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
  const [width, setWidth] = useState(window.innerWidth);
  
  useGSAP( ()=>{

    
  const tl = gsap.timeline({ 
    
  });

  tl.to(".intro",
  {
  opacity:1,
  y:30,
  delay:1.3,
  duration:1.5,
  scale:1
  })
  
  width > 768 ? animateWithGsapTimeline(tl,'.intro',{y:10,opacity:0,scale:1.5,duration:2,},{
            start:'85% 60%',
            end:'130% 80%',scrub:0.9,}): animateWithGsapTimeline(tl,'.intro',{y:10,opacity:0,duration:2,scale:1.5},{start:'bottom 50%',end:'180% 90%',scrub:0.9}) ;

  
  })
    


  
  return(
    <div>
    
     <Navbar />
     <div className=' w-full h-[90vh] flex justify-center items-center overflow-hidden z-10'>
     
      <MouseParallax lerpEase={0.0025} strength={0.07}  disableXAxis={true} disableZAxis={true}>

       <div className=' 
       text-5xl top-1/2 md:top-0
       md:text-7xl md:px-0 me intro text-center flex justify-center items-center  md:py-[330px] 
       leading-normal px-[5px]' style={{opacity:0}}>Aashin Mohammed A Z</div>
      </MouseParallax>

     </div>
     
    <About />
    <Skills />
   </div>
  )
}
export default App
