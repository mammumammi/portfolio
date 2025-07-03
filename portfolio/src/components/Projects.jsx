import React from 'react'
import web from '../assets/weblink.svg'
import apple from '../assets/apple.jpg';
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
    <div className='h-auto w-screen'>
        <div className='me md:text-8xl text-6xl flex items-center justify-center py-[50px]'>Projects</div>
        <div className='relative '>
            
        
            <video src="https://res.cloudinary.com/ddbkg48oy/video/upload/so_0,eo_33/v1750918004/Screen_Recording_2025-06-26_at_11.35.26_AM_w10fcv.mov" autoPlay muted playsInline loop className='w-full items-center rounded-[100px] brightness-50' />
            
            <div className='absolute top-[8%]  flex items-center'>
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



            <div className='md:w-full mx-auto text-white absolute top-[50%] z-20 md:left-[8%] overflow-hidden' >
              <div className='flex flex-wrap gap-4  overflow-hidden '>

              
              {projList.map((item,index) => (
                <div key={index} className='md:w-[25vw] md:h-[20vh] box hover:blur-[2px] overflow-hidden relative transiion duration-300 rounded-[25px] bg-black' >
                  
                     
                <img src={item.logo} alt="" className='w-full h-full object-contain object-center' />
            
         
        </div>
              ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects