import { useEffect, useState } from "react"
import projects from "../../json/projects.json"
import './projects.scss'
import { motion as m} from "framer-motion"
import { Link } from "react-router-dom"

// import { ProjectsContainer, ProjectCard, ProjectImage } from "../../styledcomponents/Projects"



function Projects(props) {
  

    return <m.section

    className="projects-container">
        <h1 className="work-title">my_work</h1>
        {
        projects.map((project) => 
         
        (
            
         
            <m.div
            initial={{ opacity: 0, x: 900 ,duration: 9000}}
            whileInView={{ opacity: 1, x: 0  }}
            viewport={{ once: true }} className={`project-card ${project.class}`} key={project.title} >
             
               <div className='column1'>
                    <img src={project.image} />                    
                </div>

                <div className='column2'>
                    <Link className="title" to={`/show/${project.id}`}>
                        <h3>{project.title}</h3>
                    </Link>
                    
                  <div>
                    <a  href={project.repo} >GitHub</a>
                    <a  href={project.live} >Live Site</a>                    
                  </div>

                </div>  
               
                


            </m.div>
            
        )

        )
        }
    </m.section>
}

export default Projects