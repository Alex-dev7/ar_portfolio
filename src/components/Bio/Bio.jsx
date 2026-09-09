import './bio.scss'
import certificate from "../../assets/Certificate-of-Completion.pdf"
import aws from "../../assets/AWS-Cert.pdf"
import CircleMenu from './components/CircleMenu';
import skills from "../../json/skills.json"
import { useState } from 'react';



function Bio(props){
    const [toggle, setToggle] = useState(false)


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
                                Hi, I'm <span className='accent-text'>Alexei</span>, a <span className='accent-text'>software developer</span> with a growing focus on cybersecurity. I am continuously expanding my skill set and enjoy stepping outside of what I already know to tackle unfamiliar challenges.
                                <br />

                            
                             
                            </p>           
                        </div>

                        <div className='cell-hobbies'>
                            <p>
                                <span className='hobbies' >- hobbies -</span>
                                <br/><br />
                                I always try keeping a balance between creative and active pursuits. I’ve been playing guitar for years, which gives me a creative outlet and a chance to step away from the screen.

                                I also enjoy working on electronics projects and experimenting with hardware, whether it's building or breaking something in the process.

                                Staying active is another important part of my lifestyle. I like working out and spending time outdoors, which helps me stay energized and focused.
       
                                <br/><br/>
                                Additionally, I am a big coffee lover who appreciates a great cup of coffee. ☕
                            </p>                   
                        </div>

                        <div className='cell-background'>
                            <span className='background' >- background -</span>
                            <p>
                                My background in software development has taught me how to turn ideas into practical solutions, while studying cybersecurity has encouraged me to think more critically about how those solutions are built, connected, and protected. 
                            </p>                 
                                
                            <p>
                                <span className='accent-text'>Why is this important?</span> <br />
                                I believe that some of the best solutions come from combining knowledge across different disciplines. 
                            </p> 
                        </div>
                        <div className='cell-cert' onClick={() => setToggle(!toggle)}>
                            <span > certifications</span>  
                           { toggle ?
                            <div className='cert-dropdown-container'>
                                    <a className='item-cert' href={aws} target="_blank" >AWS</a>  

                                    <a className='item-cert' href={certificate} target="_blank" >Software Engineer</a>  
                            </div> : <></>}
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
                <img className='badge' src='aws-badge.png' width={120} alt="aws badge image" />
                <div className='row-a'>
                    <CircleMenu skillsArray={skills[0].skills} list={skills[0].list} title={skills[0].category} />
                    <CircleMenu skillsArray={skills[1].skills} list={skills[1].list} title={skills[1].category} />
                    <CircleMenu skillsArray={skills[2].skills} list={skills[2].list} title={skills[2].category} />
                    {/* <img className='arrow-a' src='node-arrow.svg' alt='arrow' width={300} /> */}
                </div>
                
                <div className='row-b'>
                    <CircleMenu skillsArray={skills[3].skills} list={skills[3].list} title={skills[3].category} />
                    <CircleMenu skillsArray={skills[4].skills} list={skills[4].list} title={skills[4].category} />
                    {/* <img className='arrow-b' src='node-arrow.svg' alt='arrow' width={300} /> */}
                </div>
               
                <div className='row-c'>
                    <CircleMenu skillsArray={skills[5].skills} list={skills[5].list} title={skills[5].category} />
                    {/* <img className='arrow-c' src='node-arrow.svg' alt='arrow' width={300} /> */}
                </div>
                
            </div>
        </div>
    </section>
    </>  
    )
}

export default Bio

