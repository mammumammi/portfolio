import React from 'react'
import web from '../assets/weblink.svg'
import apple from '../assets/apple.svg';
import brainwave from '../assets/brainwave-symbol.svg';
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

  return (
    <div className='h-full w-screen '>
        <div className='me md:text-8xl text-6xl flex items-center justify-center py-[50px]'>Projects</div>
        <div className='relative  h-[200vh] md:h-auto '>
            
        
            <video src="https://res.cloudinary.com/ddbkg48oy/video/upload/so_0,eo_33/v1750918004/Screen_Recording_2025-06-26_at_11.35.26_AM_w10fcv.mov" autoPlay muted playsInline loop className='w-full items-center rounded-[100px] brightness-50 ' />
            
            <div className='absolute top-[8%]  flex items-center '>
              <div className=' flex items-center flex-col gap-y-5 normText '>
                <p className=' md:text-4xl text-3xl '>Iphone 15 Pro Website</p>
                <p className='w-[60dvw] text-center'>A mock website that features the Iphone 15 Pro and Iphone 15 Pro Max.A high perfomance website that features snappy and modern animations </p>
                <a href="https://iphonefifteen.netlify.app/">website link <img src={web} className='' alt="" /></a>
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