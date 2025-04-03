import './footer.scss'
import ContactForm from '../Contact/ContactForm'
import { ToggleContext } from '../../context/ToggleContext';
import React, { useContext } from 'react';

function Footer(props){
    const { toggle, changeToggle } = useContext(ToggleContext);
  

    function handleClick(){
        window.scrollTo(0, 0)
    }


    return (
        <footer id="footer">
            <div
            className="p-container" id='contact'>
                <p>Developing a project?</p>
                <p id="underline">
                    {/* <a href="#contact" id="contact-link" onClick={changeToggle}>Let's connect.</a> */}
                </p>
            </div>
            <div className="links-container">
                <ul>
                    <li><a href="https://www.linkedin.com/in/alexei-rusu-dev/" target="_blank">linkedin</a></li>
                    <li><a href="https://github.com/Alex-dev7" target="_blank">github</a></li>
                    <li><a href="https://docs.google.com/document/d/1_u7fTIbalKg1xV9sb57bnsyPFXR-3FQb1tBLGiKst4E/edit?usp=sharing" >resume</a></li>
                    {/* <li><a href="#contact" onClick={changeToggle}>contact me</a></li> */}
                </ul>
                <ul className="copyright-wrapper">
                    <li className='copy-text'>© 2024 <span>Alexei Rusu</span></li>
                    
                    <li onClick={handleClick}><a href="#">to top</a></li>
                </ul>
                
            </div>
            
          <ContactForm /> 
        </footer>
    )
}

export default Footer