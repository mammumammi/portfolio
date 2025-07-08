import React, { useEffect, useRef } from 'react'
import web from '../assets/weblink.svg'
import apple from '../assets/apple.svg';
import brainwave from '../assets/brainwave-symbol.svg';
import github from '../assets/github.svg';
import arrow from '../assets/arrow.svg';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
const Projects = () => {
  const  projList = [{
    title:'Iphone 15 Website',
    content:'This is a landing page concept built for the iPhone 15, inspired by modern Apple product pages. The goal of the project was to recreate a clean, interactive, and visually engaging product showcase using modern web technologies.',
    techStack:['HTML','CSS','JS','React.JS','Tailwind CSS','GSAP'],
    webLink:'https://iphonefifteen.netlify.app/',
    repo:'https://github.com/mammumammi/Apple_website',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/so_0,eo_33/v1750918004/Screen_Recording_2025-06-26_at_11.35.26_AM_w10fcv.mov',
    logo:apple
  },
  {
    title:'Brainwave AI - Modern SaaS Landing Page',
    content:'Brainwave AI is a futuristic SaaS landing page concept designed to showcase an AI-powered product. The website demonstrates cutting-edge UI/UX practices inspired by modern AI tools and startup landing pages.',
    techStack:['HTML','CSS','JS','React.JS','Tailwind CSS'],
    webLink:'https://brainwave1234456.netlify.app/',
    repo:'https://github.com/mammumammi/brainWave_website',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/v1751513859/Screen_Recording_2025-07-03_at_9.04.46_AM_fdhsfo.mov',
    logo:brainwave
  },{
    title:'Iphone 15 Website',
    content:'This is a landing page concept built for the iPhone 15, inspired by modern Apple product pages. The goal of the project was to recreate a clean, interactive, and visually engaging product showcase using modern web technologies.',
    techStack:['HTML','CSS','JS','React.JS','Tailwind CSS','GSAP'],
    webLink:'https://iphonefifteen.netlify.app/',
    repo:'https://github.com/mammumammi/Apple_website',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/so_0,eo_33/v1750918004/Screen_Recording_2025-06-26_at_11.35.26_AM_w10fcv.mov',
    logo:apple
  },{
    title:'Iphone 15 Website',
    content:'This is a landing page concept built for the iPhone 15, inspired by modern Apple product pages. The goal of the project was to recreate a clean, interactive, and visually engaging product showcase using modern web technologies.',
    techStack:['HTML','CSS','JS','React.JS','Tailwind CSS','GSAP'],
    webLink:'https://iphonefifteen.netlify.app/',
    repo:'https://github.com/mammumammi/Apple_website',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/so_0,eo_33/v1750918004/Screen_Recording_2025-06-26_at_11.35.26_AM_w10fcv.mov',
    logo:apple
  },{
    title:'Iphone 15 Website',
    content:'This is a landing page concept built for the iPhone 15, inspired by modern Apple product pages. The goal of the project was to recreate a clean, interactive, and visually engaging product showcase using modern web technologies.',
    techStack:['HTML','CSS','JS','React.JS','Tailwind CSS','GSAP'],
    webLink:'https://iphonefifteen.netlify.app/',
    repo:'https://github.com/mammumammi/Apple_website',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/so_0,eo_33/v1750918004/Screen_Recording_2025-06-26_at_11.35.26_AM_w10fcv.mov',
    logo:apple
  },{
    title:'Iphone 15 Website',
    content:'This is a landing page concept built for the iPhone 15, inspired by modern Apple product pages. The goal of the project was to recreate a clean, interactive, and visually engaging product showcase using modern web technologies.',
    techStack:['HTML','CSS','JS','React.JS','Tailwind CSS','GSAP'],
    webLink:'https://iphonefifteen.netlify.app/',
    repo:'https://github.com/mammumammi/Apple_website',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/so_0,eo_33/v1750918004/Screen_Recording_2025-06-26_at_11.35.26_AM_w10fcv.mov',
    logo:apple
  },
];

  const containerRef1 = useRef(null);
  const imgRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const imgRef2 = useRef(null);

  useEffect( ()=> {
  const AnimateButton = (el,elimg) => {
      const shrink = () => {
        gsap.to(el,{
          width:'50px',
          duration:0.3,
          backgroundColor:'transparent',
          ease:'bounce.in',
        })
  
        gsap.to(elimg,{
          autoAlpha:1,
          duration:0.3,
          ease:'none'
        })
      }
  
      const expand = () => {
        gsap.to(el,{
          width:'150px',
          duration:0.3,
          backgroundColor:'white',
          ease:'back.in'
        })
  
        gsap.to(elimg,{
          autoAlpha:0,
          duration:0.4,
          delay:0.2,
          ease:'expo'
        })
      }
  
      el.addEventListener('mouseenter',expand);
      el.addEventListener('mouseleave',shrink);
    return () => {
      el.removeEventListener('mouseenter',expand);
      el.removeEventListener('mouseleave',shrink);
    }
  }
  

  const cleanups = [
    AnimateButton(containerRef1.current,imgRef1.current),
    AnimateButton(containerRef2.current,imgRef2.current)


    ]

  return () => cleanups.forEach( (fn) => fn && fn());
  

  },[])


  return (
    <div className='h-full w-screen '>
        <div className='me md:text-8xl text-6xl flex items-center justify-center py-[50px]'>Projects</div>
        <div className='relative  h-[200vh] md:h-auto '>
            
        
            <video src="https://res.cloudinary.com/ddbkg48oy/video/upload/so_0,eo_33/v1750918004/Screen_Recording_2025-06-26_at_11.35.26_AM_w10fcv.mov" autoPlay muted playsInline loop className='w-full items-center rounded-[100px] brightness-50 ' />
            
            <div className='absolute top-[8%]  flex items-center '>
              <div className=' flex items-center flex-col gap-y-5 normText '>
                <p className=' md:text-4xl text-3xl '>Iphone 15 Pro Website</p>
                <p className='w-[60dvw] text-center'>A mock website that features the Iphone 15 Pro and Iphone 15 Pro Max.A high perfomance website that features snappy and modern animations </p>
                <div className='flex flex-row gap-x-5'>

                
                <a href=""><div ref={containerRef1} className='md:w-[50px] duration-300   h-[80px] md:h-[50px] rounded-[25px] items-center justify-center group flex relative'>
                    <p className='normText absolute text-3xl  text-black hidden group-hover:flex duration-300 delay-[2000] text-center  mx-auto transition-all'>Website</p>
                    <img src={arrow} ref={imgRef1} alt="" className='m-auto invert  h-full p-3 md:p-2 ' />
                    </div></a>
                  <a href=""><div ref={containerRef2} className='md:w-[50px] duration-300   h-[80px] md:h-[50px] rounded-[25px] items-center justify-center group flex relative'>
                    <p className='normText absolute text-3xl  text-black hidden group-hover:flex duration-300 delay-[2000] text-center  mx-auto transition-all'>Github</p>
                    <img src={github} ref={imgRef2} alt="" className='m-auto invert  h-full p-3 md:p-2 ' />
                    </div></a>
               
                </div>
                <p className='w-[80dvw] text-center text-4xl'>Tech Stack</p>
                <div className='flex justify-center w-screen flex-row space-x-5 text-center'>
                <p >ReactJS</p>
                <p >GSAP</p>
                <p >HTML</p>
                <p >CSS</p>
                <p >JS</p>
                </div>
              </div>
            </div>



            <div className='md:w-full  text-white absolute md:top-[65%] md:left-0 top-[40%] left-[10vw] z-20  md:overflow-hidden' >
              <div className='md:w-[70vw]  md:mx-auto  overflow-x-auto gap-6 px-4 w-[80vw] mx-auto md:h-auto h-[100vh] overflow-y-auto md:overflow-y-none whitespace-nowrap md:space-x-8 space-y-8 scrollbar-hide '>

              
              {[...projList].map((item,index) => (
                <>
                <div key={index} className='md:w-[400px]  md:inline-block cursor-pointer md:h-[200px] h-[200px] box  overflow-hidden relative transiion  rounded-[25px] bg-black group' >
                <p className='absolute text-center w-full top-[4%] normText text-[16px] opacity-0 group-hover:opacity-100 group-hover:blur-none z-10 font-[1000] duration-300 '>{item.title}</p>
                  
                     
                <img src={item.logo} alt="" className='w-[8vw] flex m-auto items-center justify-center group-hover:blur-[2px] duration-300 relative h-full ' />
            
                
        </div>
        </>
              ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects