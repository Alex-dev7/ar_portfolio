import './footer.scss'
import {motion as m } from 'framer-motion'
import { container, item } from '../Nav/animation'

function Footer(props){

    return (
        <footer>
            <div
            className="p-container">
                <p>Are you hiring?</p>
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
                    <li><a href="">white mode</a></li>
                    <li>copyright</li>
                    <li><a href="">back to top</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer