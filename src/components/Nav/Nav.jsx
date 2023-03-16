import './nav.scss'
import { container, item } from './animation'
import {motion as m } from 'framer-motion'
import pdf from './rusu-alexei-Resume.pdf'

function Nav(props){



    return (
        <>
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