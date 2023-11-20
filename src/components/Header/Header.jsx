import './header.scss'
import { motion as m, transform} from "framer-motion"
import mouse from '../../assets/scroll-down.png'


function Header(props){

   
    return (
        <m.section
        id="header"
        className='header-container'> 
            <img src={mouse} alt='scroll down'  className='mouse'/>              
            <div  className='text-wrapper'>
                    <h2 className='hello'>Hi,</h2>
                    <h1  className="title">I<span>'</span>m Alexei Rusu</h1>
                    <h2 className="hello" >full-stack software engineer</h2>
            </div>
           
        </m.section>
    )
}

export default Header
