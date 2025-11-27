import React, { useEffect, useState } from 'react'
import '../About/about.css'
import { FaCode } from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

export const About = () => {
      // spiiner 
  let [spinner , setspinner] = useState(true);
  useEffect(()=>{
    setspinner(true);
    setTimeout(()=>{
      setspinner(false);
    },1500)
  },[])
    return (
        <>
        {spinner ? 
        <div className="spinner">
           <svg className="pl" width="128px" height="128px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle className="pl__ring1" cx="64" cy="64" r="60" fill="none" stroke="hsl(3,90%,55%)" stroke-width="8" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="377 377" stroke-dashoffset="-376.4"></circle>
  <circle className="pl__ring2" cx="64" cy="64" r="52.5" fill="none" stroke="hsl(13,90%,55%)" stroke-width="7" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="329.9 329.9" stroke-dashoffset="-329.3"></circle>
  <circle className="pl__ring3" cx="64" cy="64" r="46" fill="none" stroke="hsl(23,90%,55%)" stroke-width="6" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="289 289" stroke-dashoffset="-288.6"></circle>
  <circle className="pl__ring4" cx="64" cy="64" r="40.5" fill="none" stroke="hsl(33,90%,55%)" stroke-width="5" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="254.5 254.5" stroke-dashoffset="-254"></circle>
  <circle className="pl__ring5" cx="64" cy="64" r="36" fill="none" stroke="hsl(43,90%,55%)" stroke-width="4" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="226.2 226.2" stroke-dashoffset="-225.8"></circle>
  <circle className="pl__ring6" cx="64" cy="64" r="32.5" fill="none" stroke="hsl(53,90%,55%)" stroke-width="3" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="204.2 204.2" stroke-dashoffset="-203.9"></circle>
</svg>
        </div>
    :    
        <div className='about'>
            <h1>About ME <span></span></h1>
            <p>
             I’m a Frontend Developer with over 3 years of experience specializing in React.js and Next.js. I’m passionate about building high-performance, scalable web applications with modern architectures such as SSR, SSG, and server components. I have strong experience with Tailwind CSS, crafting clean, responsive, and accessible user interfaces. I enjoy solving complex front-end challenges, optimizing performance, and collaborating with teams to deliver exceptional digital experiences.
            </p>
            <h1>What i Do !<span></span></h1>
            <div className='skill'>
                <div className='skills one'>
                    <h4><FaCode className='icon-side' />
                        Web Developement</h4>
                            <p>I utilize Next.js to create interactive and fast user interfaces, ensuring excellent performance and a seamless user experience.</p>
                </div>
                <div className='skills two'>
                    <h4><IoIosSettings className='icon-side' />
                                SSR and SSG</h4>
                            <p>I specialize in building applications that support Server-Side Rendering (SSR) or Static Site Generation (SSG) to enhance loading speed and user experience.
                    </p>
                </div>
                <div className='skills two'>
                    <h4><FaCode className='icon-side' />
                                Performance Optimization</h4>
                            <p>I focus on optimizing application performance through techniques like Lazy Loading and Code Splitting, ensuring faster load times and reduced response times.</p>
                </div>
                <div className='skills one'>
                    <h4><IoCodeWorking className='icon-side' />
                        Responsive Design
                    </h4>
                            <p>I ensure that all applications are compatible across various devices and screen sizes, improving user experience on both mobile and desktop.</p>
                </div>
            </div>
        </div>
        }
        </>
    )
}
