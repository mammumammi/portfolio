import gsap from 'gsap'
import React from 'react'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP);
const Navbar = () => {
    useGSAP( ()=> {
        gsap.fromTo(".nav",{
            y:-20,
            opacity:0
        },
    {
        y:0,
        opacity:1,
        delay:1.5,
        duration:0.8
    })
    })
  return (
    <div className=' mt-2 py-2 flex justify-center items-center fixed z-50 bgcolor left-1/2 transform -translate-x-1/2 navbg px-5 nav rounded-3xl text-md' style={{
        backgroundColor: "rgba(24,19,53,0.25)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "0.5px solid #190e2d"
      }} >
        <nav className='flex md:space-x-18 space-x-5  text-[15px] md:text-[17px]'> 
            <div className=''>About</div>
            <div>Projects</div>
            <div>Resume</div>
        </nav>
    </div>
  )
}

export default Navbar