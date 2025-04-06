import { useState, useRef, useEffect } from "react"
import './pac-man.scss'

// ghosts Class
class Ghost {
    constructor(className, startIndex, speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = this.startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

function PacMan() {
    const [score, setScore] = useState(0)
    const [level, setLevel] = useState(0)
    const [pacManIndex, setPacManIndex] = useState(490)
    const [map, setMap] = useState(
        [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    )
    const [ghosts, setGhosts] = useState([
        { name: "blinky", index: 348, speed: 250 },
        { name: "pinky", index: 347, speed: 400 },
        { name: "inky", index: 351, speed: 300 },
        { name: "clyde", index: 379, speed: 500 }
      ])
    const width = 28
    const grid = useRef(null)
    


    // 0 - pac dots 
    // 1 - walls
    // 2 - ghost lair
    // 3 - power pellet
    // 4 - empty
    const layout = {0: "pac-dot", 1: "wall", 2: "ghost-lair", 3: "power-pellet"}

    useEffect(() => {
        const handleKeyDown= (e) => {
            let tempIndex = pacManIndex
            switch(e.key) {
                case "ArrowUp":
                    if (map[pacManIndex - width] !== 1 && map[pacManIndex - width] !== 2) tempIndex -= width
                    break
                case "ArrowDown":
                    if (map[pacManIndex + width] !== 1 && map[pacManIndex + width] !== 2) tempIndex += width
                    break
                case "ArrowLeft":
                    if (map[pacManIndex - 1] !== 1 && map[pacManIndex - 1] !== 2) tempIndex -= 1
                    if(pacManIndex === 364) tempIndex = 391
                    break
                case "ArrowRight":
                    if (map[pacManIndex + 1] !== 1 && map[pacManIndex + 1] !== 2) tempIndex += 1
                    if(pacManIndex === 391) tempIndex = 364
                    break
            }
            setPacManIndex(tempIndex)
        }

        // eat pac dots
        if(map[pacManIndex] === 0){
            const newMap = [...map]
            newMap[pacManIndex] = 4
            setMap(newMap)
            setScore(score + 10)
        }
        // eat power pellet
        if(map[pacManIndex] === 3){
            const newMap = [...map]
            newMap[pacManIndex] = 4
            setMap(newMap)
            setScore(score + 50)
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }), [pacManIndex]

    useEffect(() => {
        // ALGORITHM
      }, [map])

    // const squares = []
    //create the board

  return (
    <div className='game-container'>
        <div ref={grid} className='grid-container' >
        {map.map((cell, index) => {
            const ghostHere = ghosts.find(ghost => ghost.index === index)
            const isPacman = index === pacManIndex

            return (
                <div key={index}
                className={
                    ghostHere
                    ? `ghost ${ghostHere.name}` 
                    : isPacman
                    ? "pac-man"
                    : layout[cell] || ""
                }>
                </div>
            )
        })}
        </div>
        <span id="score">Score: {score}</span>
        <span id="level">Level: {level}</span>
    </div>
  )
}

export default PacMan

