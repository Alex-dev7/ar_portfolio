import "./terminal.scss"
import { useState, useEffect } from "react"
import Posts from "../../../json/blogs.json"

function TerminalWindow(props) {

  const [currentId, setCurrentId] = useState(Posts[0]?.id || null); 

  useEffect(() => {
    const handleKeyDown = (event) => {
      const currentIndex = Posts.findIndex((post) => post.id === currentId);

      if (event.key === "ArrowDown") {
        const nextIndex = (currentIndex + 1) % Posts.length; 
        setCurrentId(Posts[nextIndex].id);
      } else if (event.key === "ArrowUp") {
        const prevIndex = (currentIndex - 1 + Posts.length) % Posts.length; 
        setCurrentId(Posts[prevIndex].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentId]);


  return (
    <div className="terminal-window">
        <div className="intro-text-container">
            <p>Use 'Up' 'Down' and 'Return' keys to navigate on this page.</p>
            {/* <p>Type 'help' to see list of available commands.</p> */}
            <p>guest@ubuntu:~$</p>            
        </div>
        <div className='blog-projects-container'>
            <p>Total: {Posts.length}</p>
            <ul className="projects-list">
                {Posts.map((post, index)=> (
                    <li key={post.id} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className={post.id === currentId ? "activeLink" : ""} >
                        <h3>{post.title}</h3><span>{post.date}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="image-window-container">

        </div>
    </div>
  )
}

export default TerminalWindow