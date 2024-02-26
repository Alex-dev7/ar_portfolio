import './nav.scss'
import { container, item } from './animation'
import {motion as m } from 'framer-motion'
import pdf from '../../assets/AlexeiRusu_Resume.pdf'


function Nav(props){



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
                <a  href="#about" >
                    <m.div variants={item} >➀ about</m.div>    
                </a> 
                <a href="#work" >
                    <m.div variants={item} >➁ work</m.div>    
                </a> 
                <a href={pdf}  target="_blank" >
                    <m.div variants={item}>➂ resume</m.div>    
                </a> 
                <a  href="#contact-link">
                    <m.div variants={item} >➃ contact </m.div>    
                </a> 
            </m.nav>
        </div>
    )
}

export default Nav