import { useState } from "react";
import { motion } from "framer-motion";
import './circle.scss'

function CircleMenu({title, skillsArray}) {
    const [isOpen, setIsOpen] = useState(false)
    const numItems = 6
    const radius = 150

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      }

      return (
        <div className="circle-menu"
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}      
        >
          {/* Central Button */}
          <div
            className="central-button"
            // onClick={toggleMenu}

          >
            {title}
          </div>
    
          {/* Menu Items */}
          {skillsArray.map((skill, i) => {
            const angle = (i / skillsArray.length) * (2 * Math.PI);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
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
            );
          })}
        </div>
      );
}

export default CircleMenu