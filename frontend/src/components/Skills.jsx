import Divider from '@mui/material/Divider';
import { CiDesktop } from "react-icons/ci";
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiMysql, SiMongodb, SiRedis, SiStrapi, SiLinux, SiPuppet, SiDocker, SiDjango, SiFlask, SiExpress, SiGithub, } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import '../styles/skills.css'

const skills = [
  {
    title: 'Programming Languages',
    icons: <CiDesktop />,
    des: [
      { icon: <SiPython />, label: 'Python' },
      { icon: <SiJavascript />, label: 'JavaScript' },
    ]
  },
  {
    title: 'Frontend',
    icons: <SiHtml5 />,
    des: [
      { icon: <SiHtml5 />, label: 'HTML' },
      { icon: <SiCss3 />, label: 'CSS' },
      { icon: <SiReact />, label: 'React' },
      { icon: <SiNextdotjs />, label: 'Next.js' },
    ]
  },
  {
    title: 'Database',
    icons: <SiMysql />,
    des: [
      { icon: <SiMysql />, label: 'MySQL' },
      { icon: <SiMongodb />, label: 'MongoDB' },
      { icon: <SiRedis />, label: 'Redis' },
      { icon: <SiStrapi />, label: 'Strapi' },
    ]
  },
  {
    title: 'DevOps',
    icons: <SiLinux />,
    des: [
      { icon: <SiLinux />, label: 'Linux' },
      { icon: <SiPuppet />, label: 'Puppet' },
      { icon: <SiDocker />, label: 'Docker' },
    ]
  },
  {
    title: 'Frameworks',
    icons: <SiDjango />,
    des: [
      { icon: <SiDjango />, label: 'Django' },
      { icon: <SiFlask />, label: 'Flask' },
      { icon: <SiReact />, label: 'React' },
      { icon: <SiNextdotjs />, label: 'Next.js' },
      { icon: <SiExpress />, label: 'Express' },
    ]
  },
  {
    title: 'Version Control',
    icons: <SiGithub />,
    des: [
      { icon: <FaGitAlt />, label: 'Git' },
      { icon: <SiGithub />, label: 'GitHub' },
    ]
  }
];

const Skills = () => {
  return (
    <div className='skills--page--title'>
      <h1>Skills</h1>
      <Divider />
      <div className='skills--container'>
        {skills.map((item, index) => (
          <div className="skills" key={index}>
            <div className='skills--cover'>{item.icons}</div>
            <div className='skills--title'>
              <h5>{item.title}</h5>
            </div>
            <div className='skills--description'>
              {item.des.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill.icon}
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Skills;
