import about from "../../json/about.json"
import './header.scss'
import { motion as m, transform} from "framer-motion"
import { useRef } from "react"
import { useFollowPointer } from "./followPointer"
import Image from './satellite.png'
import Ufo from './ufo.png'

function Header(props){

    // const constraintsRef = useRef(null)
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
   
    return (
        <m.section 
        className='header-container'>
      
                <m.img                     
                 ref={ref}
                     className="box hello"
                     animate={{ x, y }}
                     
                     transition={{
                       type: "spring",
                       damping: 40,
                       stiffness: 40,
                       restDelta: 1
                     }}id="satellite" src={Ufo} />
                    
                <div  className='text-wrapper'>
                    <m.h2 className="hello" >hello_world</m.h2>
                    <h1  className="title">I'm Alexei Rusu</h1>
                    <div>
                        <p>full-stack engineer | </p>
                    </div>
                </div>
            
        </m.section>
    )
}

export default Header
