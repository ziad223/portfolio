import React, { useEffect, useState } from 'react'
import '../projects/projects.css';
import dailycard from '../../src/img/dailycard.png'
import highness from '../../src/img/highness.png'
import dashboard from '../../src/img/Dashboard.png'
import education from '../../src/img/edu.png'

import nemo from '../../src/img/nemo.png'
import education6 from '../../src/img/re3aya.png'
import education7 from '../../src/img/hagatna.png'
import education8 from '../../src/img/kora-ticket.png'
import education9 from '../../src/img/elmohed.png'
export const Projects = () => {
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
            <svg class="pl" width="128px" height="128px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle class="pl__ring1" cx="64" cy="64" r="60" fill="none" stroke="hsl(3,90%,55%)" stroke-width="8" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="377 377" stroke-dashoffset="-376.4"></circle>
  <circle class="pl__ring2" cx="64" cy="64" r="52.5" fill="none" stroke="hsl(13,90%,55%)" stroke-width="7" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="329.9 329.9" stroke-dashoffset="-329.3"></circle>
  <circle class="pl__ring3" cx="64" cy="64" r="46" fill="none" stroke="hsl(23,90%,55%)" stroke-width="6" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="289 289" stroke-dashoffset="-288.6"></circle>
  <circle class="pl__ring4" cx="64" cy="64" r="40.5" fill="none" stroke="hsl(33,90%,55%)" stroke-width="5" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="254.5 254.5" stroke-dashoffset="-254"></circle>
  <circle class="pl__ring5" cx="64" cy="64" r="36" fill="none" stroke="hsl(43,90%,55%)" stroke-width="4" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="226.2 226.2" stroke-dashoffset="-225.8"></circle>
  <circle class="pl__ring6" cx="64" cy="64" r="32.5" fill="none" stroke="hsl(53,90%,55%)" stroke-width="3" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="204.2 204.2" stroke-dashoffset="-203.9"></circle>
</svg>
         </div>
    :    
        <div className='projects'>
            <h1>Some <span></span></h1>
            <div className='project'>
                   <a href="https://mohadalkhalig.com/ar" target='_blank'>
            <div class="card elmohed">
                <img src="" alt="" srcSet={education9} />
            </div>
                      </a>
                          <a href="https://koraticket.com/ar" target='_blank'>
            <div class="card kora-ticket">
                <img src="" alt="" srcSet={education8} />
            </div>
                      </a>
                        <a href="https://7ajatna.com/ar" target='_blank'>
            <div class="card hajatna">
                                <img src="" alt="" srcSet={education7} />
            </div>
                      </a>
                        <a href="https://lcm.com.sa/" target='_blank'>
                            <div class="card re3aya">
                                <img src="" alt="" srcSet={education6} />
                            </div>
                        </a>
                        <a href="https://dailycard-delta.vercel.app/" target='_blank'>
                            <div class="card">
                                <img src="" alt="" srcSet={dailycard} />
                            </div>
                        </a>
                 <a href="https://highnessinv.com/en" target='_blank'>
            <div class="card two">
                <img src="" alt="" srcSet={highness} />
            </div>
                </a>
               
                        <a href="https://nemuchild.com/ar" target='_blank'>
            <div class="card four">
                                <img src="" alt="" srcSet={nemo} />
            </div>
                </a>
                     
                        <a href="https://ziad-dashboard.vercel.app/" target='_blank'>
            <div class="card five">
                    <img src="" alt="" srcSet={dashboard} />
            </div>
                </a>
               
            
                <a href="https://taha-salah.com/" target='_blank'>
            <div class="card aieght">
                <img src="" alt="" srcSet={education} />
            </div>
                </a>
           
            </div>
        </div>
        }
        </>
    )
}