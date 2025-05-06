import {useEffect, useState} from "react"
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { HiAcademicCap } from "react-icons/hi2";
import Timeline from "./Timelines/Timeline";
import Exptimeline from "./Timelines/Exptimeline";
import ThemedIcons from "./theme/ThemedIcon";
import { FaCode } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const About_me = [
  {
    description: ' '
  }
];

const timelineItems = [
  {
    title: "Professional Foundations",
    school: "ALX Africa",
    date: "2025",
  },
  {
    title: "AI Career Essentials",
    school: "ALX Africa",
    date: "2024",
  },
  {
    title: "Software Engineering",
    school: "ALX Africa",
    date: "2023",
  },
  {
    title: "Matric (Maths And Science)",
    school: "Duck Pond's High School",
    date: "2016",
  },
];  

  const ShaperTimeline = [
    {
      companyName: "Shaper (The Digital Academy) - Junior Full Stack Software Developer",
      date: "Jun 2024 - Present",
      desc: (
        <div className="description--controller">
          <ul>
            <li>
              Develop and maintain scalable applications, such as the{" "}
              <a href="https://developer.ayoba.me/" target="_blank">Developer Portal</a> and{" "}
              <a href="https://shop.ayoba.me" target="_blank">Ayoba Marketplace</a>, for Ayoba, 
              while collaborating with third-party companies for backend integration and support.
            </li>
            <br />
            <li>
              Implement the designs of Ayoba Developer Portal to streamline developer onboarding and enhance the user experience.
            </li>
            <br />
            <li>
              Leverage Agile methodologies to improve project timelines and ensure alignment with stakeholder requirements.
            </li>
            <br />
            <li>
              Build reusable components and modular architecture for web applications, increasing development efficiency by 25%.
            </li>
            <br />
            <li>
              Conduct extensive testing and debugging to ensure high application performance and security.
            </li>
            <br />
            <li>
              Collaborate with cross-functional teams to gather and analyze requirements for seamless feature integration.
            </li>
          </ul>
        </div>
      )
    }
  ];
  
  const LMtimeline = [
    {
      companyName: "LM Studio - Junior Full Stack Software Developer",
      date: "Jan 2023 - Jan 2024",
      desc: (
        <div className="description--controller">
          <ul>
            <li>Developed and maintained software applications using Django.</li>
            <br />
            <li>
              Assisted in the implementation of Agile methodologies, 
              improving project delivery times by 30%.
            </li>
            <br />
            <li>
              Provided application support, conducted unit, regression, and integration testing using pytest 
              and unittest to ensure software quality.
            </li>
            <br />
            <li>
              Implemented Infrastructure as Code (IaC) practices using Terraform and Ansible to streamline deployment processes.
            </li>
            <br />
            <li>
              Collaborated with senior team members to gather and analyze requirements, 
              leading to successful feature implementations.
            </li>
            <br />
            <li>
              Optimized application performance, reducing server response time by 40%.
            </li>
          </ul>
        </div>
      )
    }
  ];  

const About = () => {
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentHeight = 300;
      if (window.screenY >= componentHeight){
        setStopped(true)
      } else {
        setStopped(false)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className='Page--Wrapper'>
      <div className='About--tittle'>
        <h1>About Me</h1>
      </div>
        <Divider/>
      <div className='about--me--container'>
        {About_me.map((item, index) => (
          <div className='about--me--card' key={`about-me-${index}`}>
            <div className='heading-description--controller'>
              Full Stack Developer skilled in React, delivering scalable and user-focused 
              web applications with clean, reusable components. Known for dependability, 
              flexibility, strong problem-solving abilities, and clear communication throughout 
              the development lifecycle.
            </div>
          </div>
        ))}
        <div className='info--Controller'>
          <div className='cards--and--button--controler'>
            <div className='cards--info'>
            <div className="SoftSkills-controller">
            <div className="softskills-heading">
              <div className='edication--icon'>
                <GiSkills />
              </div>
              Soft Skills
            </div>
            <div className="list--controller">
              <ul>
                <li>Dependability</li>
                <li> Flexibility</li>
                <li> Problem-solving</li>
                <li>Communication</li>
                <li>Teamwork</li>
                <li> Adaptability</li>
                <li> Emotional intelligence </li>
                <li>Time management</li>
              </ul>
            </div>
          </div>
            </div>
            <div className='button--controller'>
              <Link to="/contact" >
                <Button variant="contained" color="success">
                    hire me
                </Button>
              </Link>
            </div> 
          </div>
          <div className="Gauges--wrapper">
            <div className="Skills--heading">
            <div className='edication--icon'>
              <FaCode />
              </div>
              Core technical skills:
              </div>
            <div className='Gauges--controller'>
              <div className="python--gauge">
                <ThemedIcons
                  tech="react"
                  size={150}
                  alt="react Logo"
                />
                React
              </div>
                
              <div className='python--gauge'>
                <ThemedIcons
                  tech="next"
                  size={150}
                  alt="next Logo"
                />
                Next.js
              </div>
              <div className='Java--gauge'>
              <ThemedIcons
                    tech="express"
                    size={150}
                    alt="expess Logo"
                  />
                <div className="skill--content">
                    Express
                    <Link to="/skills">
                      (&nbsp;&nbsp;&nbsp;...more)
                  </Link>
                </div>
              </div>
            </div>
            {/* <Link to="/contact" >
                <Button variant="contained" color="success">
                    hire me
                </Button>
              </Link> */}
          </div>
        </div>
        <div className='education-and-experience'>
          <div className='Education--tittle--and--card'>
            <div className='Education--title'>
              <div className='edication--icon'>
              <HiAcademicCap />
              </div>
              <h2>Education</h2>
            </div>
            <div className='education--card--controler'
              style={{
                position:"sticky",
                top: stopped ? "300px" : "20px"
              }}
            >
              <Timeline items={timelineItems}/>
            </div>
          </div>
          <div className='Expience--title--and--controler'>
            <div className='experience--title'>
              <div className='experience--icon'>
                <HiMiniPresentationChartLine />
              </div>
              <h2>Experience</h2>
            </div>
            <div className='experience--card--controller'>
              {/* <div className='Experience--title'>
                <h3>Junior Full Stack Software Developer</h3>
              </div> */}
              <div className='vertical-line '>
                <div className='content'>
                  <div className='componany-name--and--date--controller'>
                    <Exptimeline items={ShaperTimeline}/>
                  </div>
                </div>
              </div>
              {/* <div className='Experience--title'>
                <h3>Junior Software Developer</h3>
              </div> */}
              <div className='vertical-line '>
                <div className='content'>
                  <div className='componany-name--and--date--controller'>
                    <Exptimeline items={LMtimeline}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
