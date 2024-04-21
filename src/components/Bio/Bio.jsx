import './bio.scss'
import certificate from "../../assets/Certificate-of-Completion.pdf"
import { useState, useRef } from 'react';




function Bio(props){
    const [toggle, setToggle] = useState(false)
    const parallaxImageRef = useRef(null);

    function handleClick(){
        setToggle(!toggle)
    }


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
                    <p className={toggle ? 'falseStyle' : 'trueStyle'}>
                        
                        <span className='introduction'>introduction</span>
                        <br/>
                            Hello, I'm Alexei, a Full-Stack Software Engineer specializing in JavaScript technologies, particularly the MERN stack. My journey in software development has equipped me with a strong foundation in full-stack development and a passion for crafting effortless user experiences.                            
                        <br/><br/>

                        
                        
                        <span className='background' >background</span>
                        <br/>
                            Beyond the world of code, my background in choreography adds a unique dimension to my problem-solving and design process. As a professional choreographer and dancer, I've cultivated communication, leadership, and adaptability skills, which are essential for working in dynamic and diverse teams.                            
                        <br/><br/>

                    
                       
                        <span className='hobbies' >hobbies</span><br/><br/>
                        <span style={{fontSize: '50px'}}>&#127928;</span><br/>
                            Away from the screen, I am passionate about a varity of hobbies. I have a deep appreciation for music and enjoy spending free time learning to play musical instruments. Additionally, I prioritize my health and wellness by cultivating a healthy diet and maintaining an active lifestyle - a perfect counterbalance to the sedentary nature of software development!                    
                        <br/><br/>
                       
                        
                        <span style={{fontSize: '50px'}}>&#9881;</span><br/>
                            I have a fascination with the intricate world of horology. Fixing and restoring old watches is a new hobby of mine that I am quickly becoming enamored with. I find that it not only tests my patience and attention to detail but also connects me with the craftsmanship styles of the past.                        
                        <br/><br/>
                        {/* <p>
                            <span style={{fontSize: '50px'}}>&#129302;</span><br/>
                            Beyond that, I enjoy building things with Raspberry Pi, exploring the limitless possibilities of this versatile microcomputer. This hands-on experience fuels my curiosity and allows me to apply my technical skills to creative DIY projects.                        
                        </p> */}
                        
                    </p> 
                        <span className='clampButton' onClick={handleClick} >{toggle ? "read less" : "read more"}</span>  
                    <div className='cred-container'>
                        {/* <a href="mailto:rusualexei1995@gmail.com"> email ✉️</a> */}
                        <a className="download-button" href={certificate} target="_blank" > certification</a>        
                        <a className="download-button" href="https://docs.google.com/document/d/1_u7fTIbalKg1xV9sb57bnsyPFXR-3FQb1tBLGiKst4E/edit?usp=sharing"  target='_blank'>resume</a>  
                    </div>                              
                </div>   
            </div>
            
            <p className='skills-title'>skills & expertise/</p>
            <div className="svg-container">
                <ul className='skills-list'>
                    <p>Frontend</p>
                    <li><span><img src='html.svg' width={20} height={20}/></span> HTML5</li> 
                    <li><span><img src='css.svg' width={20} height={20}/></span> CSS</li>
                    <li><span><img src='js.svg' width={20} height={20}/> </span>JavaScript</li>  
                     <li><span><img src='ts.svg' width={20} height={20}/></span> TypeScript</li>  
                    <li><span><img src='react.svg' width={20} height={20}/></span> React</li>  
                    <li><span><img src='next.svg' width={20} height={20}/></span> Next.js</li> 
                    <li><span><img src='tailwind.svg' width={20} height={20}/></span> Tailwind</li>
                    <li><span><img src='boot.svg' width={20} height={20}/></span> Bootstrap</li>                      
                </ul>    
                <ul className='skills-list'>
                    <p>Backend</p>
                    <li><span><img src='node.svg' width={20} height={20}/></span> Node.js</li> 
                    <li><span><img src='ex.svg' width={20} height={20}/></span> Express </li>  
                    <li><span><img src='py.svg' width={20} height={20}/></span> Python</li>  
                    <li><span><img src='dj.svg' width={20} height={20}/></span> Django</li> 
                    <li><span><img src='postgre.svg' width={20} height={20}/></span> PostgreSQL</li>  
                    <li><span><img src='mongo.svg' width={20} height={20}/></span> MongoDB</li>  
                    <li><span><img src='graph.svg' width={20} height={20}/></span>GraphQL</li> 
                    <li><span><img src='prisma.svg' width={20} height={20}/></span> Prisma</li>  
                 </ul>  
                <ul className='skills-list'>
                    <p>Other</p>
                    <li><span><img src='react.svg' width={20} height={20}/></span> React Native</li>
                    <li><span><img src='figma.svg' width={20} height={20}/></span> Figma</li>
                    <li><span><img src='framer.svg' width={20} height={20}/></span>FramerMotion</li>
                    <li><span><img src='github.svg' width={20} height={20}/></span> Git & GitHub</li>
                    <li><span><img src='openai.svg' width={18} height={18}/></span> OpenAI API</li>
                    <li><span><img src='docker.svg' width={20} height={20}/></span> Docker</li>
                </ul>           
            </div>
        </div>
    </section>
    </>  
    )
}

export default Bio

