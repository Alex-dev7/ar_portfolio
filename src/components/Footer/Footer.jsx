import './footer.scss'
import {motion as m } from 'framer-motion'
import { container, item } from '../Nav/animation'

function Footer(props){

    return (
        <footer id="footer">
            <div
            className="p-container">
                <p>Minding a project?</p>
                <p id="underline">
                    Let's connect.
                </p>
            </div>
            <div className="links-container">
                <ul>
                    <li><a href="">linkedin</a></li>
                    <li><a href="">github</a></li>
                    <li><a href="">resume</a></li>
                    <li><a href="">contact me</a></li>
                </ul>
                <ul>
                    <li><a href="">light mode</a></li>
                    <li><a>copyright</a></li>
                    <li><a href="#header">back to top</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer