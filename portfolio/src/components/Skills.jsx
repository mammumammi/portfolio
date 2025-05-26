import React, { useEffect, useRef, useState } from 'react';
import { skillpng } from '../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { delay } from 'motion';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const circleRef = useRef(null);
  const skillRef = useRef(null);
  const [radius, setRadius] = useState(160);

  // Responsive radius update
  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth > 768 ? 350 : 160);
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

  return (
    <section className="relative h-[100vh] overflow-hidden">
      <div className="top-[40vh] me text-[120px] w-full h-auto flex items-center justify-center m-auto -ml-2 title">
        Skills
      </div>

      {skillpng.map((each) => (
        <p
          key={each.id}
          id={each.id}
          className="absolute top-[40vh] me text-[120px] w-full h-auto flex items-center justify-center m-auto -ml-2 opacity-0"
        >
          {each.title}
        </p>
      ))}

      <div
        className="  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[600px] md:h-[600px] w-[320px] h-[320px]   "
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
                  className="icon w-full h-full flex items-center justify-center rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
