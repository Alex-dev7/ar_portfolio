import "./terminal.scss"

function TerminalWindow(props) {
  return (
    <div className="terminal-window">
        <div className="intro-text-container">
            <p>Type 'help' to see list of available commands.</p>
            <p>guest@ubuntu:~$</p>            
        </div>
        <div className='blog-projects-container'>
            <p>Total: 4</p>
            <ul className="projects-list">
                <li onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
                    <h3>Project Title</h3><span>FEB 24</span>
                </li>
                <li onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
                    <h3>Project Title</h3><span>JAN 25</span>
                </li>
                <li onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
                    <h3>Project Title</h3><span>DEC 24</span>
                </li>
                <li onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
                    <h3>Project Title</h3><span>SEP 24</span>
                </li>
            </ul>
        </div>
        <div className="image-window-container">

        </div>
    </div>
  )
}

export default TerminalWindow