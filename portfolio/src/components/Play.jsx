import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, } from 'gsap/all'
import React from 'react'

import { animateWithGsapTimeline } from './animation'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger,SplitText)
const Play = () => {
    useGSAP( ()=>{
        const tl=gsap.timeline();
        
      
    })
    

  return (
    <div className='h-[200vh] w-auto'>
        <div className='playcontent normText text-1xl md:mr-5 md:w-[40vw]  mt-9'   >Diving into the world of coding from 2021,From my 12th standard of starting Python to creating responsive websites on React.<br/>
        <br/>Just A Guy aiming to be Ever-learning.◡̈<br/><br/>I love to create websites that gives immersive experience to the users.I love to learn new technologies and kill myself in the process.<br/><br/>Love to Get my brains plugged out into finding that one semicolumn i missed.<br/><br/>Looking to get myself on Blockchain Technology and Artificial Intelligence because Why not.<br/><br/>Has a thing to create stuffs that i visualise on my mind especially websites!!.
        </div>
    </div>
  )
}

export default Play