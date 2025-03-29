import blogs from "../../json/blogs.json"
import './blog.scss'
import {useState, useEffect} from "react"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import TerminalWindow from "./components/TerminalWindow";


function Blog(props) {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");
  // const [classN, setClassN] = useState("cursor")


  // const textEnter = () => setClassN("pointer")
  // const textLeave = () => setClassN("cursor")
  return (
    <section className="blog-container">
      <Link id="home-button" to={`/`} >
        exit
      </Link>
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
      <TerminalWindow />
    </section>
  )
}


export default Blog
