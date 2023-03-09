import about from "../../json/about.json"
import './header.scss'
import { motion as m, transform} from "framer-motion"


//delete the images

function Header(props){

   
    return (
        <m.section
        
        className='header-container'>                   
             <div  className='text-wrapper'>
                    <h2 className="hello" >hello_world</h2>
                    <h1  className="title">I'm Alexei Rusu</h1>
                    <div>
                        <p>full-stack engineer | </p>
                    </div>
                </div>
            
        </m.section>
    )
}

export default Header
