import { useRef } from "react"
import projects from "../../json/projects.json"
import './projects.scss'
import { motion as m} from "framer-motion"
import {
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,

   
  } from "framer-motion";
import { wrap } from "framer-motion"
import { Link } from "react-router-dom"


console.log(projects)

//----------------------------------------------------------------
function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);
  // `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <m.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>

      </m.div>
    </div>
  );
}
//----------------------------------------------------------------
function Projects(props) {

  

    return <section className="projects-container" id="work">
        <section >
            <ParallaxText baseVelocity={3} >my_work</ParallaxText>
        </section>
        
        {
        projects.map((project) => 
        (
            <m.div
            initial={{ opacity: 0, x: "40%"}}
            transition={{duration: 0.8, ease: "easeOut", delay: .2 }}
            whileInView={{ opacity: 1, x: "0%",}}
            viewport={{ once: true, }}
            className={`project-card ${project.class}`} key={project.title} >
           
               <div className='column1'>
                    
                    <Link className="title" to={`/show/${project.id}`}>
                        <img src={project.desktopImage} alt="site screenshot" referrerpolicy="no-referrer"/>  
                    </Link>                    
                </div>

                <div className='column2'>
                    <Link className="title" to={`/show/${project.id}`}>
                        <p>{project.title}</p>
                    </Link>  
                  <div className="links-wrapper">
                    <a  href={project.repo} target="_blank"  >Source code -{'>'}</a>
                    <a  href={project.live} target="_blank">Live Site</a>    
             
                  </div>
                  <div className="skills">
                    {
                      project.skills.map( skill => (
                        <p>{skill}</p>
                      ))
                    }  
                    </div>   
                </div>  
            </m.div>
           )
          )
        }
        
    </section>
}

export default Projects