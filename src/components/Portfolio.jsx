import React from 'react';
import spiritlink from '../assets/Spiritlink.png';
import mindpal from '../assets/mindpal.png';
import Divider from '@mui/material/Divider';
import '../styles/Portfolio.css'
import { Link } from 'react-router-dom';

const portfolio = [
  {
    project: spiritlink,
    project_title: 'SpiritLink',
    link: 'https://spiritlink.onrender.com/'
  },
  {
    project: mindpal,
    project_title: 'Mindpal',
    link: 'https://www.kamvamindpal.com/'
  }
];

const Portfolio = () => {
  return (
    <div className='portfolio--page--tile'>
      <h3>Portfolio</h3>
      <Divider/>
      <div className='portfolio--container'>
        {portfolio.map((item) => (
          <div className='portfolio--card' key={item}>
            <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img className='portfolio--image' src={item.project} alt={item.project_title} />
            </Link>
            <div className='portfolio--title'>
              {item.project_title}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
