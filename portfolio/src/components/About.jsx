import { useGSAP } from '@gsap/react'
import { motion, stagger } from 'framer-motion'
import { div } from 'framer-motion/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { animateWithGsapTimeline } from './animation'
import { SplitText } from 'gsap/SplitText'



gsap.registerPlugin(ScrollTrigger,SplitText)
const About = () => {
  const [width, setWidth] = useState(window.innerWidth);

  
  useGSAP( ()=>{
    const tl=gsap.timeline();

    width > 768 ?  animateWithGsapTimeline(tl,'.wholepage',{ y:-50,opacity:1,duration:2,stagger:0.5},{start:'30% 80%',end:'50% 80%',scrub:0.6}) :
    animateWithGsapTimeline(tl,'.about',{y:-20,opacity:1,duration:2},{start:'20% 60%',end:'45% 80%',scrub:0.9,})

    
    
    if (width < 768){
    
      animateWithGsapTimeline(tl,'img',{opacity:1,duration:10},{start:'55% 80%',end:'90% 80%',scrub:0.3}) 
    }

    if (width < 768){
    
      animateWithGsapTimeline(tl,'.content',{opacity:1,duration:10},{start:'35% 80%',end:'50% 80%',scrub:0.6}) 
      
    }

    let split=SplitText.create(".content",{
      type:"chars"
    })
    let splitedu=SplitText.create(".edu",{
      type:"lines"
    })
    
    gsap.set(split.chars, { display: "inline" })
    gsap.set(split.lines, { display: "inline" })
    if (width<768){
    gsap.to(split.chars,{
      fontSize:"16px",
      color:"#e1b7ff",
      
      ease:"power4.in",
      duration:5,
      stagger:0.5,
      scrollTrigger:{
        trigger:'.content',
        start:'top 8%',
        end:"200% 70%",
        scrub:0.7,
      
        pin:true,
      }

      
    })
    gsap.to(splitedu.lines,{
      color:"#f1e3fc",
      
      
      ease:"power4.in",
      duration:5,
      stagger:0.5,
      scrollTrigger:{
        trigger:'.edu',
        start:'top 45%',
        end:"100% 45%",
        scrub:0.7,
      
        
      }
    })
    
      animateWithGsapTimeline(tl,'.eduhead',{y:-20,opacity:1,duration:2},{start:'40% 65%',end:'55% 60%',scrub:0.9,})
      animateWithGsapTimeline(tl,'.edu',{y:-20,opacity:1,duration:2},{start:'30% 70%',end:'45% 80%',scrub:0.9,})
    
    
  }
  if (width>768){
    gsap.to(split.chars,{
      color:"#e1b7ff",
      
      ease:"power4.in",
      duration:5,
      stagger:0.03,
      scrollTrigger:{
        trigger:'.content',
        start:'top 80%',
        end:"bottom 70%",
        scrub:0.7,
      }
  })
  gsap.to(splitedu.lines,{
    color:"#f1e3fc",
    
    
    ease:"power4.in",
    duration:5,
    stagger:0.25,
    scrollTrigger:{
      trigger:'.edu',
      start:'top 80%',
      end:"100% 70%",
      scrub:0.7,
    
      
    }
  })
}

  })
 
  

  

  

  return (
    <section className={` wholepage w-full ${width>768 ? 'opacity-0' : ''}`} >
        <div className={`w-full h-auto me md:py-[50px] md:text-9xl text-7xl flex items-center justify-center about ${width<768 ? 'opacity-0' : ''}  `} >About</div>
        <div className='flex flex-col md:flex-row'>

        <div className='md:w-[30vw] w-[70vw] md:top-0  transform translate-x-[20%] translate-y-1/8 md:transform-none md:translate-0'>
        <img src="/public/me.jpg" alt="" className={`px-5 mb-5 w-auto h-auto ${width<768? 'opacity-0':''}`} />
       
        </div>
        
        <div className='md:px-2  md:flex md:flex-1/2 md:-mt-2 flex-col md:flex-row ml-5 md:ml-0 mr-5 '> 

        
        <div className={`content normText text-[15px] md:text-xl my-[50px] md:mr-5 md:w-[40vw] ${width <768 ? 'opacity-0' :''}  mt-15 md:mt-0 pb-15 font-black `}  style={{wordBreak: 'normal', overflowWrap: 'break-word' }} >Diving into the world of coding from 2021,From my 12th standard of starting Python to creating responsive websites on React.<br/>
        <br/>Just A Guy aiming to be Ever-learning.◡̈<br/><br/>I love to create websites that gives immersive experience to the users.I love to learn new technologies and kill myself in the process.<br/><br/>Love to Get my brains plugged out into finding that one semicolumn i missed.<br/><br/>Looking to get myself on Blockchain Technology and Artificial Intelligence because Why not.<br/><br/>Has a thing to create stuffs that i visualise on my mind especially websites!!.
        </div>
        {width < 768 ? <div className={`me text-5xl  eduhead flex items-center justify-center my-12  ${width<768? 'opacity-0':''}`}>Education</div> : null}
        <div className={`normText text-[15px] md:text-xl   md:mr-5 edu ${width<768? 'opacity-0':''}`}  >B.Tech Computer Science And Engineering<br />
        Cochin University Of Science And Technology,Kochi <br />2023-2027<br />CGPA:9.05<br/>Semester 4<br/><br/>Alan Feldman Public School,Thiruvananthapuram<br/>2020<br/>High School Education<br/>93.4%<br/><br/>St Antony's Public School,Kanjirapally,Kottayam<br/>2021-2022<br/>Higher Secondary School Education<br/>89.4%
        </div>
        </div>
        </div>
        <header className='me text-5xl flex items-center justify-center mt-4'>contact me</header>
        <div className='flex flex-row space-x-6 items-center justify-center mt-5 glow'>
            <a className='normText' href='https://wa.link/91lxl1' target='_blank'>Whatsapp</a>
            <a className='normText' href='https://www.linkedin.com/in/aashin-mohammed-a-z-9b06b7273' target='_blank'>LinkedIn</a>
            <a className='normText' href='https://github.com/mammumammi' target='_blank'>Github</a>
            
        </div>
    </section>
  )
}

export default About