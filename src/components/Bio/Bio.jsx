import './bio.scss'
import svg from './nnneon.svg'
import pdf from "../../assets/AlexeiRusu_Resume.pdf"
import certificate from "../../assets/Certificate-of-Completion.pdf"
import {DiNodejs, DiJavascript1, DiReact, DiPython, DiPostgresql, DiHtml5, DiGithubBadge, DiDjango} from 'react-icons/di';
import {SiTypescript, SiMongodb, SiTailwindcss, SiCsswizardry, SiBootstrap, SiPrisma, SiFigma} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb'; 
import { useState } from 'react';



function Bio(props){
    const [toggle, setToggle] = useState(false)

    function handleClick(){
        setToggle(!toggle)
        console.log(toggle)
    }

    return <section id="about" className="about-container">
        <div  className="title-wrapper">
            <p>about/</p>
        </div>
        <div className="bio-wrapper">
            <div className="text-wrapper">


          
                {/* <p>About me:</p> */}
                {/* <p>my name is Alexei, and I am a <span id="accent" style={{fontWeight: "bolder", textTransform:"uppercase"}}>full-stack web developer</span> with a background in choreography and a <span style={{fontWeight: "bolder"}}>unique perspective</span> to the development process. My combination of technical expertise and <span style={{fontWeight: "bolder"}}>creative vision</span>, honed by my choreographic education, allows me to approach problem-solving and design from a holistic perspective.  I am a team player, looking to integrate technical and artistic elements to create intuitive and visually engaging user experiences that inspire and connect with users. <span style={{color:"lightgreen"}}>Always eager to learn and grow</span> in the exciting field of development.</p>  */}
                {/* fgfgf */}
                <p className={toggle ? "falseStyle" : "trueStyle"}>
                    My name is Alexei, and I am a <span id="accent" style={{}}>FULL-STACK SOFTWARE ENGINEER.</span> 
                Through my experience as a software engineer, I have developed a strong foundation in full-stack web development with JavaScript technologies, including the MERN stack. I have also learned how to apply product development fundamentals, object-oriented programming, data modeling, and team collaboration strategies to create complete web applications with API systems. 
                <br/><br/>
                This portfolio showcases a range of individual and group projects that demonstrate my technical skills and creative vision. 
                <br/><br/>
                My background in choreography has given me a unique perspective on problem-solving and design. I have a passion for integrating technical and artistic elements to create intuitive and visually engaging user experiences that inspire and connect with users. As a professional choreographer and dancer, I have also honed my communication, leadership, and adaptability skills, which are essential for working in dynamic and diverse teams. I am always eager to learn and grow in the exciting field of development.</p> 
                <span className='clampButton' onClick={handleClick}>{toggle ? "close" : "read more"}</span>
                <div className='cred-container'>
                    <a href="mailto:rusualexei1995@gmail.com">&#9993; rusualexei1995@gmail.com</a>
                    <a  href={certificate} target="_blank" > Certification</a>        
                    <a className="download-button" href={pdf} download>&#8681; RESUME</a>           
                </div>

                
                 
                          
                 
            </div>
            <div className="svg-container">
                
                <p>skills<img src={svg} /></p>
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

