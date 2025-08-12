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
    <footer className="border-t border-gray-500 md:p-10 p-5 w-full">
  <div className="flex flex-col md:flex-row normText text-[14px] text-gray-400 
                  space-y-5 md:space-y-0 md:justify-between w-full">

    {/* Left Column */}
    <div className="rows1 flex flex-col space-y-5  md:w-2/3">
      <p className="text-[20px]">Aashin Mohammed A Z</p>
      <p>Feel Free to contact me for Work related queries</p>
      <p>
        Mail:{" "}
        <a
          href="mailto:ashinmammu@gmail.com"
          className="underline hover:text-white"
        >
          ashinmammu@gmail.com
        </a>
      </p>
    </div>

    {/* Right Columns Wrapper */}
    <div className="flex flex-col md:flex-row md:space-x-10 md:w-2/3 flex-grow">
      
      {/* Social Media */}
      <div className="rows2 flex flex-col space-y-5 md:flex-1">
        <p className="mb-5">Social Media</p>
        {socialhandles.map((item, id) => (
          <a
            key={id}
            href={item.link}
            className="flex flex-row items-center space-x-2"
          >
            <img src={item.image} className="invert w-5 h-5" alt="" />
            <p>{item.title}</p>
          </a>
        ))}
      </div>

      {/* Professional Social Media */}
      <div className="rows2 flex flex-col space-y-5 md:flex-1">
        <p className="mb-5">Professional Social Media</p>
        {socialhandles2.map((item, id) => (
          <a
            key={id}
            href={item.link}
            className="flex flex-row items-center space-x-2"
          >
            <img src={item.image} alt="" className="invert w-5 h-5" />
            <p>{item.title}</p>
          </a>
        ))}
      </div>

    </div>
  </div>
</footer>

  )
}

export default Footer