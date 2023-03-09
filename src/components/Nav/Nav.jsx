import './nav.scss'
import { container, item } from './animation'
import {motion as m } from 'framer-motion'

function Nav(props){

    return (
        <>
            <m.nav variants={container} initial={"hidden"}
            animate="show" className='nav-container'>
                <a  href="" >
                    <m.div variants={item} >about</m.div>    
                </a> 
                <a href="" >
                    <m.div variants={item} >work</m.div>    
                </a> 
                <a variants={item} href="" >
                    <m.div variants={item} >resume</m.div>    
                </a> 
                <a variants={item} href="" >
                    <m.div variants={item} >contact </m.div>    
                </a> 
            </m.nav>
        </>
    )
}

export default Nav