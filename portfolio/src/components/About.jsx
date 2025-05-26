import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { animateWithGsapTimeline } from './animation'

gsap.registerPlugin(ScrollTrigger)
const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useGSAP( ()=>{
    const t1=gsap.timeline({});

    animateWithGsapTimeline(t1,'.about',{opacity:1,duration:2},{start:'15% 60%',end:'50% 80%',scrub:0.9,markers:true})
  })
 
  

  

  

  return (
    <section className='about  w-full' style={{opacity:0}}>
        <div className='w-full h-auto me py-[50px] md:text-9xl text-7xl flex items-center justify-center '>About</div>
        <div className='flex flex-col md:flex-row'>

        <div className=' md:w-[30vw] w-[70vw] md:top-0  transform translate-x-[20%] translate-y-1/8 md:transform-none md:translate-0'>
        <img src="../public/me.jpg" alt="" className='px-5 mb-5 w-auto h-auto' />
       
        </div>
        
        <div className='md:px-2  md:flex md:flex-1/2 md:-mt-2 flex-col md:flex-row ml-5 md:ml-0 mr-5 mt-[22.5vh]'> 

        
        <div className='content normText text-1xl md:mr-5 md:w-[40vw] '   >Diving into the world of coding from 2021,From my 12th standard of starting Python to creating responsive websites on React.<br/>
        <br/>Just A Guy aiming to be Ever-learning.◡̈<br/><br/>I love to create websites that gives immersive experience to the users.I love to learn new technologies and kill myself in the process.<br/><br/>Love to Get my brains plugged out into finding that one semicolumn i missed.<br/><br/>Looking to get myself on Blockchain Technology and Artificial Intelligence because Why not.<br/><br/>Has a thing to create stuffs that i visualise on my mind especially websites!!.
        </div>
        {width < 768 ? <div className='me text-5xl flex items-center justify-center my-12'>Education</div> : null}
        <div className=' normText text-1xl md:mr-5 edu'  >B.Tech Computer Science And Engineering<br />
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