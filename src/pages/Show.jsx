import { useLoaderData, Link } from "react-router-dom"
import './show.scss'
import {motion as m} from 'framer-motion'
function Show(props) {

    const item = useLoaderData()


    return (<section>
        <div  className='show-container'>
            <m.div
            key={item.id}
                    initial={{opacity: .5, y: "-100%"}}
                    animate={{opacity: 1, y: "0%"}}
                    // exit={{opacity: 0.5, y: -1500}}
                    transition={{duration: 0.8, ease: "easeOut"}}
            className='left-column'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>        
            </m.div>
            <div className='right-column'>
                <Link to='/'>
                    <p>close</p>
                </Link>
                <m.img
                className="desktop-pic"
                    initial={{opacity: .5, x: "-250%"}}
                    animate={{opacity: 1, x: "0%"}}
                                 // exit={{opacity: 0.5, y: -1500}}
                     transition={{duration: 0.8, ease: "easeOut", delay: 0.8}}               
                src={item.desktopImage} referrerpolicy="no-referrer"/>
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