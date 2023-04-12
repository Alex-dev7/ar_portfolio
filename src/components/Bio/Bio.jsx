import './bio.scss'
import svg from './nnneon.svg'
import pdf from "../../assets/AlexeiRusu_Resume2023.pdf"
import { TfiEmail  } from 'react-icons/tfi';
import {DiNodejs, DiJavascript1, DiReact, DiPython, DiPostgresql, DiHtml5, DiGithubBadge, DiDjango} from 'react-icons/di';
import {SiTypescript, SiMongodb, SiTailwindcss, SiCsswizardry, SiBootstrap, SiPrisma, SiFigma} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb'; 

function Bio(props){

    return <section id="about" className="about-container">
        <div  className="title-wrapper">
            <p>about/</p>
        </div>
        <div className="bio-wrapper">
            <div className="text-wrapper">
                <hr />
                <p>About me:</p>
                <p>my name is Alexei, and I am a <span id="accent" style={{color: "tomato", textTransform:"uppercase"}}>full-stack web developer</span> with a background in choreography and a <span style={{color: "rgb(0, 221, 255)"}}>unique perspective</span> to the development process. My combination of technical expertise and <span style={{color: "yellow"}}>creative vision</span>, honed by my choreographic education, allows me to approach problem-solving and design from a holistic perspective.  I am a team player, looking to integrate technical and artistic elements to create intuitive and visually engaging user experiences that inspire and connect with users. <span style={{color:"lightgreen"}}>Always eager to learn and grow</span> in the exciting field of development.</p> 
                 <a href="mailto:rusualexei1995@gmail.com"><TfiEmail/> rusualexei1995@gmail.com</a> 
                 <a className="download-button" href={pdf} download>&#8681; RESUME</a>
                <hr/>               
                 
            </div>
            <div className="svg-container">
                <img src={svg} />
                <p>skills</p>
                <ul className='skills-list'>
                 
                 
                    <li><span><DiJavascript1/> </span>JavaScript</li>  
                    <li><span><DiNodejs/></span> Node.js</li>  
                    <li><span><DiPython/></span> Python</li>  
                    <li><span><DiHtml5/></span> HTML5</li>  
                    <li><span><DiReact/></span> React</li>  
                    <li><span><TbBrandNextjs/></span> Next.js</li> 
                    <li><span><DiDjango/></span> Django</li> 
                    <li><span><DiPostgresql/></span> PostgreSQL</li>  
                    <li><span><SiMongodb/></span> MongoDB</li>  
                    <li><span><SiTypescript/></span> TypeScript</li>  
                    <li><span><SiPrisma/></span> Prisma</li>  
                    <li><span><SiCsswizardry/></span> CSS</li>
                    <li><span><SiTailwindcss/></span> Tailwind</li>
                    <li><span><SiBootstrap/></span> Bootstrap</li>
                    <li><span><SiFigma/></span> Figma</li>
                    <li><span><DiGithubBadge/></span> Git&GitHub</li>

                </ul>             
            </div>
          
        </div>

        
    </section>
}

export default Bio

