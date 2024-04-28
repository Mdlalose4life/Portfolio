import React from 'react'
import {
    BiBook,
    BiHome,
    BiSmile,
    BiAlignJustify ,
    BiBriefcase,
    BiChat,
    }
    from 'react-icons/bi'
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            <BiBook className='icon-logo'/>
            <h2> Sbusiso </h2>
        </div>
        <div className='menu--list'>
            <a href='/' className="item">
            <BiHome className="icon"/>
                Home
            </a>
            <a href='/about' className="item">
                <BiSmile className="icon"/>
                About
            </a>
            <a href='#' className="item">
                <BiAlignJustify className="icon"/>
                Skills
            </a>
            <a href='#' className="item">
                <BiBriefcase className="icon"/>
                Portfolio
            </a>
            <a href='#' className="item">
                <BiChat className="icon"/>
                Contact
            </a>
        </div>
    </div>
  )
}

export default Sidebar
