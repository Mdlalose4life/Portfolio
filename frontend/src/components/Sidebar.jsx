// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiHome, BiSmile, BiAlignJustify, BiBriefcase, BiChat, BiMenu } from 'react-icons/bi';
import { LiaSmileBeamSolid } from 'react-icons/lia';
import '../styles/sidebar.css';
import ThemeToggleButton from './ThemeToggle';
import { Divider } from '@mui/material';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleMobileExp = () => {
    if (window.innerWidth < 768){
      setIsExpanded(false)
    }
  }

  return (
    <>
    {isExpanded && window.innerWidth <= 768 && (
      <div
        className="backdrop"
        onClick={() => setIsExpanded(false)}
      />
    )}
    <div className={`menu ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <BiMenu className='Menu--Button'/>
      </button>
      <div className='logo'>
        <LiaSmileBeamSolid className='icon-logo' />
        {isExpanded && <h2>Sbusiso</h2>}
      </div>
      <Divider/>
      <div className='menu--list'>
        <NavLink to='/' onClick={handleMobileExp} className={({ isActive }) => isActive ? "item active" : "item"}>
          <BiHome className="icon" />
          {isExpanded && <span>Home</span>}
        </NavLink>
        <NavLink to='/about' onClick={handleMobileExp} className={({ isActive }) => isActive ? "item active" : "item"}>
          <BiSmile className="icon" />
          {isExpanded && <span>About</span>}
        </NavLink>
        <NavLink to='/skills' onClick={handleMobileExp} className={({ isActive }) => isActive ? "item active" : "item"}>
          <BiAlignJustify className="icon" />
          {isExpanded && <span>Skills</span>}
        </NavLink>
        <NavLink to='/portfolio' onClick={handleMobileExp} className={({ isActive }) => isActive ? "item active" : "item"}>
          <BiBriefcase className="icon" />
          {isExpanded && <span>Portfolio</span>}
        </NavLink>
        <NavLink to='/contact' onClick={handleMobileExp} className={({ isActive }) => isActive ? "item active" : "item"}>
          <BiChat className="icon" />
          {isExpanded && <span>Contact</span>}
        </NavLink>
        <Divider/>
      </div>
      <ThemeToggleButton isMenuExpanded={isExpanded}/>
    </div>
    </>
  );
};

export default Sidebar;
