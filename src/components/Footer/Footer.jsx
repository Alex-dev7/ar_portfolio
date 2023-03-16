import './footer.scss'
import ContactForm from '../Contact/ContactForm'
import pdf from '../Nav/rusu-alexei-Resume.pdf'
import { useState } from 'react'


function Footer(props){

    const [toggle, setToggle] = useState(false)


    return (
        <footer id="footer">
            <div
            className="p-container">
                <p>Minding a project?</p>
                <p id="underline">
                    <a href="#contact" id="contact-link" onClick={() => setToggle(!toggle)}>Let's connect.</a>
                </p>
            </div>
            <div className="links-container">
                <ul>
                    <li><a href="https://www.linkedin.com/in/alexei-rusu-dev/" target="_blank">linkedin</a></li>
                    <li><a href="https://github.com/Alex-dev7" target="_blank">github</a></li>
                    <li><a href="#" >download resume</a></li>
                    <li><a href="#contact" onClick={() => setToggle(!toggle)}>contact me</a></li>
                </ul>
                <ul id="copyright-wrapper">
                    
                    <li>copyright</li>
                    <li><a href="#header">back to top</a></li>
                </ul>
            </div>
            { toggle ? <ContactForm /> : ""}
        </footer>
    )
}

export default Footer