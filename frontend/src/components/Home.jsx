import '../styles/home.css'
import img from '../assets/Sbu.jpg'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
import ScrollHint from './ScrollHint';



const profile = [
  {
    image: img,
    name: 'I am Sbusiso Blessing Mdlalose',
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
              <div className='rhssection'><strong>{item.name}</strong> —a <strong>Full Stack Developer</strong> with a passion for crafting sleek, scalable solutions using <strong>React, Next.js, and Express</strong>.</div>              
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
                    <Link to="https://www.linkedin.com/in/sbusiso-blessing-1894591a0" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit'}}>
                      <FaLinkedin />               
                    </Link>
                  </div>
                  <div className='facaebook--icon'>
                    <Link to="https://github.com/Mdlalose4life/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit'}}>
                      <FaGithub />
                    </Link>
                  </div>
                  <div>
                    <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=&su=&body=&tf=1" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'inherit'}}>
                    <MdOutlineMailOutline/>
                    </Link>
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
