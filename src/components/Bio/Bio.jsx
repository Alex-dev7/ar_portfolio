import about from "../../json/about.json"
import {motion as m} from "framer-motion"
import './bio.scss'
import svg from './nnneon.svg'

function Bio(props){

    return <section id="about" className="about-container">
        <div  className="title-wrapper">
            <p>about/</p>
        </div>
        <div className="bio-wrapper">
            <div className="text-wrapper">
                <p>Hello World,</p>
                <p>my name is Alexei, and I am a <span style={{borderBottom: "1px solid red", textTransform:"uppercase"}}>full-stack web developer</span> with a background in choreography and a <span style={{borderBottom: "1px solid rgb(0, 221, 255)"}}>unique perspective</span> to the development process. My combination of technical expertise and creative vision, honed by my choreographic education, allows me to approach problem-solving and design from a holistic perspective.  I am a team player, looking to integrate technical and artistic elements to create intuitive and visually engaging user experiences that inspire and connect with users. Always eager to learn and grow in the exciting field of development.</p>                
            </div>
            <div className="svg-container">
                <img src={svg} />
            </div>
          
        </div>

        
    </section>
}

export default Bio

