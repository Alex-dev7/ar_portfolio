import './header.scss'
import { motion as m, transform} from "framer-motion"


//delete the images

function Header(props){

   
    return (
        <m.section
        id="header"
        className='header-container'>                   
             <div  className='text-wrapper'>
                    <h2 className="hello" >full-stack software engineer</h2>
                    <h1  className="title">I<span>'</span>m Alexei Rusu</h1>
                    <div>
                        <p></p>
                         <p> </p>
                    </div>
                </div>
            
        </m.section>
    )
}

export default Header
