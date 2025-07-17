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

    const imgList =['https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769940/DSAPlacements_exczwy.jpg','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769941/g1_vgseje.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769941/g2_mmyxrg.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769942/g4_rfity5.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769942/g5_v2cn0d.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769942/g3_m9ujuo.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769943/g7_bmylxz.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769943/g6_cbmsre.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769944/g9_y80hk6.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769944/g8_tkfvtd.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769946/ibm1_jorscn.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769946/ibm3_vkrwc2.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769947/ibm2_rv1fbu.png','https://res.cloudinary.com/ddbkg48oy/image/upload/v1752769949/nptel_t8dob2.png'];
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