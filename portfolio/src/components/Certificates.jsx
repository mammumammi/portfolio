import React, { useEffect, useRef } from 'react'
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

    const mobileInternRef = useRef('');

    const imgList =['https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769940/DSAPlacements_exczwy.jpg','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769941/g1_vgseje.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769941/g2_mmyxrg.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769942/g4_rfity5.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769942/g5_v2cn0d.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769942/g3_m9ujuo.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769943/g7_bmylxz.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769943/g6_cbmsre.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769944/g9_y80hk6.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769944/g8_tkfvtd.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769946/ibm1_jorscn.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769946/ibm3_vkrwc2.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769947/ibm2_rv1fbu.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769949/nptel_t8dob2.png'];

    const intList = ['https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769946/ibm3_vkrwc2.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1755062988/Screenshot_2025-08-13_at_10.59.37_AM_xbebcv.png']

    const tl = gsap.timeline();
    useEffect( ()=> {

        innerWidth > 768 ? 
        tl.to('.internships',{
            y:-5,
            opacity:1,
            duration:2,
            scrollTrigger:{
                trigger:'.internships',
                start:'40% 90%',
                end:'80% 100%',
                
            }
        })
        : tl.to('.internships',{
            y:-5,
            opacity:1,
            duration:1,
            scrollTrigger:{
                trigger:'.internships',
                start:' 80% 60%',
                end: '100% 60%',
                scrub:0.9,
            }
        }) 
        const mt = gsap.timeline();

        innerWidth < 768 ? mt.to(mobileInternRef.current, {
            x: "-100%",
            duration: 10,
            ease: "none",
            repeat: -1, // keeps it looping
          }).set(mobileInternRef.current,{
            x:"50%"
          })
        : null

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
                start:' 90% 60%',
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
    <section className=' py-[50px]'>
        <div className='internships flex flex-col space-y-3 my-[50px] opacity-0 '>
            <header className='me text-4xl md:text-8xl text-white text-center w-full'>Internships</header>
            <div className='overflow-x-scroll w-[100vw] scrollbar-hide'>

            <div className='flex flex-row items-center justify-center space-x-10  'ref={mobileInternRef} >
            {intList.map( (item,index) => (

            <div key={index} className='shrink-0 md:w-[400px] w-[300px] h-[250px] p-5 border-[rgba(228,228,228,0.5)] border-1  rounded-2xl md:h-[300px]' >
                    <img src={item} alt="" className='object-contain w-full h-full' />
            </div>
            ))}
            </div>


            </div>
        </div>
        <div className='certsection opacity-0 '>

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
        </div>
    </section>
  )
}

export default Certificates