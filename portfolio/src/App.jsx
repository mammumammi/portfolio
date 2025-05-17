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
gsap.registerPlugin(ScrollTrigger)
const App = () => {

  useGSAP( ()=>{

    
  const tl = gsap.timeline({
    
  });

gsap.fromTo(".intro",{
  opacity:0,
  y:20,
  scale:0.95
},
{
opacity:1,
y:0,
delay:1.3,
duration:1.5,
scale:1
})

  
  })
    


  
  return(
    <div>
    
     <Navbar className='z-10 h-[10vh] ' />
     <div className=' w-full h-[90vh] flex justify-center items-center overflow-hidden z-10'>
     
      <MouseParallax lerpEase={0.0025} strength={0.07}  disableXAxis={true} disableZAxis={true}>

       <div className=' md:text-7xl md:px-0 me intro text-center flex justify-center items-center  md:py-[330px] text-6xl 
       leading-normal px-[5px]'>Aashin Mohammed A Z</div>
      </MouseParallax>

     </div>
     
    <About />
    <Skills />
   </div>
  )
}
export default App
