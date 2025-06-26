import React from 'react'
import web from '../assets/weblink.svg'
const Projects = () => {
  return (
    <div className='h-screen w-screen'>
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



            <div className='md:w-[60%] items-center justify-center mx-auto text-white absolute top-[50%] z-20' >
                <button className='md:w-1/2 w-[90%] rounded-2xl mx-5 h-[25dvh] group box  flex flex-col  items-center gap-5 border-transparent py-[20px] text-2xl normText  ' 
                onClick={{}}
                >
                <p className='md:opacity-0 text-3xl md:text-2xl  transition-all duration-300 group-hover:opacity-100'>title</p>
                
                </button>

            
            
            </div>
        </div>
    </div>
  )
}

export default Projects