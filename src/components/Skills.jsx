import React from 'react'
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { CiDesktop } from "react-icons/ci";
import { SiAzuredevops } from "react-icons/si";
import { IoCodeSlashSharp  } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { FaPhoenixFramework } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../styles/skills.css'


const skills = [
  {
    title: 'Programming Languages',
    icons: <CiDesktop/>,
    des: 'C#, shell, C-Programming, Python, Javascript, ASP.NET and Ruby'
  },
  {
    title: 'Frotend',
    icons: <IoCodeSlashSharp  />,
    des: 'HTML, CSS and React'
  },
  {
    title: 'Database',
    icons: <FaDatabase />,
    des: 'MySQL, SQLite Microsoft SQL Server, Mongodb and Redis'
  },
  {
    title: 'Devops',
    icons: <SiAzuredevops/>,
    des: 'Linux/Unix commands, Datadog, puppet, Docker, and Azure'
  },
  {
    title: 'Frameworks',
    icons: <FaPhoenixFramework />,
    des: 'Django, flask, React, .NET Framework and Express'
  },
  {
    title: 'Version Control',
    icons: <FaGithub/>,
    des: 'git and github'
  }
]
const Skills = () => {
  return (
    <div className='skills--page--tittle'>
      <Typography variant='h4'>Skills</Typography>
      <Divider/>
    <div className='skills--container'>
      {skills.map((item) => (
        <div className="skills">
          <div className='skills--cover'>{item.icons}</div>
          <div className='skills--title'>
            <Typography variant='h5'>{item.title}</Typography>
          </div>
          <Typography variant='h7'>{item.des}</Typography>
        </div>
      ))}
    </div>
    </div>
  )
};

export default Skills
