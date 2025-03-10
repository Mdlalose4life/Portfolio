/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
import "../styles/ThemeToggle.css"

const ThemeToggleButton = ({ isMenuExpanded }) => {

  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="button--wraper" style={{
      display:"flex",
      flexDirection:isMenuExpanded ? "row" : "column",
      gap: "10px",
      justifyContent:"center"
    }}>
      <button className="lighter" onClick={() => setTheme('light')} ></button>
      <button  className="darker" onClick={() => setTheme('dark')}></button>
      <button  className="pinker" onClick={() => setTheme('pink')}></button>
      <button className="purpler" onClick={() => setTheme('purple')}></button>
    </div>
  );
};

export default ThemeToggleButton;
