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
    <div className=' mt-2 py-2 flex justify-center items-center fixed z-50 bgcolor left-1/2 transform -translate-x-1/2 navbg px-5 nav rounded-3xl text-md'>
        <nav className='flex md:space-x-18 space-x-5  sd:text-5'> 
            <div className=''>About</div>
            <div>Projects</div>
            <div>Resume</div>
        </nav>
    </div>
  )
}

export default Navbar