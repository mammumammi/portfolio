import React, { useEffect, useRef, useState } from 'react';
import { skillpng } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { delay } from 'motion';
import dot from '../assets/dot.svg';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const circleRef = useRef(null);
  const skillRef = useRef(null);
  const [radius, setRadius] = useState(160);

  // Responsive radius update
  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth > 768 ? 340 : 130);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Arrange icons in circle
  useEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      const listItems = circle.querySelectorAll('li');
      const angleIncrement = (2 * Math.PI) / skillpng.length;

      listItems.forEach((item, index) => {
        const angle = index * angleIncrement;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        item.style.left = `calc(50% + ${x}px - 30px)`;
        item.style.top = `calc(50% + ${y}px - 30px)`;
      });
    }
  }, [radius]);

  // GSAP Animations
  useGSAP(() => {
    // Rotation animations
    gsap.to(skillRef.current, {
      opacity: 1,
      x:0,
      y:0,
      rotation: 360,
      scrollTrigger: {
        trigger: skillRef.current,
        start: 'top 80%',
        toggleActions: 'play pause resume pause',
        
      },
      duration: 40,
      repeat: -1,
      ease: 'linear',
      transformOrigin: 'center center',
    });

    gsap.to('.icon', {
      opacity: 1,
      rotation: -360,
      scrollTrigger: {
        trigger: skillRef.current,
        start: 'top 80%',
        toggleActions: 'play pause resume pause',
        
      },
      duration: 40,
      repeat: -1,
      ease: 'linear',
    });

    const t1 = gsap.timeline({ 
      
      });

    t1.fromTo('.title',{
      autoAlpha:0,
      y:100,
      duration:2,
      delay:2,},{
        autoAlpha:1,
      y:100,
      duration:2,
      delay:2
      }


    )


    // Timeline animation temporarily disabled
    /*
    const t1 = gsap.timeline({ repeat: -1 });

    t1.to('.title', {
      opacity: 0,
      y: 10,
      duration: 2,
    });

    skillpng.forEach((each) => {
      t1.fromTo(
        `#${each.id}`,
        { opacity: 1, y: 0 },
        { opacity: 0, y: 10, duration: 2, ease: 'expo.inOut' }
      );
    });
    */
  }, { scope: skillRef });

  useEffect( ()=> {

    const tl= gsap.timeline({repeat:-1,});
    const t2= gsap.timeline({repeat:-1,});
    const t3= gsap.timeline({repeat:-1,});
    const t4= gsap.timeline({repeat:-1,});
    const t5= gsap.timeline({repeat:-1,});
    const t6= gsap.timeline({repeat:-1,});

    

    tl.set('.row1',{
      
      xPercent:-130,rotateX:45,
      rotateY:45,
      rotateZ:-5,
    })
    .to('.row1',{
      rotateX:45,
      rotateY:45,
      
      xPercent:-30,
      ease:"linear",
      duration:10,
    })

    t2.set('.row2',{
      
      xPercent:-130,rotateX:45,
      rotateY:45,
      rotateZ:-5,
    })
    .to('.row2',{
      rotateX:45,
      rotateY:45,
      rotateZ:-5,
      xPercent:-30,
      ease:"linear",
      duration:10,
      
    })

    t3.set('.row3',{
      
      xPercent:-130,rotateX:45,
      rotateY:45,
      rotateZ:-5,
    })
    .to('.row3',{
      rotateX:45,
      rotateY:45,
      rotateZ:-5,
      xPercent:-30,
      ease:"linear",
      duration:10,
      
    })

    t4.fromTo('.row4',{
      
      xPercent:-130,rotateX:45,
      rotateY:45,
      rotateZ:-5,
      color:'#9b9b9bb3'
    },{
      rotateX:45,
      rotateY:45,
      rotateZ:-5,
      xPercent:-30,
      ease:"linear",
     
      duration:10,
      
    }).to('.row4',{
      color:'#ffc6fe',
      duration:3,
    },2)

    t5.set('.row5',{
      
      xPercent:-130,rotateX:45,
      rotateY:45,
      rotateZ:-5,
    })
    .to('.row5',{
      rotateX:45,
      rotateY:45,
      rotateZ:-5,
      xPercent:-30,
      ease:"linear",
      duration:10,
      
    })

    t6.set('.row6',{
      
      xPercent:-130,rotateX:45,
      rotateY:45,
      rotateZ:-5,
    })
    .to('.row6',{
      rotateX:45,
      rotateY:45,
      rotateZ:-5,
      xPercent:-30,
      ease:"linear",
      duration:10,
      
    })


  })

  return (
    <section className="relative ">
      <div className='  md:h-[100vh]  overflow-hidden'>
      {width > 768 ? <div className="top-[40vh] me text-[120px] w-full h-auto flex items-center justify-center m-auto -ml-2 title">
        Skills
      </div>  : <div className='me text-[70px] flex items-center mx-auto justify-center mt-[100px]' >Skills</div>}
      
      {width > 768 && <>{skillpng.map((each) => (
        <p
          key={each.id}
          id={each.id}
          className="absolute top-[40vh] me text-[120px] w-full h-auto flex items-center justify-center m-auto -ml-2 opacity-0"
        >
          {each.title}
        </p>
      ))}

      <div
        className="  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[600px] md:h-[600px] w-[320px] h-[320px]  z-10 "
        ref={skillRef}
      >
        <div className="skillpage normText md:mt-50 md:flex justify-center items-center ml-[1cm] transform origin-center">
          <ul ref={circleRef} className="relative w-[300px] h-[300px]">
            {skillpng.map((each) => (
              <li
                key={each.id}
                className="absolute w-[70px] h-[70px]"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <img
                  src={each.icon}
                  alt={each.title}
                  className="icon md:w-full md:h-full w-[40px] flex items-center justify-center rounded-xl "
                />
              </li>
            ))}
          </ul>
        </div>
      </div></>}    
      
      </div>
      {width < 768 ? <div className=' text-[70px] -space-y-3 h-[100dvh] overflow-hidden mainrow pt-10'>
        <div className='flex flex-row row1 '>
          <p className='font-[CDTRegular] font-extraLight '>Python</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Java</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Python</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Java</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Python</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Java</p>
          <img src={dot} className='w-[80px]' alt="" />

        </div>
        
        <div className='flex flex-row row2'>
        <p className='font-[CDTRegular] font-extraLight '>C</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>C++</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>C</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>C++</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>C</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>C++</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>C</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>C++</p>
          <img src={dot} className='w-[80px]' alt="" />
        </div>
        <div className='flex flex-row row3'>
        <p className='font-[CDTRegular] font-extraLight '>MySQL</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Solidity</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>MySQL</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Solidity</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>MySQL</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Solidity</p>
          <img src={dot} className='w-[80px]' alt="" />
        </div>
        <div className='flex flex-row row4'>
        <p className='font-[CDTRegular] font-extraLight '>HTML</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>CSS</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>JavaScript</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>HTML</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>CSS</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>JavaScript</p>
          <img src={dot} className='w-[80px]' alt="" />

        </div>
        <div className='flex flex-row row5'>
        <p className='font-[CDTRegular] font-extraLight '>React.JS</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Three.JS</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>React.JS</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Three.JS</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>React.JS</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Three.JS</p>
          <img src={dot} className='w-[80px]' alt="" />
        </div>
        <div className='flex flex-row row6'>
        <p className='font-[CDTRegular] font-extraLight '>Leadership</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Presentation</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Leadership</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Presentation</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Leadership</p>
          <img src={dot} className='w-[80px]' alt="" />
          <p className='font-[CDTRegular] font-extraLight '>Presentation</p>
          <img src={dot} className='w-[80px]' alt="" />
          
        </div>
        
        
      </div> : <div></div>}
    </section>
  );
};

export default Skills;
