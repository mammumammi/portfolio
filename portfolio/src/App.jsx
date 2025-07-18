import { useEffect, useRef, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MouseParallax } from 'react-just-parallax';
import About from './components/About';
import { ScrollTrigger } from 'gsap/all';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const introRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
  
    const [showPreloader, setShowPreloader] = useState(true);
    const videoRef = useRef(null);
    const mainContentRef = useRef(null);
    const preloaderContainerRef = useRef(null);

    const singleGmTextRef = useRef(null);
    const loadStartTime = useRef(Date.now());
    const [isAnimationReady, setIsAnimationReady] = useState(false);

    const MIN_PRELOADER_DISPLAY_TIME = 1500;
    const MAX_PRELOADER_DISPLAY_TIME = 8000;

    useEffect(() => {
        gsap.set(".fade-in-section, .intro", { autoAlpha: 0 });

        let windowLoadFired = false;
        const handleWindowLoad = () => {
            windowLoadFired = true;
            fadeOutPreloader();
        };

        const fadeOutPreloader = () => {
            if (windowLoadFired && window.removeEventListener) {
                window.removeEventListener('load', handleWindowLoad);
            }
            const timeElapsed = Date.now() - loadStartTime.current;
            const remainingDelay = MIN_PRELOADER_DISPLAY_TIME - timeElapsed;
            const finalDelay = remainingDelay > 0 ? remainingDelay : 0;

            setTimeout(() => {
                if (!preloaderContainerRef.current) {
                    setShowPreloader(false);
                    return;
                }
                gsap.to(preloaderContainerRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => {
                        setShowPreloader(false);
                        const revealTl = gsap.timeline({
                            onComplete: () => {
                                ScrollTrigger.refresh();
                                setIsAnimationReady(true);
                                gsap.to(introRef.current, {
                                    opacity: 0,
                                    scrollTrigger: {
                                        trigger: introRef.current,
                                        start: 'bottom 75%',
                                        end: 'bottom top',
                                        scrub: true,
                                    }
                                });
                            }
                        });
                        
                        revealTl.fromTo(introRef.current,
                            { autoAlpha: 0, y: 50, scale: 0.9, },
                            { autoAlpha: 1, y: 30, scale: 1, duration: 1.5, ease: 'power2.out', }
                        )
                        .from(".fade-in-section", {
                            autoAlpha: 0,
                            y: 50,
                            duration: 1,
                            stagger: 0.2,
                            ease: 'power2.out'
                        }, "-=1.2");
                    }
                });
            }, finalDelay);
        };
        
        window.addEventListener('load', handleWindowLoad);
      
        if (width > 768 && videoRef.current) {
             videoRef.current.play().catch(e => console.error("Video play failed", e));
        } else if (width < 768) {
            setTimeout(() => { if (!windowLoadFired) fadeOutPreloader(); }, MAX_PRELOADER_DISPLAY_TIME);
        } else {
            setTimeout(() => { if (!windowLoadFired) fadeOutPreloader(); }, MAX_PRELOADER_DISPLAY_TIME);
        }
  
        return () => window.removeEventListener('load', handleWindowLoad);
    }, [width]);

    // ✅ NEW: Dedicated hook for the "Gm" preloader animation
    useGSAP(() => {
        if (width < 768 && singleGmTextRef.current) {
            gsap.fromTo(singleGmTextRef.current, 
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power1.inOut',
                    repeat: -1,
                    yoyo: true
                }
            );
        }
    }, [width]);

    return (
        <>
            {showPreloader && (
                <div className='preloader-overlay flex items-center justify-center fixed top-0 left-0 w-[100vw] h-[100vh] bg-black z-50' ref={preloaderContainerRef}>
                    {width > 768 ? (
                        <video src="https://res.cloudinary.com/ddbkg48oy/video/upload/v1752773747/vid_dvdsee.mp4" className='w-[160px] h-[160px] object-contain' ref={videoRef} autoPlay muted loop playsInline></video>
                    ) : (
                        <p className='font-[CDTSlanted] text-8xl text-center' ref={singleGmTextRef}>Gm</p>
                    )}
                </div>
            )}
    
            <Navbar isReady={isAnimationReady} />
    
            <div className='overflow-x-hidden' ref={mainContentRef}>
                <div className='w-full md:h-[90vh] h-[60vh] flex justify-center items-center overflow-hidden z-10'>
                    <MouseParallax>
                        <div className='text-5xl top-1/3 md:top-0 md:text-7xl md:px-0 me intro text-center flex justify-center items-center py-0 md:py-[330px] leading-normal px-[5px]' ref={introRef}>
                            Aashin Mohammed A Z
                        </div>
                    </MouseParallax>
                </div>
     
                <About className="fade-in-section" />
                <Skills isReady={isAnimationReady} />
                <Projects className="fade-in-section" />
                <Certificates className="fade-in-section" />
                <Footer className="fade-in-section" />
            </div>
        </>
    );
};

export default App;