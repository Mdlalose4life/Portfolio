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
                    'Crafting lightning-fast apps with Next.js',
                    1000,
                    'Making UIs pop with React animations',
                    1000,
                    'Building sleek and snappy pages with Next.js',
                    1000,
                    'Mastering server-side rendering like a pro',
                    1000,
                    'State management magic with React hooks',
                    500,
                    'Optimizing components for buttery-smooth performance',
                    1000,
                    'Taming APIs with Next.js routes',
                    1000,
                    'Spicing up the frontend with Tailwind & Next.js',
                    1000,
                    'Deploy apps like a boss',
                    1000,
                    'Keeping things dynamic with React state',
                    500,
                    'Fetching data smarter, not harder with SWR',
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
