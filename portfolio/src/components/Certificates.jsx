import React, { useEffect } from 'react'
import ibm1 from '../assets/ibm1.png';
import ibm2 from '../assets/ibm2.png';
import ibm3 from '../assets/ibm3.png';
import dsa from '../assets/DSAPlacements.jpg';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g3.png';
import g5 from '../assets/g4.png';
import g6 from '../assets/g6.png';
import g7 from '../assets/g7.png';
import g8 from '../assets/g8.png';
import nptel from '../assets/nptel.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { animateWithGsapTimeline } from './animation';

const Certificates = () => {

    const imgList =[ibm1,ibm2,ibm3,dsa,g1,g2,g3,g4,g5,g6,g7,g8,nptel];
    const tl = gsap.timeline();
    useEffect( ()=> {

        

        innerWidth > 768 ? 
        tl.to('.certsection',{
            y:-5,
            opacity:1,
            duration:2,
            scrollTrigger:{
                trigger:'.certsection',
                start:'40% 90%',
                end:'80% 100%',
                
            }
        })
        : tl.to('.certsection',{
            y:-5,
            opacity:1,
            duration:1,
            scrollTrigger:{
                trigger:'.certsection',
                start:' 80% 60%',
                end: '100% 60%',
                scrub:0.9,
            }
        }) 

        const tm = gsap.timeline();

        tm.to('.carousel',{
            x:'-4000',
            duration:90,
            ease:'none',
            repeat:-1
        }).set('.carousel',{
            x:'4000'
        })
    },[])

  return (
    <section className='certsection opacity-0 py-[50px]'>
        <header className='me text-white text-center w-screen  text-4xl md:text-8xl '>CeRtiFicateS</header>
        <div className='md:my-[50px] mt-[50px] w-[100vw] mx-auto overflow-x-scroll scrollbar-hide '>
            <div className=' carousel flex gap-10 '>
            
            {[...imgList.concat(imgList),...imgList.concat(imgList)].map( (item,index) => (
                <div key={index} className='shrink-0 md:w-[400px] w-[300px] h-[250px] p-5 border-[rgba(228,228,228,0.5)] border-1  rounded-2xl md:h-[300px]'>
                    <img src={item} alt="" className='object-contain w-full h-full' />
                </div>
            ))}
            </div>
            

        </div>
    </section>
  )
}

export default Certificates