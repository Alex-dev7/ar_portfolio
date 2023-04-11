import { useLoaderData, Link } from "react-router-dom"
import './show.scss'
import {motion as m} from 'framer-motion'
function Show(props) {

    const item = useLoaderData()

    console.log(window.history.scrollRestoration)

    return (<section>
        <div  className='show-container '>
            <m.div
            key={item.id}
                    initial={{opacity: .5, y: "-100%"}}
                    animate={{opacity: 1, y: "0%"}}
                    // exit={{opacity: 0.5, y: -1500}}
                    transition={{duration: 0.8, ease: "easeOut"}}
            className='left-column'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className="links-wrapper">
                    <a  href={item.repo} target="_blank"  >Source code -{'>'}</a>
                    <a  href={item.live} target="_blank">Live Site</a>                    
                </div>
                <h3>Tech Stack</h3>
                <ul>
                    {item.skills.map((i) => (
                        <li>{i}</li>
                    ))}
                </ul>
                <span>expect increased waitimg time due to free hosting </span>
            </m.div>
            <div className='right-column'>
                <Link id='back-button' to={`/#work`}>
                    back
                </Link>
               <p className="screenshot-text">Desktop Screenshot</p>
                <m.img
                    className="desktop-pic"
                    initial={{opacity: .5, x: "-250%"}}
                    animate={{opacity: 1, x: "0%"}}
                                 // exit={{opacity: 0.5, y: -1500}}
                     transition={{duration: 0.8, ease: "easeOut", delay: 0.8}}               
                src={item.desktopImage} referrerpolicy="no-referrer"/>
                 <p className="screenshot-text">Mobile Screenshot</p>
                <m.img
                    className="mobile-pic"
                    initial={{opacity: .5, x: "-350%"}}
                    animate={{opacity: 1, x: "0%"}}
                                 // exit={{opacity: 0.5, y: -1500}}
                     transition={{duration: 0.8, ease: "easeOut", delay: 0.8}}               
                src={item.mobileImage} referrerpolicy="no-referrer"/>
            </div>

        </div>

    </section>
)
}

export default Show