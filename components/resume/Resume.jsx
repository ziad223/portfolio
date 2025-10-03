import React, { useEffect, useState } from "react";
import "../resume/resume.css";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";
import { DiJqueryLogo } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { LiaCodeBranchSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const Resume = () => {
  let [spinner, setspinner] = useState(true);
  useEffect(() => {
    setspinner(true);
    setTimeout(() => {
      setspinner(false);
    }, 1500);
  }, []);
  return (
    <>
      {spinner ? (
        <div className="spinner">
          <svg
            class="pl"
            width="128px"
            height="128px"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="pl__ring1"
              cx="64"
              cy="64"
              r="60"
              fill="none"
              stroke="hsl(3,90%,55%)"
              stroke-width="8"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="377 377"
              stroke-dashoffset="-376.4"
            ></circle>
            <circle
              class="pl__ring2"
              cx="64"
              cy="64"
              r="52.5"
              fill="none"
              stroke="hsl(13,90%,55%)"
              stroke-width="7"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="329.9 329.9"
              stroke-dashoffset="-329.3"
            ></circle>
            <circle
              class="pl__ring3"
              cx="64"
              cy="64"
              r="46"
              fill="none"
              stroke="hsl(23,90%,55%)"
              stroke-width="6"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="289 289"
              stroke-dashoffset="-288.6"
            ></circle>
            <circle
              class="pl__ring4"
              cx="64"
              cy="64"
              r="40.5"
              fill="none"
              stroke="hsl(33,90%,55%)"
              stroke-width="5"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="254.5 254.5"
              stroke-dashoffset="-254"
            ></circle>
            <circle
              class="pl__ring5"
              cx="64"
              cy="64"
              r="36"
              fill="none"
              stroke="hsl(43,90%,55%)"
              stroke-width="4"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="226.2 226.2"
              stroke-dashoffset="-225.8"
            ></circle>
            <circle
              class="pl__ring6"
              cx="64"
              cy="64"
              r="32.5"
              fill="none"
              stroke="hsl(53,90%,55%)"
              stroke-width="3"
              transform="rotate(-90,64,64)"
              stroke-linecap="round"
              stroke-dasharray="204.2 204.2"
              stroke-dashoffset="-203.9"
            ></circle>
          </svg>
        </div>
      ) : (
        <div className="resume">
          <h1>
            Resume<span></span>
          </h1>
          <div className="infoo">
            <div className="education">
              <h2>
                <PiStudentBold className="ed-icon" />
                Education
              </h2>
              <div className="edu">
                <p> 2018 - 2022</p>
                <h4>Computer department</h4>
                <h5>Zagazig University</h5>
              </div>
              <div className="edu">
                <p>2021</p>
                <h4>Route Course</h4>
                <h5>Frontend Developer course</h5>
              </div>
            </div>
            <div className="education">
              <h2>
                <MdOutlineWork className="ed-icon" />
                Experience
              </h2>
              <div className="edu">
                <p>July 2022 - December 2023</p>
                <h4>Bravo Company</h4>
                <h5>Frontend Developer React js</h5>
              </div>
              <div className="edu">
                  <p>January 2024 - November 2024</p>
                <h4>Admixy</h4>
                <h5>Frontend Developer Next js</h5>
              </div>
            </div>
          </div>
          {/* skills */}
          <div className="myskills">
            <div className="work">
              <h1>Work Skills</h1>
              <h4>
                C++
              </h4>
              <h4>
                <FaHtml5 className="icon-side" />
                HTML
              </h4>
              <h4>
                {" "}
                <FaCss3Alt className="icon-side css" />
                CSS
              </h4>
              <h4>
                <IoLogoJavascript className="icon-side js" />
                Java Script
              </h4>
              <h4>
                <DiJqueryLogo className="icon-side jq" />
                Jquery
              </h4>
                <h4>
                  <BsBootstrapFill className="icon-side boot" />
                  Bootstrap
                </h4>
                <h4>
                  <RiTailwindCssFill className="icon-side boot" />
                  Tailwind CSS
                </h4>

              <h4>
                <FaReact className="icon-side react" />
                React js
              </h4>
                <h4>
                  <SiRedux className="icon-side react" />
                  Redux Toolkit
                </h4>
                <h4>
                  <RiNextjsFill className="icon-side react" />
                  Next js
                </h4>
              <h4>
                <LiaCodeBranchSolid className="icon-side php" />
                Git
              </h4>
              <h4>
                <FaGithub className="icon-side php" />
                Githup
              </h4>
            </div>
            <div className="work">
              <h1>communication skills</h1>
              <h4>Team Work</h4>
              <h4>Time manageme</h4>
              <h4>Quick learner</h4>
              <h4>Communication</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
