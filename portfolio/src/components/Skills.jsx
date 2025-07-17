import React, { useEffect, useRef, useState } from 'react';
import { skillpng } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { delay } from 'motion';
import dot from '../assets/dot.svg';
import { div } from 'framer-motion/client';
import { animateWithGsapTimeline } from './animation';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const circleRef = useRef(null);
  const skillRef = useRef(null);
  const time =2;
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
        toggleActions: 'play none resume none',
        
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
        toggleActions: 'play none resume none',
        
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
     

    const tmain = gsap.timeline();
    width > 768 ?  animateWithGsapTimeline(tmain,'.skillsection',{ y:-50,opacity:1,duration:2,stagger:0.5},{start:'30% 80%',end:'50% 80%',scrub:0.6}) :
    animateWithGsapTimeline(tmain,'.skillsection',{y:-20,opacity:1,duration:2},{start:'top 80%',end:'45% 80%',scrub:0.9})
    

    gsap.to('.mainrowmain',{
      opacity:1,
      scrollTrigger:{
        trigger:'.maintitle',
        start:'top 70%',
        toggleActions:'play pause play reverse',
        
        
      }
    })

    const tl1= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'top 15%',
      end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const t2= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',
      end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const t3= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',
      end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const t4= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',
      end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const t5= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',
      end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const t6= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',
      end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const tm= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',
      end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const mtl= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',
      end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const mt2= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const mt3= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const mt4= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',end:'80% 20%',
      toggleActions:'play play reverse play',
      
      
    },repeat:-1,});
    const mt5= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',end:'80% 20%',
      toggleActions:'play play play reverse',
      
      
    },epeat:-1,});
    const mt6= gsap.timeline({scrollTrigger:{
      trigger:'.maintitle',
      start:'60% 15%',end:'80% 20%',
      toggleActions:'play play play reverse',
      
      
    },repeat:-1,});
    
    gsap.set('.row1',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.row2',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.row3',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.row4',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.row5',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.row6',{
      color:'#9b9b9bb3',
      xPercent:-730

    })

    gsap.set('.mrow1',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.mrow2',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.mrow3',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.mrow4',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.mrow5',{
      color:'#9b9b9bb3',
      xPercent:-730

    })
    gsap.set('.mrow6',{
      color:'#9b9b9bb3',
      xPercent:-730

    })

    tl1.set('.row1',{
      
      xPercent:-730,
      
      
    })
    .to('.row1',{
      
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
    })
.to('.row1',{
      color:'#ffc6fe',
      duration:8,
    },2).to('.row1',{
      color:'#9b9b9bb3',
      duration:8,
    },13)

    
    t2.set('.row2',{
      
      xPercent:-730,
      
      
    })
    .to('.row2',{
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
      
    }).to('.row2',{
      color:'#ffc6fe',
      duration:8,
    },3).to('.row2',{
      color:'#9b9b9bb3',
      duration:8,
    },14)

    t3.set('.row3',{
      
      xPercent:-730,
      
      
    })
    .to('.row3',{
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
      
    }).to('.row3',{
      color:'#ffc6fe',
      duration:8,
    },3).to('.row3',{
      color:'#9b9b9bb3',
      duration:8,
    },15)

    t4.fromTo('.row4',{
      
      xPercent:-730,
      
      
      color:'#9b9b9bb3'
    },{
      
      
      xPercent:-130,
      ease:"linear",
     
      duration:30,
      
    }).to('.row4',{
      color:'#ffc6fe',
      duration:8,
    },4).to('.row4',{
      color:'#9b9b9bb3',
      duration:8,
    },16)

    t5.set('.row5',{
      
      xPercent:-730,
      
      
    })
    .to('.row5',{
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
      
    }).to('.row5',{
      color:'#ffc6fe',
      duration:8,
    },5).to('.row5',{
      color:'#9b9b9bb3',
      duration:8,
    },17)

    t6.set('.row6',{
      
      xPercent:-730,
      
      
    })
    .to('.row6',{
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
      
    }).to('.row6',{
      color:'#ffc6fe',
      duration:8,
    },6).to('.row6',{
      color:'#9b9b9bb3',
      duration:8,
    },18)

    mtl.set('.mrow1',{
      
      xPercent:-730,
      
      
    })
    .to('.mrow1',{
      
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
    }).to('.mrow1',{
      color:'#ffc6fe',
      duration:8,
    },7).to('.mrow1',{
      color:'#9b9b9bb3',
      duration:8,
    },19)
    mt2.set('.mrow2',{
      
      xPercent:-730,
      
      
    })
    .to('.mrow2',{
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
      
    }).to('.mrow2',{
      color:'#ffc6fe',
      duration:8,
    },8).to('.mrow2',{
      color:'#9b9b9bb3',
      duration:8,
    },20)

    mt3.set('.mrow3',{
      
      xPercent:-730,
      
      
    })
    .to('.mrow3',{
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
      
    }).to('.mrow3',{
      color:'#ffc6fe',
      duration:8,
    },9).to('.mrow3',{
      color:'#9b9b9bb3',
      duration:8,
    },21)

    mt4.fromTo('.mrow4',{
      
      xPercent:-730,
      
      
      color:'#9b9b9bb3'
    },{
      
      
      xPercent:-130,
      ease:"linear",
     
      duration:30,
      
    }).to('.mrow4',{
      color:'#ffc6fe',
      duration:8,
    },10).to('.mrow4',{
      color:'#9b9b9bb3',
      duration:8,
    },22)

    mt5.set('.mrow5',{
      
      xPercent:-730,
      
      
    })
    .to('.mrow5',{
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
      
    }).to('.mrow5',{
      color:'#9b9b9bb3',
      duration:8,
    },11).to('.mrow5',{
      color:'#ffc6fe',
      duration:8,
    },23)

    mt6.set('.mrow6',{
      
      xPercent:-730,
      
      
    })
    .to('.mrow6',{
      
      
      xPercent:-130,
      ease:"linear",
      duration:30,
      
    }).to('.mrow6',{
      color:'#9b9b9bb3',
      duration:8,
    },12).to('.mrow6',{
      color:'#ffc6fe',
      duration:8,
    },24)


  })

  return (
    <section className="relative overflow-hidden opacity-0 skillsection md:mt-15 ">
      <div className='  md:h-[100vh]  overflow-hidden'>
      {width > 768 ? <div className="top-[40vh] me text-[120px] w-full h-auto flex items-center justify-center m-auto -ml-2 title">
        Skills
      </div>  : <div className='me text-[70px] flex items-center mx-auto justify-center mt-[50px] maintitle' >SKilLs</div>}
      
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
      {width < 768 ? <div className='opacity-0 overflow-hidden -mt-[80px] mainrowmain'><div className=' text-[90px] -space-y-3 h-[100dvh] overflow-none mainrow  transform ' style={{
        transform:'rotateZ(-5deg) rotateY(45deg) rotateX(45deg)',
        transformStyle:'preserve-3d'
      }}>
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
        <div className='flex flex-row mrow1 '>
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
        
        
        <div className='flex flex-row mrow2'>
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
        <div className='flex flex-row mrow3'>
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
        <div className='flex flex-row mrow4'>
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
        <div className='flex flex-row mrow5'>
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
        <div className='flex flex-row mrow6'>
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
        
      </div></div> : <div></div>}
    </section>
  );
};

export default Skills;
