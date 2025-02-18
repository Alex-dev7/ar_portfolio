import './nav.scss'
import { container, item } from './animation'
import {motion as m } from 'framer-motion'
import { useState } from 'react'


function Nav({setElementHovered}) {
const {toggle, setToggle} = useState(false)


const handleMouseEnter = (e) => {
    setElementHovered(e.target.innerText);
}



    return (
        <div>
            
            <div className='socials-wrapper'>
                
                <a href="https://github.com/Alex-dev7" target="_blank" >
                    <img src='github.svg' width={30} height={30}/>
                </a>
                <a href="https://www.linkedin.com/in/alexei-rusu-dev/" target="_blank">
                     <img src='linkedin.svg' width={30} height={30}/>
                </a>
              
            </div>
            <m.nav variants={container} initial={"hidden"}
            animate="show" className='nav-container'>
                <a  href="#about" onMouseEnter={handleMouseEnter}>
                    <m.div variants={item} >about</m.div>    
                </a> 
                <a href="#work" >
                    <m.div variants={item} >work</m.div>    
                </a> 
                <a href="https://docs.google.com/document/d/1_u7fTIbalKg1xV9sb57bnsyPFXR-3FQb1tBLGiKst4E/edit?usp=sharing"  target="_blank" >
                    <m.div variants={item}>resume</m.div>    
                </a> 
                <a  href="#contact" onClick={() => setToggle(true)}>
                    <m.div variants={item} >contact </m.div>    
                </a> 
            </m.nav>
        </div>
    )
}

export default Nav