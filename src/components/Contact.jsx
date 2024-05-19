import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineFilePdf } from "react-icons/ai";
import Divider from '@mui/material/Divider';
import '../styles/contact.css'
import { Link } from 'react-router-dom';

const resume = [{
  resume_Link : 'https://drive.google.com/file/d/13PfLMcjJ3QJW__dt4bVuzNIMMjCS9ZUB/view?usp=sharing',
}];


const Contact = () => {
  return (
    <div className='contact--me--controller'>
      <div className='contact--me--title--controller'>
        <h2>Contact me</h2>    
      </div>
        <Divider/>
      <div className='contact--and--icons--controller'>
        <div className='icons--controller'>
          <div className='email--icon'>
            <div className='email--text'>Email</div>
              <MdEmail />
            <div className='email--name'>blessing1059@gmail.com</div>
          </div>
          <div className='phone--icon'>
            <div className='phone--text'>Phone</div>
            <FaPhoneAlt/>
            <div className='email--name'>0765142848</div>
          </div>
          <div className='location--icon'>
            <div className='location--text'>Location</div>
            <FaLocationDot/>
            <div className='kzn--text'>Kwazulu-Natal</div>
            <div className='new--text'>Newcastle</div>
          </div>
          <div className='resume--icon'>
          <div className='resume--text'>Resume</div>
            <AiOutlineFilePdf />
            {resume.map((item)=>(
              <Link to={item.resume_Link}>
                <div className='click--text'>click here</div>              
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
