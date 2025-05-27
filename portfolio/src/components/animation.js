import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target,animationProps,scrollProps) => {
    gsap.to(target,{
        ...animationProps,
        scrollTrigger:{
            trigger:target,
            toggleActions:'play none reverse reverse',
            
            
            
            ...scrollProps,
            immediateRender:false,
            
        }

    })
    
}

export const animateWithGsapTimeline = (timeline,target,animationProps,scrollProps) => {
    timeline.to(target,{
        ...animationProps,
        scrollTrigger:{
            trigger:target,
            toggleActions:'play none reverse reverse',
            ...scrollProps,
            immediateRender:false,
            
        }

    })
}
