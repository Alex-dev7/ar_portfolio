import './nav.scss'
import { container, item } from './animation'
import {motion as m } from 'framer-motion'
import { ToggleContext } from '../../context/ToggleContext'
import { useContext } from 'react';


function Nav() {
const { toggle, changeToggle } = useContext(ToggleContext);


// const handleMouseEnter = (e) => {
//     setElementHovered(e.target.innerText);
// }



    return (
        <div>
            <m.nav variants={container} initial={"hidden"}
            animate="show" className='nav-container'>
                <a  href="#about" >
                    <m.div variants={item} >about.</m.div>    
                </a> 
                <a href="#work" >
                    <m.div variants={item} >projects.</m.div>    
                </a> 
                <a href="/blog" id='blog-link' >
                    <m.div variants={item} >blog.</m.div>    
                </a> 
                <a href="/games" id='games-link'>
                    <m.div variants={item} >games</m.div>    
                </a> 
                <a href="https://docs.google.com/document/d/1_u7fTIbalKg1xV9sb57bnsyPFXR-3FQb1tBLGiKst4E/edit?usp=sharing"  target="_blank" >
                    <m.div variants={item}>resume.</m.div>    
                </a> 
                <a  href="#" onClick={changeToggle}>
                    <m.div variants={item} >contact. </m.div>    
                </a> 
            </m.nav>
        </div>
    )
}

export default Nav