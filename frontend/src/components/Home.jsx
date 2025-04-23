import '../styles/home.css'
import img from '../assets/Sbu.jpg'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
import ScrollHint from './ScrollHint';
import { colors } from '@mui/material';


const profile = [
  {
    image: img,
    name: 'I am Sbusiso Blessing Mdlalose',
    link: 'https://www.linkedin.com/in/sbusiso-blessing-1894591a0'
  }
]

const Home = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className='main--profile'>
      <div className='profile--container'>
        {profile.map((item, index) => (
          <div className='profile--image' key={index}>
            <div className='pic--and--name'>
              <div className='lhsSection'></div>
              <img className='image' src={item.image} alt={item.name} />
              <div className='rhssection'>{item.name}—a Full Stack Developer with a passion for crafting sleek, scalable solutions using React, Next.js, and Express.</div>              
            </div>
            <div className={`profile--name ${theme}`}>
              <div>
                <div className='Theme--words'>
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    'Think sharp. Solve smarter.',
                    2000,
                    'Speak clear. Lead strong.',
                    2000,
                    'Own the room. Own the code.',
                    2000,
                    'Teamwork makes the deploy work.',
                    2000,
                    'Lead with purpose. Deliver with pride.',
                    2000,
                    'Stay cool. Act pro.',
                    2000,
                    'Adapt fast. Learn faster.',
                    2000,
                    'Confidence in every commit.',
                    2000,
                    'Results-driven. People-powered.',
                    2000,
                    'Communicate. Collaborate. Code.',
                    2000,
                    'Soft skills. Hard impact.',
                  ]}
                  speed={50}
                  style={{ fontSize: '1em' }}
                  repeat={Infinity}
                />
                </div>
                <div className='icons'>
                  <div className='linkedin--icon'>
                    <Link to={item.link} target="_blank" style={{ textDecoration: 'none', color: 'inherit'}}>
                      <FaLinkedin />               
                    </Link>
                  </div>
                  <div className='instagram--icon'>
                    <FaInstagram/>
                  </div>
                  <div className='facaebook--icon'>
                    <FaFacebook />
                  </div>
                  <div>
                  <FaWhatsapp />
                  </div>
                  <ScrollHint/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
