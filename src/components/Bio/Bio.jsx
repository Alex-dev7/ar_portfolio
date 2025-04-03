import './bio.scss'
import certificate from "../../assets/Certificate-of-Completion.pdf"
import { useState} from 'react';
import CircleMenu from './components/CircleMenu';
import skills from "../../json/skills.json"


function Bio(props){
    const [toggle, setToggle] = useState(false)



    function handleClick(){
        setToggle(!toggle)
    }


    return (
    <>  
    <section id="about" className="about-container">
        
        <div  className="title-wrapper">
            <p>about me</p>
        </div>
        <div className="bio-wrapper">
            <div className="outter-text-wrapper">
                <div className='text-wrapper'>
                    <div className="text-container">

                        <div className='cell-introduction'>
                            <span className='introduction'>- introduction -</span>
                            <br/>
                            <p>
                                <br/>
                                Hi, I'm <span className='accent-text'>Alexei</span>, a <span className='accent-text'>software developer</span> with a background in performing arts. <br/><br/>
                                
                                 I combine technical expertise with a creative problem-solving to bring unique perspectives to the development process.
                                
                                {/* My journey in software development has equipped me with a strong foundation in full-stack development and a passion for crafting effortless user experiences.                                    */}
                            </p>           
                        </div>

                        <div className='cell-hobbies'>
                            <span className='hobbies' >- hobbies -</span>
                            <br/>
                            <p>
                            I am passionate about a varity of hobbies, a really exciting one is building IoT projects ⚙️ with Raspberry Pi and Arduino, and exploring the limitless possibilities of these versatile microcomputers. This hands-on experience fuels my curiosity and allows me to apply my technical skills to creative DIY projects.
                            {/* <hr/> */}
                            {/* <br/><br/> */}
                            <a href={'/blog'} className='link'>see more here ↗</a>
                            <br/><br/>
                            Additionally, I am a big coffee lover who appreciates a great cup of coffee. 
                            </p>                   
                        </div>

                        <div className='cell-background'>
                            <span className='background' >- background -</span>
                            <p>
                                Beyond the world of code, my background in choreography adds a unique dimension to my problem-solving and design process. As a professional choreographer and dancer, I've cultivated communication, leadership, and adaptability skills, which are essential for working in dynamic and diverse teams.                                   
                            </p>                      
                        </div>
                        <div className='cell-cert'>
                            <a  href={certificate} target="_blank" > certification</a>  
                        </div>
                        <div className='cell-res'>
                            <a  href="https://docs.google.com/document/d/1_u7fTIbalKg1xV9sb57bnsyPFXR-3FQb1tBLGiKst4E/edit?usp=sharing"  target='_blank'>resume</a> 
                        </div>

                        
                    </div> 
                       
                </div>   
            </div>
            
            <p className='skills-title'>skills and expertise</p>
            
            <div className="svg-container">
                <img className='hover-over' src='hover-over.svg' alt='hover-over' width={40} />
                <div className='row-a'>
                    <CircleMenu skillsArray={skills[0].skills} title={skills[0].category}/>
                    <CircleMenu skillsArray={skills[1].skills}  title={skills[1].category}/>
                    <CircleMenu skillsArray={skills[2].skills}  title={skills[2].category}/>
                    {/* <img className='arrow-a' src='node-arrow.svg' alt='arrow' width={300} /> */}
                </div>
                
                <div className='row-b'>
                    <CircleMenu skillsArray={skills[3].skills} title={skills[3].category}/>
                    <CircleMenu skillsArray={skills[4].skills} title={skills[4].category}/>
                    {/* <img className='arrow-b' src='node-arrow.svg' alt='arrow' width={300} /> */}
                </div>
               
                <div className='row-c'>
                    <CircleMenu skillsArray={skills[5].skills} title={skills[5].category}/>
                    {/* <img className='arrow-c' src='node-arrow.svg' alt='arrow' width={300} /> */}
                </div>
                
                
            </div>
        </div>
    </section>
    </>  
    )
}

export default Bio

{/* <ul className='skills-list'>
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
</ul>   */}
