import './blog.scss'
import { Link } from "react-router-dom";
import TerminalWindow from "./components/TerminalWindow";


function Blog(props) {

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
