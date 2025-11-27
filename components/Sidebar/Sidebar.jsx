import React from 'react'
import { IoPhonePortrait } from "react-icons/io5";
import '../Sidebar/sidebar.css'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import img_sidebar from '../../src/img/about.png'
import cv from '../../src/img/ziad-cv.pdf'
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='img'>
                <img alt="" srcSet={img_sidebar} />
            </div>
            <h2>Eng / Ziad Abdalla </h2>
            <p>Frontend Developer React js Next js</p>
            {/* social */}
            <div className="card">
  <a className="socialContainer containerOne" href="https://www.instagram.com/ahmed_elsayed._._/" target='_blank'>
            <svg viewBox="0 0 16 16" className="socialSvg facebookSvg">
              <path
                d="M15.117 0H.883C.396 0 0 .396 0 .883v14.234c0 .487.396.883.883.883h7.541V10.088H6.171V7.457h2.253V5.844c0-2.24 1.344-3.465 3.355-3.465.98 0 1.818.073 2.063.106v2.393l-1.415.001c-1.109 0-1.32.528-1.32 1.303v1.708h2.643l-.345 2.631h-2.298V16h4.498c.487 0 .883-.396.883-.883V.883c0-.487-.396-.883-.883-.883z"
              ></path>
            </svg>
  </a>

          <a className="socialContainer containerThree" href="https://www.linkedin.com/in/ziad-abdalla-0a3144228/" target='_blank'>
    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
    </svg>
  </a>

  <a className="socialContainer containerFour" href="https://api.whatsapp.com/send?phone=01018227412" target='_blank'>
    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
      <path
        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
      ></path>
    </svg>
  </a>
</div>


            {/* end social */}
            <div className='info'>
                <div className='phone'>
                    <IoPhonePortrait className='icon-side' />
                    <div>
                        <p>Phone</p>
                        <h5>01018227412</h5>
                    </div>
                </div>
                <div className='phone'>
                    <MdEmail className='icon-side' />
                    <div>
                        <p>Email</p>
                        <h5>ziadabdalla846@gmail.com</h5>
                    </div>
                </div>
                <div className='phone'>
                    <FaLocationDot className='icon-side' />
                    <div>
                        <p>Location</p>
                        <h5>Zagazig - Egypt </h5>
                    </div>
                </div>
          <a href={cv} style={{padding : "0px 10px"}} target='_blank' className='buttonn'> Download my Resume


   
                </a>
            </div>


        </div>
    )
}
