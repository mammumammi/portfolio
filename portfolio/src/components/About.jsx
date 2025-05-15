import { div } from 'framer-motion/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

gsap.registerPlugin(ScrollTrigger)
const About = () => {
  const [text]=useTypewriter({
    words:['Diving into the world of coding from 2021,From my 12th standard of starting Python to creating responsive websites on React.I love to create websites that gives immersive experience to the users.I love to learn new technologies and kill myself in the process.\n\nLove to Get my brains plugged out into finding that one semicolumn i missed.\n\nLooking to get myself on Blockchain Technology and Artificial Intelligence because Why not.\n\nHas a thing to create stuffs that i visualise on my mind especially websites!!.'],
    loop: 1,
    typeSpeed:5
  })

  

  

  

  return (
    <section className='about h-[100vh] w-full'>
        <div className='w-full h-auto me py-[50px] text-9xl flex items-center justify-center'>About</div>
        <div className='flex'>

        <div className=' w-[30vw]'>
        <img src="../public/me.jpg" alt="" className='px-5 mb-5 w-auto h-auto' />
       
        </div>
        
        <div className='px-2 flex flex-1/2 -mt-2'> 

        
        <div className='content normText text-1xl mr-5 w-[40vw] whitespace-pre-line'  >{text}<Cursor />
        </div>
        <div className='contentEducation normText text-1xl mr-5 edu'  >B.Tech Computer Science And Engineering<br />
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