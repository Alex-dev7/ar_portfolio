import blogs from "../../json/blogs.json"
import './blog.scss'
import {useState, useEffect} from "react"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import TerminalWindow from "./components/TerminalWindow";


function Blog(props) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [classN, setClassN] = useState("cursor")


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    }
  }

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");
  const textEnter = () => setClassN("pointer")
  const textLeave = () => setClassN("cursor")

  return (
    <section className="blog-container">
      <Link id="home-button" to={`/`} onMouseEnter={textEnter} onMouseLeave={textLeave}>
        exit
      </Link>
      <motion.div
        className={classN}
        variants={variants}
        animate={cursorVariant}
      />
      <div className="title-container">
        <pre className="ascii-title">
                                                                                             
          <code> 
             {`
██████╗ ██╗      ██████╗  ██████╗ 
██╔══██╗██║     ██╔═══██╗██╔════╝ 
██████╔╝██║     ██║   ██║██║  ███╗
██╔══██╗██║     ██║   ██║██║   ██║
██████╔╝███████╗╚██████╔╝╚██████╔╝
╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
              `}
          </code>                                                                                                 
        </pre>
        <span className="version">v1.0.0</span>
      </div>
      <TerminalWindow onMouseEnter={textEnter} onMouseLeave={textLeave}/>
    </section>
  )
}


export default Blog
