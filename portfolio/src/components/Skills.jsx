import React, { useEffect ,useRef} from 'react'
import Line from './line'
import { skillpng } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { useInView } from 'react-intersection-observer'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {

    const circleRef = useRef(null);
    const radius=300;
    const numImages=skillpng.length;

    useEffect( ()=>{
        const circle = circleRef.current;
        if (circle){
            const listItems = circle.querySelectorAll('li');
            const angleIncrement=(2*Math.PI)/numImages;

            listItems.forEach( (item,index)=> {
                const angle = index*angleIncrement;
                const x = radius * Math.cos(angle);
                const y = radius* Math.sin(angle);
                item.style.left = `calc(50% + ${x}px - 30px)`
                item.style.top = `calc(50% + ${y}px - 30px)`
            })

            
        }
    },[numImages,radius,skillpng]);

    const skillRef = useRef(null);
    
    useGSAP( ()=> {
        gsap.to(skillRef.current,
    {
        opacity:1,
        rotation:360,
        scrollTrigger:{
            trigger:skillRef.current,
            start:'top bottom',
            toggleActions:'play pause resume reset',
            scrub:false,


        },
        duration: 20,
        repeat:-1,
        ease:'sine',
        transformOrigin:'50% 50%'

    })
    

    gsap.to('.icon',
        {
            opacity:1,
            rotation:-360,
            scrollTrigger:{
                trigger:skillRef.current,
                start:'top bottom',
                toggleActions:'play pause resume reset',
                scrub:false,
    
    
            },
            duration: 20,
            repeat:-1,
            ease:'sine'
        })
    },{dependencies: [] ,skillRef})
        
  return (
    <section className='relative h-[100vh]'>
        <div className='me text-9xl w-full h-auto flex items-center justify-center m-auto '>Skills</div>
        <div className='skillpage normText mt-50  md:flex justify-center items-center ml-[1cm]  hidden md:visible transform origin-center' ref={skillRef} >
            <ul ref={circleRef} className='relative w-[300px] h-[300px]'>
                {skillpng.map((each,index) => 
                (
                    <li key={each.id} className='absolute w-[60px] h-[60px]' 
                    style={{transform: `translate(-50% ,-50%)`}} >
                        <div>
                            <img src={each.icon} alt={each.title} className='icon w-full h-full glex items-center justify-center rounded-xl' width='60px' height='60px' />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Skills