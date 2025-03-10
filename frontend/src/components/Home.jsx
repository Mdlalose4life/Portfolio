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


const profile = [
  {
    image: img,
    name: 'Sbusiso Blessing Mdlalose',
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
            <img className='image' src={item.image} alt={item.name} />
            <div className={`profile--name ${theme}`}>
              <h2>{item.name}</h2>
              <div>
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    'Crafting elegant solutions with Flask..',
                    1000,
                    'Building robust applications with React..',
                    1000,
                    'Delivering scalable solutions with Django..',
                    1000,
                    'Transforming ideas into code with Express..',
                    1000,
                    'Debugging with finesse using Redux..',
                    500,
                    'Mastering the art of database design..',
                    1000,
                    'Optimizing performance with SQL queries..',
                    1000,
                    'Harnessing the power of NoSQL databases..',
                    1000,
                    'Securing applications with OAuth..',
                    1000,
                    'Automating tasks with Python scripts..',
                    500,
                  ]}
                  speed={50}
                  style={{ fontSize: '1em' }}
                  repeat={Infinity}
                />
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
