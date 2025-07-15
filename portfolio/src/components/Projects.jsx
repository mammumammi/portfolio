import React, { useEffect, useRef, useState } from 'react'
import web from '../assets/weblink.svg'
import apple from '../assets/apple.svg';
import brainwave from '../assets/brainwave-symbol.svg';
import github from '../assets/github.svg';
import arrow from '../assets/arrow.svg';
import gsap from 'gsap';
import india from '../assets/india.svg';
import smile from '../assets/smile.svg';
import nuGame from '../assets/nu.svg';


import { useGSAP } from '@gsap/react';
const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const stackRef = useRef(null);
  const techRef = useRef(null);
  const movRef = useRef([]);

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
    title:'Code-A-Flag',
    content:'A winning project which uses turtle animation library in python for animating The Indian Flag as part of the competition for Tinkerhub CUCEK chapter,Code-A-Flag contest',
    techStack:['Python','Turtle Library'],
    webLink:'/',
    repo:'https://github.com/mammumammi/Code-A-Flag',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/v1751514834/output_z6varg.mp4',
    logo:india
  },{
    title:'Emotion Tester',
    content:"A totally pointless quest for emotional truth.This project’s sole purpose is to look at your face, guess your mood (probably wrong), and send you off to a webpage that might vaguely match your vibe But why?.Why not?No one needs a mood-guessing web that guessing moods just based on our facial expressions. FEATURES Random attempts at figuring out if you're happy, sad, or just plain annoyed at this whole thing.",
    techStack:['HTML','CSS','JS','React.JS','Tailwind CSS'],
    webLink:'https://hackwatersemotiontester.netlify.app/',
    repo:'https://github.com/mammumammi/Emotion_Tester',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/v1751514541/Screen_Recording_2025-07-03_at_9.17.08_AM_hrnksh.mov',
    logo:smile
  },{
    title:'NuGame',
    content:'NuGameOne is a web-based platform that bridges traditional gaming with Web3 by integrating the Steam API and Coinbase Wallet. Users can connect their Steam accounts to display gaming profiles and stats, while the Coinbase Wallet integration enables secure on-chain transactions and asset management. The site offers a seamless blend of Web2 and Web3 features, providing gamers with a personalized and interactive experience that incorporates blockchain-based rewards and digital collectibles.',
    techStack:['HTML','CSS','JS','React.JS','Tailwind CSS'],
    webLink:'https://iphonefifteen.netlify.app/',
    repo:'https://github.com/mammumammi/NuGame',
    vid:'https://res.cloudinary.com/ddbkg48oy/video/upload/v1751514250/Screen_Recording_2025-07-03_at_9.13.22_AM_hmyvnb.mov',
    logo:nuGame
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

  const [selectedProject, setSelectedProject] = useState(projList[0]);
  const containerRef1 = useRef(null);
  const imgRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const imgRef2 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const handleProjectclick = (item) => {
    setSelectedProject(item);
    setTimeout( () => {
      gsap.set([videoRef.current,techRef.current],{
        opacity:0
      })
      gsap.fromTo([videoRef.current,techRef.current],{
        opacity:0,
        y:80
      },{
        opacity:100,
        y:0,
        duration:1.2,
        ease:'power1.inOut',
        stagger:0.3
      })
    },0)
  }

  useEffect( ()=> {

    
    movRef.current.forEach((el,i) => {
      gsap.set(el,{
        x:i*20
      })
      gsap.to(el,{
        x:"-=1000",
        duration:20,
        ease:"none",
        repeat:-1,
        modifiers:{
          x:gsap.utils.unitize( x=> parseFloat(x) % 1000)
        }
      })
    })

  const AnimateButton = (el,elimg,text) => {
      const shrink = () => {
        gsap.to(el,{
          width:'50px',
          duration:0.3,
          backgroundColor:'white',
          ease:'bounce.in',
        })
        gsap.to(text,{
          autoAlpha:0,
          
          duration:0.1,
          delay:0.1,
          ease:'sine.inOut'
        })
        gsap.to(el,{
          backgroundColor:'transparent',
          duration:0.1,
          delay:0.5,
          ease:'none'
        })
  
        gsap.to(elimg,{
          autoAlpha:1,
          duration:0.3,
          delay:0.2,
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
        
        gsap.to(text,{
          autoAlpha:1,
          color:'black',
          duration:0.1,
          delay:0.3,
          ease:'sine.inOut'
        })

        gsap.to(elimg,{
          autoAlpha:0,
          duration:0.4,
          delay:0.4,
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
    AnimateButton(containerRef1.current,imgRef1.current,textRef1.current),
    AnimateButton(containerRef2.current,imgRef2.current,textRef2.current)


    ]

  return () => cleanups.forEach( (fn) => fn && fn());
  

  },[])


  return (
    <div className='md:h-[125vh] md:max-h-[150vh] h-[160vh] w-screen md:overflow-y-hidden  '>
        <div className='me md:text-8xl text-6xl flex items-center justify-center py-[50px]'>Projects</div>
        <div className='relative  h-[105vh] md:h-auto pt-[70vw] md:pt-0  '>
            
            {selectedProject && <><video src={selectedProject.vid} autoPlay muted playsInline loop className='md:w-full w-[95vw] h-auto
            max-h-[40dvh] md:max-h-none
            ml-[2.5vw] md:ml-0 items-center md:rounded-[100px] rounded-[30px] brightness-50 ' ref={videoRef} /> 
              
            <div className='absolute md:top-[10%] top-[15%] md:h-[50px] md:h-max-[60px] md:py-[10%] flex items-center pt-2 ' ref={techRef}>
              <div className=' flex items-center flex-col gap-y-5 normText pt-[55vw] md:pt-0'>
                <p className=' md:text-4xl text-3xl text-center  '>{selectedProject.title}</p>
                <p className='md:w-[70dvw] px-4 mt-[27dvw] md:mt-auto md:p-0  md:text-center text-center'>{selectedProject.content}</p>
                <div className='flex flex-row gap-x-10'>

                
                <a href={selectedProject.webLink}><div ref={containerRef1} className='md:w-[50px] duration-300   h-[70px] md:h-[45px] rounded-[25px] items-center justify-center group flex relative'>
                    <p className='normText absolute text-3xl  text-transparent flex opacity-0 text-center  mx-auto transition-all textAni'ref={textRef1} >Website</p>
                    <img src={arrow} ref={imgRef1} alt="" className='m-auto invert  h-full p-3 md:p-0 ' />
                    </div></a>
                  <a href={selectedProject.repo}><div ref={containerRef2} className='md:w-[50px] duration-300   h-[80px] md:h-[45px] rounded-[25px] items-center justify-center group flex relative'>
                    <p className='normText absolute text-3xl  text-transparent
                    flex opacity-0 text-center  mx-auto transition-all textAni ' ref={textRef2}>Github</p>
                    <img src={github} ref={imgRef2} alt="" className='m-auto invert  h-full p-3 md:p-0 ' />
                    </div></a>
               
                </div>
                <p className='w-[80dvw] text-center text-4xl'>Tech Stack</p>
                <div className='flex justify-center md:w-screen flex-row space-x-4 space-y-4  w-[80vw] mx-[10vw] md:mx-0 flex-wrap '>
                {selectedProject.techStack.map( (tech,idx) => (
                  <p key={idx} >{tech}</p>
                ))}
                </div>
              </div>
            </div>
            </>
            }
            
          



            <div className='md:w-full   text-white absolute md:top-[65%] md:left-0 top-[0%] left-[7.5vw] z-20  ' >
              <div className='md:w-[70vw] w-[85vw]   md:m-auto rounded-3xl  overflow-x-auto gap-6 px-4  mx-auto md:h-[30vh] h-[20vh] overflow-y-auto md:overflow-y-none whitespace-nowrap md:space-x-8  md:space-y-0 scrollbar-hide bg-black/75 shadow-[0_0_50px_5px_rgba(255,255,255,0.59)] my-10 relative positioned ' >

              { <span className='align-middle inline-block h-full'></span>}
              
              {[...projList,...projList,...projList].map((item,index) => (
                <>
                <div key={index} className='md:w-[400px] w-[100px]  cursor-pointer md:h-[200px] inline-flex align-middle items-center justify-center h-auto box  md:overflow-hidden relative transiion  rounded-[25px] bg-black group '
                onClick={ ()=> handleProjectclick(item)}
                tabIndex={-1} 
                ref={(el) => (movRef.current[index]=el)}
                >
                <p className='absolute text-center w-full top-[4%] normText text-[16px] opacity-0 group-hover:opacity-100 group-hover:blur-none z-10 font-[1000] duration-300 '>{item.title}</p>
                  
                     
                <img src={item.logo} alt="" className='md:w-[8vw] w-[12vw] md:h-auto flex m-auto items-center justify-center group-hover:blur-[2px] duration-300 relative h-full ' />
            
                
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