import { useRef, useState, useEffect } from "react"
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


const filterLinks = ["All", "Full Stack", "Frontend", "Mobile App", "CMS"]


//----------------------------------------------------------------
function Projects(props) {
  const [filteredData, setFilteredData] = useState([])
  const [searchWord, setSearchWord] = useState('All')

  function handleClick(e) {
    // console.log(e.target.innerText)
    // console.log(projects)
    setSearchWord(() => e.target.innerText)
  }

  useEffect(() => {
    const data = projects.filter( x => searchWord === 'All' ? projects : x.categorie.includes(searchWord))
    setFilteredData(data)


  }, [searchWord])

    return (
      <section className="projects-container" id="work">
        <section className="parallax-container">
          <ParallaxText baseVelocity={3}>my_work</ParallaxText>
        </section>

        <ul className="categories-container">
          {filterLinks.map((link) => (
            <li key={link} onClick={handleClick}>
              {link}
            </li>
          ))}
        </ul>

        {filteredData.length !== 0 ? (
          filteredData?.map((project) => (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              className={`project-card ${project.class}`}
            >
              <div className="column1">
                <Link className="title" to={`/show/${project.id}`}>
                  <img
                    src={project.thumbnail}
                    width={300}
                    height={300}
                    alt="site screenshot"
                    referrerPolicy="no-referrer"
                  />
                </Link>
              </div>

              <div className="column2">
                <Link className="title" to={`/show/${project.id}`}>
                  <p>{project.title}</p>
                </Link>
                <div className="links-wrapper">
                  <a href={project.repo} target="_blank">
                    Source code -{">"}
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank">
                      Live Site
                    </a>
                  )}
                </div>
                <div className="skills">
                  {project.skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                  ))}
                </div>
              </div>
            </m.div>
          ))
        ) : (
          <p
            style={{
              width: "100vw",
              textAlign: "center",
              color: "darkcyan",
              fontSize: "2rem",
            }}
          >
            In development...
          </p>
        )}
      </section>
    );
}

export default Projects