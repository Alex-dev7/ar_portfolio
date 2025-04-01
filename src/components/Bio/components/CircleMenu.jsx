import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './circle.scss'

function CircleMenu({title, skillsArray}) {
    const [isOpen, setIsOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const radius = screenWidth < 1300 ? screenWidth <= 700 ? 60: 90  : 150

    useEffect(() => {
      function handleResize(){
        setScreenWidth(window.innerWidth)
        
      }
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [])


    const toggleMenu = () => {
        setIsOpen(!isOpen);
      }

    return (
        <div className="circle-menu"
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu} 
            // onClick={toggleMenu}     
        >
          {/* Central Button */}
          <div
            className="central-button"
            // onClick={toggleMenu}
            // style={{width: '300px'}}
          >
            {title}
          </div>
          
            {radius === 60 && 
                // <div className="item-container">
                      // { 
                        skillsArray.map((skill, i) => {
                    
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 0, x: 0 }}
                                                                                                                                                                  
                            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 70 : 0,      x: isOpen ? (i / (skillsArray.length - 1)) * (screenWidth - 60) - (screenWidth - 60) / 2 : 0 }}

                            transition={{ duration: 0.3 }}
                            className="menu-item"
                            
                          >
                            <img src={skill} alt="skill logo" width={50} />
                          </motion.div>
                        )
                      })
                      // }
                  /* </div> */
              }
        
            {/* /* Menu Items */}
            {radius > 60 ? 
            
                  skillsArray.map((skill, i) => {
                    
                      const angle = (i / skillsArray.length) * (2 * Math.PI)
                      const x = radius * Math.cos(angle)
                      const y = radius * Math.sin(angle)
                      return (
                        <motion.div
                          key={i}
                          initial={{ x: 0, y: 0, opacity: 0 }}
                          animate={{ x: isOpen ? x : 0, y: isOpen ? y : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.4 }}
                          className="menu-item"
                        >
                          <img src={skill} alt="skill logo" width={50} />
                        </motion.div>
                      )  
                  }) : ""}          
      </div>
    )
}

export default CircleMenu