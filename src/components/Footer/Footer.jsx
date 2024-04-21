import './footer.scss'
import ContactForm from '../Contact/ContactForm'
import pdf from '../../assets/AlexeiRusu_Resume.pdf'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Footer(props){

    const [toggle, setToggle] = useState(false)

    function handleClick(){
        window.scrollTo(0, 0)
    }


    return (
        <footer id="footer">
            <div
            className="p-container" id='contact'>
                <p>Developing a project?</p>
                <p id="underline">
                    <a href="#contact" id="contact-link" onClick={() => setToggle(!toggle)}>Let's connect.</a>
                </p>
            </div>
            <div className="links-container">
                <ul>
                    <li><a href="https://www.linkedin.com/in/alexei-rusu-dev/" target="_blank">linkedin</a></li>
                    <li><a href="https://github.com/Alex-dev7" target="_blank">github</a></li>
                    <li><a href="https://docs.google.com/document/d/1_u7fTIbalKg1xV9sb57bnsyPFXR-3FQb1tBLGiKst4E/edit?usp=sharing" >resume</a></li>
                    <li><a href="#contact" onClick={() => setToggle(!toggle)}>contact me</a></li>
                </ul>
                <ul className="copyright-wrapper">
                    <li className='copy-text'>© 2024 <span>Alexei Rusu</span></li>
                    
                    <li onClick={handleClick}><a href="#">to top</a></li>
                </ul>
                
            </div>
            
          <ContactForm toggle={toggle} setToggle={setToggle}/> 
        </footer>
    )
}

export default Footer