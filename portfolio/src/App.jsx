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
import { time } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const introRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  
  const [showPreloader, setShowPreloader] = useState(true);
  const videoRef = useRef(null);
  const mainContentRef = useRef(null);
  const preloaderContainerRef = useRef(null);

  const singleGmTextRef = useRef(null);
  const [windowLoaded, setWindowLoaded] = useState(false);
  const MIN_PRELOADER_DISPLAY_TIME = 1500;
  const MAX_PRELOADER_DISPLAY_TIME = 8000;
  const loadStartTime = useRef(Date.now());

  useEffect( ()=>{
    gsap.set(mainContentRef.current,{autoAlpha:0});

    let windowLoadFired  = false;

    const handleWindowLoad = () => {
      console.log("window fully loaded");
      windowLoadFired = true;
      fadeOutPreloader();
    }

    const handleVideoEnded = () => {
      if (width > 768){
        fadeOutPreloader();
      }
    };

    const fadeOutPreloader = () => {

      if (windowLoadFired && window.removeEventListener){
        window.removeEventListener('load',handleWindowLoad);
      }

      const timeElapsed = Date.now() - loadStartTime.current;
      const remainingDelay  = MIN_PRELOADER_DISPLAY_TIME - timeElapsed;
      const finalDelay = remainingDelay > 0 ? remainingDelay : 0;

      setTimeout( ()=>{

        if (preloaderContainerRef.current){
          gsap.to(preloaderContainerRef.current,{
            opacity:0,
            duration:0.8,
            ease:'power2.out',
            onComplete : () => {
              setShowPreloader(false);
              if (mainContentRef.current){
                gsap.fromTo(mainContentRef.current,{
                  autoAlpha:0,y:50
                },{
                  autoAlpha:1,y:0,duration:1.2,ease:'power2.out'
                })
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
              }
              
            }
          })
        }
        else {
          setShowPreloader(false);
          if (mainContentRef.current){
            gsap.fromTo(mainContentRef.current,{
              autoAlpha:0,y:50
            },{
              autoAlpha:1,y:0,duration:1.2,ease:'power2.out'
            })
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
          }
        }
      },finalDelay)

      
    }

    const setupMobileGmAnimation = () => {
      if (width < 768 && singleGmTextRef.current){
        const gmElement = singleGmTextRef.current;
        gsap.set(gmElement,{opacity:0,scale:0.8});

        gsap.to(gmElement,{
          opacity:1,
          scale:1,
          duration:1.5,
          ease:'power1.inOut',
          repeat:-1,
          yoyo:true,
          delay:0.5
        })
      }
    }
  

    window.addEventListener('load',handleWindowLoad);
    
    if (width > 768) {
      if (videoRef.current){
        videoRef.current.muted = true;
        videoRef.current.playInline = true;
        videoRef.current.play().catch(error => {
          console.error(error);
        })
        videoRef.current.addEventListener('ended',handleVideoEnded);
      }

    }
    else{
      setupMobileGmAnimation();

      setTimeout( ()=> {
        if (!windowLoadFired) {
          fadeOutPreloader();
        }
      },MAX_PRELOADER_DISPLAY_TIME)
    }

    return () => {
      window.removeEventListener('load',handleWindowLoad);
      if (width > 768 && videoRef.current){
        videoRef.current.removeEventListener('ended',handleVideoEnded);
      }
    }

  },[width])

  useGSAP( ()=>{
    
    
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
    <>
    {showPreloader &&  <div className='preloader-overlay flex items-center justify-center fixed top-0 left-0 w-[100vw] h-[100vh] bg-black z-[99]' ref={preloaderContainerRef}>
      {width > 768 ? <video src="https://res.cloudinary.com/ddbkg48oy/video/upload/v1752773747/vid_dvdsee.mp4" className='w-[160px] h-[160px] object-contain' ref={videoRef} autoPlay loop={true}></video> : <p className='font-[CDTSlanted] text-8xl text-center opacity-0' ref={singleGmTextRef}>Gm</p>}
      
    </div>}

    
    
    <div className='overflow-x-hidden '
    ref={mainContentRef}
    >
    
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
   </>
  )
}
export default App
