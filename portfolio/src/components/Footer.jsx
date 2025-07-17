import React, { useState } from 'react'
import wp from '../assets/wp.svg';
import x from '../assets/x.svg';
import fb from '../assets/fb.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import insta from '../assets/ig.svg';
import { div } from 'framer-motion/client';

const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const socialhandles = [
        {
            image:wp,
            title:'Whatsapp',
            link:'https://wa.link/91lxl1'
        },
        {
            image:fb,
            title:'FaceBook',
            link:'https://www.facebook.com/ashin.mohammed.98'
        },
        {
            image:insta,
            title:'Instagram',
            link:'https://www.instagram.com/mammu__ok/'
        },
        


    ]
    const socialhandles2 = [
        {
            image:x,
            title:'X',
            link:'https://x.com/mohammed_ashin'
        },
        {
            image:github,
            title:'Github',
            link:'https://github.com/mammumammi'
        },
        {
            image:linkedin,
            title:'LinkedIn',
            link:'https://www.linkedin.com/in/aashin-mohammed-a-z-9b06b7273/'
        }
    ]
  return (
    <footer className='border-t-1  border-gray-500 md:p-10 p-5'>
        <div className='flex md:flex-1/4 flex-col md:flex-row normText text-[14px] text-gray-400 space-y-1'>
            <div className='rows1 md:w-1/4 flex flex-col space-y-5 md:pr-10'>
                <p className='text-[20px]'>Aashin Mohammed A Z</p>
                <p >Feel Free to contact me for Work related queries</p>
                <p>Phone: <a href="tel:+918848584363">8848584363</a></p>
            </div>
            <div className='flex flex-row md:w-1/2 mt-5 md:mt-0'>
            <div className='rows2 md:w-1/2 flex flex-col space-y-5 pr-10 '>
                <p className='mb-5'>Social Media</p>
                {socialhandles.map( (item,id) => (
                    
                    <a key={id} href={item.link} className='flex flex-row space-x-2'><img src={item.image} className='inline-block  invert w-auto' alt="" /><p>{item.title}</p></a>
                ))}
            </div>
            <div className='rows2 md:w-1/2 flex flex-col space-y-5 pr-10 '>
                <p className='mb-5'>Professional Social Media</p>
                {socialhandles2.map( (item,id) => (
                    <a key={id} href={item.link} className='flex flex-row space-x-2'><img src={item.image} alt="" className='w-auto inline-block invert ' /><p>{item.title}</p></a>
                ))}
            </div>
            </div>
            <div className=' md:w-1/4 flex flex-col space-y-1 pr-5'>
            <p className='mb-5 mt-5 md:mt-0 md:mb-0'>Address</p>
            <p>Aashinas</p>
            <p>Highway Gardens,16Th Mile Stone,</p>
            <p>Thonnakkal P.O:695317,</p>
            <p>Thiruvananthapuram,Kerala</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer