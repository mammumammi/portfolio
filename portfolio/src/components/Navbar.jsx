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
        delay:2.5,
        duration:0.8
    })
    })
  return (
    <div className='w-full py-5 flex justify-center items-center'>
        <nav className='flex space-x-18 nav sd:text-5'> 
            <div className=''>About</div>
            <div>Projects</div>
            <div>Resume</div>
        </nav>
    </div>
  )
}

export default Navbar