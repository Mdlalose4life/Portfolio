import React from 'react';
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import Divider from '@mui/material/Divider';
import PythonPointer from './Gauges/PythonGauge';
import SharpPoiner from './Gauges/SharpGauge';
import ScriptGuge from './Gauges/ScriptGauge';
import Button from '@mui/material/Button';
import { HiAcademicCap } from "react-icons/hi2";

const About_me = [
  {
    AboutMeName: 'Sbusiso Mdlalose',
    description: 'I am a skilled Software Engineer driven by innovation and a commitment to excellence. With a strong foundation in software development from ALX Academy and hands-on experience at LM Studios, I specialize in designing and optimizing operational systems to streamline processes and exceed client expectations. My proficiency spans Python, JavaScript, SQL, and NoSQL databases, enabling me to tackle complex challenges with precision and creativity. '
  }
];

const Certficates = [
  {
    name: 'Certficate :',
    cert_Name: 'Software Engineering' 
  }
  ];
const Country = [
  {
    name: 'Country:',
    countyName: 'South Africa'
  }];

const Github = [
  {
    name: 'Github:',
    GithubName: 'Github',
    link: 'https://github.com/Mdlalose4life'
  }];

const Availability = [
  {
    name: 'Avalability:',
    status: 'Immediately',
  }];

const About = () => {
  return (
    <div className='AboutMe--Page--tittle'>
      <div className='About--tittle'>
        <Typography variant='h5'>About Me</Typography>
      </div>
        <Divider />
      <div className='about--me--container'>
        {About_me.map((item, index) => (
          <div className='about--me--card' key={`about-me-${index}`}>
            <Typography variant='h6'>{item.AboutMeName}</Typography>
            <Divider />
            <div className='description--controller'>
              <p>{item.description}</p>    
            </div>
          </div>
        ))}
        <div className='info--Controller'>
          <div className='cards--and--button--controler'>
            <div className='cards--info'>
              <div className='certificate--and--country--controler'>
                {Certficates.map((item)=>(
                  <div className='certificate--controller'>
                    <Typography variant='h5'>{item.name}</Typography>
                    <Typography variant='h7'>{item.cert_Name}</Typography>
                    <Typography variant='h7'>AI Career Essentials</Typography> 
                    <Divider />
                  </div>
                ))}
                {Country.map((item)=>(
                  <div className='country--controller'>
                    <Typography variant='h5'>{item.name}</Typography>
                    <Typography>{item.countyName}</Typography>
                    <Divider />
                  </div>
                ))}
                </div>
                <div className='github--and--availability--controller'>
                  {Github.map((item)=>(
                    <div className='github--controller'>
                      <Typography variant='h5'>{item.name}</Typography>
                      <Link to={item.link}>
                        <Typography>{item.GithubName}</Typography>
                      </Link>
                      <Divider />
                    </div>
                    ))}
                    {Availability.map((item)=>(
                      <div className='availability--controller'>
                        <Typography variant='h5'>{item.name}</Typography>
                        <Typography>{item.status}</Typography>  
                        <Divider /> 
                    </div>
                  ))}
                </div>    
            </div>
            <div className='button--controller'>
              <Link to="/contact" >
                <Button variant="contained" color="success">
                    hire me
                </Button>
              </Link>
            </div> 
          </div>     
          <div className='Gauges--controller'>
            <div className='C--gauge'>
              <PythonPointer />
                Python (98%)
            </div>
            <div className='python--gauge'>
              <SharpPoiner />
                Javascript (96%)
            </div>
            <div className='Java--gauge'>
              <ScriptGuge/>
                C# (90%)
            </div>
          </div>
        </div>
        <div className='education-and-experience'>
          <div className='Education--tittle--and--card'>
            <div className='Education--title'>
              <div className='edication--icon'>
              <HiAcademicCap />
              </div>
              <Typography variant="h5">Education</Typography>
            </div>
            <div className='education--card--controler'>
              <div className='vertical-line'>
                <div className='Education--content'>
                  <div className='Matric--controler'>
                    <div className='circle'></div>
                    <div> <h4>Matric (Maths And Science)</h4> </div>
                    <time datetime="2016/12/1"> Duck pond's High School &ndash; 2016 </time>
                  </div>
                  <div className='Soft--controller'>
                    <div className='circle'></div>
                    <div> <h4>Software Engineering</h4> </div>
                    <time datetime="2016/12/1"> ALX (Hulbetortorn School) &ndash; 2023 </time>                    
                  </div>
                  <div className='AI--controller'>
                    <div className='circle'></div>
                    <div> <h4>AI Career Essentials</h4> </div>
                    <time datetime="2016/12/1">ALX (Hulbetortorn School) &ndash; 2024 </time>
                  </div>
                </div>             
              </div>
            </div>
          </div>
          <div className='Expience--title--and--controler'>
            <div className='experience--title'>
              <div className='experience--icon'>
                <HiMiniPresentationChartLine />
              </div>
              <Typography variant="h5">Experience</Typography>
            </div>
            <div className='experience--card--controller'>
              <div className='Experience--title'>
                <h3>Junior Software Developer</h3>
              </div>
              <div className='vertical-line '>
                <div className='content'>
                  <div className='componany-name--and--date--controller'>
                    <div className='company--name'>
                        <div className='circle'></div>
                        <div> <h4>LM Studio</h4></div>
                    </div>
                    <time datetime="2022/08/16" className='exp--date'>2022 &ndash; Present</time>
                    <div className='description--controller'>
                      <ul>
                        <li>Enhanced LM Studios' operational system,
                          leading to seamless studio management across
                          10 diverse locations and improved overall efficiency.</li>
                          <br/>
                        <li>Optimized workflow efficiency by leading the successful 
                          integration of appointment scheduling and image processing 
                          features, cutting down editing processes by 50% and boosting 
                          overall client service productivity.</li>
                          <br/>
                        <li>Customized over 100 client packages, resulting in a 20% 
                          increase in customer satisfaction and retention.</li>
                          <br/>
                            <li>Implemented C# with Visual Studio Community and .NET Core
                               to optimize backend processes, resulting in a 40% reduction 
                               in server response time and a 25% increase in system efficiency,
                               thereby enhancing overall system performance and productivity.
                             </li>
                      </ul>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
