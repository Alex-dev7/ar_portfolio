import './nav.scss'
import { container, item } from './animation'
import {motion as m } from 'framer-motion'
import pdf from './rusu-alexei-Resume.pdf'
import { FaLinkedin, FaGithub  } from 'react-icons/fa';

function Nav(props){



    return (
        <>
            <div className='socials-wrapper'>
                
                <a href="https://github.com/Alex-dev7" target="_blank" >
                    <FaGithub size={30} color={"white"}/>
                </a>
                <a href="https://www.linkedin.com/in/alexei-rusu-dev/" target="_blank">
                    <FaLinkedin size={30} color={"white"}/>
                </a>
              
            </div>
            <m.nav variants={container} initial={"hidden"}
            animate="show" className='nav-container'>
                <a  href="#about" >
                    <m.div variants={item} >about</m.div>    
                </a> 
                <a href="#work" >
                    <m.div variants={item} >work</m.div>    
                </a> 
                <a href="#"  target="_blank" >
                    <m.div variants={item}>resume</m.div>    
                </a> 
                <a  href="#contact-link" boolean={true} >
                    <m.div variants={item} >contact </m.div>    
                </a> 
            </m.nav>
        </>
    )
}

export default Nav