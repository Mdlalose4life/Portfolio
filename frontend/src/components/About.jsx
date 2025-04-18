import {useEffect, useState} from "react"
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Divider from '@mui/material/Divider';
import PythonPointer from './Gauges/PythonGauge';
import SharpPoiner from './Gauges/SharpGauge';
import ScriptGuge from './Gauges/ScriptGauge';
import Button from '@mui/material/Button';
import { HiAcademicCap } from "react-icons/hi2";
import Timeline from "./Timelines/Timeline";
import Exptimeline from "./Timelines/Exptimeline";

const About_me = [
  {
    AboutMeName: 'Sbusiso Mdlalose',
    description: 'Full Stack developer skilled in React, building sleek, scalable, and user-focused web interfaces with reusable components and modern design principles.'
  }
];

const Certficates = [
  {
    name: 'Certficate :',
    cert_Name: 'Software Engineering' 
  }
  ];
const Country = [
  {
    name: 'Country:',
    countyName: 'South Africa'
  }];

const Github = [
  {
    name: 'Github:',
    GithubName: 'Github',
    link: 'https://github.com/Mdlalose4life'
  }];

const Availability = [
  {
    name: 'Avalability:',
    status: 'Immediately',
  }];

  const timelineItems = [
    {
      title: "Matric (Maths And Science)",
      school: "Duck Pond's High School",
      date: "2016",
    },
    {
      title: "Software Engineering",
      school: "ALX (Hulbetortorn School)",
      date: "2023",
    },
    {
      title: "AI Career Essentials",
      school: "ALX (Hulbetortorn School)",
      date: "2024",
    },
    {
      title: "Professional Foundations",
      school: "ALX (Hulbetortorn School)",
      date: "2025",
    },
  ];

const LMtimeline = [
  {
    companyName: "LM Studio",
    date: "Jan 2023 - Jan 2024",
    desc: (
      <div className="description--controller">
        <ul>
          <li>Developed and maintained software applications using Django.</li>
            <br/>
          <li>Assisted in the implementation of Agile methodologies, 
            improving project delivery times by 30%.</li>
            <br/>
          <li>Provided application support, conducted unit, 
            regression, and integration testing using pytest 
            and unittest to ensure software quality.
          </li>
            <br/>
          <li>Implemented Infrastructure as Code (IaC) practices using 
              erraform and Ansible to streamline deployment processes.
          </li>
            <br/>
          <li>Collaborated with senior team members to gather and 
              analyze requirements, leading to successful feature 
              implementations.
          </li>
            <br/>
          <li>Optimized application performance, reducing server
            response time by 40%.
          </li>
        </ul>
      </div>
    )
  },
];

const ShaperTimeline = [{
    companyName: "Shaper (The Digital Academy)",
    date: "Jun 2024 - Present",
    desc: (
      <div className="description--controller">
        <ul>
          <li> Develop and maintain scalable applications, such as the <a href="https://developer.ayoba.me/" target="_blank">Developer Portal </a> 
           and <a href="https://shop.ayoba.me" target="_blank"> Ayoba Marketplace</a>, for Ayoba, while collaborating with third-party companies 
          for backend integration and support. 
          </li>
            <br/>
          <li> Implement the designs of Ayoba Developer Portal to streamline developer onboarding and enhance the user experience. 
          </li>
            <br/>
          <li>Leverage Agile methodologies to improve project timelines and ensure alignment with stakeholder requirements.
          </li>
            <br/>
          <li> Build reusable components and modular architecture for web applications, increasing development efficiency by 25%.
          </li>
          <br/>
          <li> Conduct extensive testing and debugging to ensure high application performance and security.
          </li>
          <br/>
          <li>Collaborate with cross-functional teams to gather and analyze requirements for seamless feature integration.
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
        <Typography variant='h4'>About Me</Typography>
      </div>
        <Divider/>
      <div className='about--me--container'>
        {About_me.map((item, index) => (
          <div className='about--me--card' key={`about-me-${index}`}>
            <Typography variant='h5'>{item.AboutMeName}</Typography>
            <Divider/>
            <div className='description--controller'>
              <p>{item.description}</p>    
            </div>
          </div>
        ))}
        <div className='info--Controller'>
          <div className='cards--and--button--controler'>
            <div className='cards--info'>
              <div className='certificate--and--country--controler'>
                {Certficates.map((item, index)=>(
                  <div className='certificate--controller' key={item.id || index}>
                    <p style={{fontWeight:"bold", fontSize:"1.3rem"}}>{item.name}</p>
                    <p>{item.cert_Name}</p>
                    <p>AI Career Essentials</p> 
                    <Divider/>
                  </div>
                ))}
                {Country.map((item, index)=>(
                  <div className='country--controller' key={index}>
                    <p style={{fontWeight:"bold", fontSize:"1.3rem"}}>{item.name}</p>
                    <p>{item.countyName}</p>
                    <Divider/>
                  </div>
                ))}
                </div>
                <div className='github--and--availability--controller'>
                  {Github.map((item, index)=>(
                    <div className='github--controller' key={index}>
                      <p style={{fontWeight:"bold", fontSize:"1.3rem"}}>{item.name}</p>
                      <Link to={item.link} target="_blank">
                        <p>{item.GithubName}</p>
                      </Link>
                      <Divider/>
                    </div>
                    ))}
                    {Availability.map((item, index)=>(
                      <div className='availability--controller' key={index}>
                        <p style={{fontWeight:"bold", fontSize:"1.3rem"}}>{item.name}</p>
                        <p>{item.status}</p>  
                        <Divider/> 
                    </div>
                  ))}
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
            <div className='Gauges--controller'>
              <div className='C--gauge'>
                <PythonPointer />
                  Python (35%)
              </div>
              <div className='python--gauge'>
                <SharpPoiner />
                  Javascript (50%)
              </div>
              <div className='Java--gauge'>
                <ScriptGuge/>
                  Next.js (60%)
              </div>
            </div>
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
              <div className='Experience--title'>
                <h3>Junior Software Developer</h3>
              </div>
              <div className='vertical-line '>
                <div className='content'>
                  <div className='componany-name--and--date--controller'>
                    <Exptimeline items={LMtimeline}/>
                  </div>
                </div>
              </div>
              <div className='Experience--title'>
                <h3>Junior Full Stack Software Developer</h3>
              </div>
              <div className='vertical-line '>
                <div className='content'>
                  <div className='componany-name--and--date--controller'>
                    <Exptimeline items={ShaperTimeline}/>
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
