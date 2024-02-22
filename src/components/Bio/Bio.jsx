import './bio.scss'
import pdf from "../../assets/AlexeiRusu_Resume.pdf"
import certificate from "../../assets/Certificate-of-Completion.pdf"
import {DiNodejs, DiJavascript1, DiReact, DiPython, DiPostgresql, DiHtml5, DiGithubBadge, DiDjango} from 'react-icons/di';
import {SiTypescript, SiMongodb, SiTailwindcss, SiCsswizardry, SiBootstrap, SiPrisma, SiFigma, SiGraphql, SiExpress} from 'react-icons/si';
import {TbBrandNextjs, TbBrandReactNative, TbBrandFramerMotion} from 'react-icons/tb'; 
import { useState, useEffect, useRef } from 'react';




function Bio(props){
    const [toggle, setToggle] = useState(false)
    const parallaxImageRef = useRef(null);

    function handleClick(){
        setToggle(!toggle)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxImageRef.current) {
                const scrollPosition = window.scrollY;
                parallaxImageRef.current.style.transform = `translateX(${scrollPosition * 3}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <>  

    
   
    <section id="about" className="about-container">
            <div className="parallax-container">
                {/* <img  src={telescope} alt="Image description"/> */}
                <div ref={parallaxImageRef}  className="parallax-image"></div>
            </div>

        
        <div  className="title-wrapper">
            <p>about/</p>
        </div>
        <div className="bio-wrapper">
            <div className="outter-text-wrapper">
                <div className='text-wrapper'>
                    <div className={toggle ? 'falseStyle' : 'trueStyle'}>
                        <p>
                        <span className='introduction'>introduction</span>
                        <br/>
                            Hello, I'm Alexei, a Full-Stack Software Engineer specializing in JavaScript technologies, particularly the MERN stack. My journey in software development has equipped me with a strong foundation in full-stack development and a passion for crafting effortless user experiences.                            
                        </p>

                        
                        <p>
                        <span className='background' >background</span>
                        <br/>
                            Beyond the world of code, my background in choreography adds a unique dimension to my problem-solving and design process. As a professional choreographer and dancer, I've cultivated communication, leadership, and adaptability skills, which are essential for working in dynamic and diverse teams.                            
                        </p>

                    
                        <p>
                            <span className='hobbies' >hobbies</span><br/><br/>
                            <span style={{fontSize: '50px'}}>&#127928;</span><br/>
                            Away from the screen, I am passionate about a varity of hobbies. I have a deep appreciation for music and enjoy spending free time learning to play musical instruments. Additionally, I prioritize my health and wellness by cultivating a healthy diet and maintaining an active lifestyle - a perfect counterbalance to the sedentary nature of software development!                    

                        </p>
                        <p>
                            <span style={{fontSize: '50px'}}>&#9881;</span><br/>
                            I have a fascination with the intricate world of horology. Fixing and restoring old watches is a new hobby of mine that I am quickly becoming enamored with. I find that it not only tests my patience and attention to detail but also connects me with the craftsmanship styles of the past.                        
                        </p>
                        {/* <p>
                            <span style={{fontSize: '50px'}}>&#129302;</span><br/>
                            Beyond that, I enjoy building things with Raspberry Pi, exploring the limitless possibilities of this versatile microcomputer. This hands-on experience fuels my curiosity and allows me to apply my technical skills to creative DIY projects.                        
                        </p> */}
                    </div> 
                    {/* <span className='clampButton' onClick={handleClick} >{toggle ? "read less" : "read more"}</span>       */}
                    <div className='cred-container'>
                        <a href="mailto:rusualexei1995@gmail.com"> my email </a>
                        <a  href={certificate} target="_blank" > certification</a>        
                        <a className="download-button" href={pdf} download>&#8681; RESUME</a>  
            
                    </div>                              
                </div>   
            </div>
            <p className='skills-title'>skills & expertise/</p>
            <div className="svg-container">
                <ul className='skills-list'>
                    <p>Frontend</p>
                    <li><span><DiHtml5/></span> HTML5</li> 
                    <li><span><SiCsswizardry/></span> CSS</li>
                    <li><span><DiJavascript1/> </span>JavaScript</li>  
                     <li><span><SiTypescript/></span> TypeScript</li>  
                    <li><span><DiReact/></span> React</li>  
                    <li><span><TbBrandNextjs/></span> Next.js</li> 
                    <li><span><SiTailwindcss/></span> Tailwind</li>
                    <li><span><SiBootstrap/></span> Bootstrap</li>                      
                </ul>    
                <ul className='skills-list'>
                    <p>Backend</p>
                    <li><span><DiNodejs/></span> Node.js</li> 
                    <li><span><SiExpress/></span> Express </li>  
                    <li><span><DiPython/></span> Python</li>  
                    <li><span><DiDjango/></span> Django</li> 
                    <li><span><DiPostgresql/></span> PostgreSQL</li>  
                    <li><span><SiMongodb/></span> MongoDB</li>  
                    <li><span><SiGraphql /></span>GraphQL</li> 
                    <li><span><SiPrisma/></span> Prisma</li>  
                 </ul>  
                <ul className='skills-list'>
                    <p>Other</p>
                    <li><span><TbBrandReactNative/></span> React Native</li>
                    <li><span><SiFigma/></span> Figma</li>
                    <li><span><TbBrandFramerMotion/></span>FramerMotion</li>
                    <li><span><DiGithubBadge/></span> Git & GitHub</li>
                </ul>           
            </div>
        </div>
    </section>
    </>  
    )
}

export default Bio


// const trueStyle = {
//     lineClamp: 7,
//     // WebkitLineClamp: 7,
//     overflow: 'hidden',
//     display: 'flex',
//     WebkitBoxOrient: 'vertical',
//     gap: '3rem',
//     height: '100%',
// };

// const falseStyle = {
//     lineClamp: 0,
//     // WebkitLineClamp: 0,
//     overflow: 'hidden',
//     display: 'flex',
//     WebkitBoxOrient: 'vertical',
//     gap: '3rem',
//     height: '30%',
// };