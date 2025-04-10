import { useState, useRef, useEffect } from "react"
import './pac-man.scss'
import win from '/soundEffects/winMusic.mp3'
import loose from '/soundEffects/gameOverPop.mp3'
import dot from '/soundEffects/dot.mp3'
import bonus from '/soundEffects/bonus.mp3'


function PacMan() {
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [message, setMessage] = useState(null)
    const [sound, setSound] = useState(true)
    const [pacManIndex, setPacManIndex] = useState(490)
    const [scatterMode, setScatterMode] = useState(false)
    const [isScared, setIsScared] = useState(false)
    const [map, setMap] = useState(initialMap)
    const [ghosts, setGhosts] = useState(initialGhosts)
    const width = 28
    const grid = useRef(null)
    
    // sounds
    const winMusic = new Audio(win)
    const looseMusic = new Audio(loose)
    const dotSound = new Audio(dot)
    const bonusSound = new Audio(bonus)

    // 0 - pac dots 
    // 1 - walls
    // 2 - ghost lair
    // 3 - power pellet
    // 4 - empty
    const layout = {0: "pac-dot", 1: "wall", 2: "ghost-lair", 3: "power-pellet"}

    useEffect(() => {
        if (gameOver) return
        const handleKeyDown= (e) => {
            let tempIndex = pacManIndex
            console.log(e.key)
            switch(e.key) {
                case "ArrowUp": case "w":
                    if (map[pacManIndex - width] !== 1 && map[pacManIndex - width] !== 2) tempIndex -= width
                    break
                case "ArrowDown": case "s":
                    if (map[pacManIndex + width] !== 1 && map[pacManIndex + width] !== 2) tempIndex += width
                    break
                case "ArrowLeft": case "a":
                    if (map[pacManIndex - 1] !== 1 && map[pacManIndex - 1] !== 2) tempIndex -= 1
                    if(pacManIndex === 364) tempIndex = 391
                    break
                case "ArrowRight": case "d":
                    if (map[pacManIndex + 1] !== 1 && map[pacManIndex + 1] !== 2) tempIndex += 1
                    if(pacManIndex === 391) tempIndex = 364
                    break
            }
            setPacManIndex(tempIndex)
        }

        // eat pac dots
        if(map[pacManIndex] === 0){
            // if (sound) dotSound.play()
            const newMap = [...map]
            newMap[pacManIndex] = 4
            setMap(newMap)
            setScore(score + 1)
        }
        // eat power pellet
        if(map[pacManIndex] === 3){
            // if (sound) bonusSound.play()
            const newMap = [...map]
            newMap[pacManIndex] = 4
            setMap(newMap)
            setScore(score + 10)
            setIsScared(true)
        }
        // WIN CONDITION
        if(!map.includes(0)){
            if (sound) winMusic.play()
            setMessage("You Win!")
            setGameOver(true)
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }), [pacManIndex]


    // move the ghosts
    useEffect(() => {
        if (gameOver) return
        const interval = setInterval(() => {
          const now = Date.now()
      
          setGhosts(prevGhosts =>
            prevGhosts.map(ghost => {
              if (now - ghost.lastMovedAt >= ghost.speed) {
                const target = isScared ? 347  : scatterMode ? ghost.homeCorner : pacManIndex
                const path = bfs(ghost.currentIndex, target, map, width)

                // LOOSE CONDITION
                if(ghost.currentIndex === pacManIndex && !isScared){
                    if (sound) looseMusic.play()
                    setMessage("Game Over!")
                    setGameOver(true)
                    return { ...ghost, lastMovedAt: now }
                }
      
                if (path && path.length > 1) {
                  return {
                    ...ghost,
                    currentIndex: path[1],
                    lastMovedAt: now,
                  }
                }

                return {
                  ...ghost,
                  lastMovedAt: now,
                }
              }
              return ghost
            })
          )
        }, 50) // a high frequency loop to check all ghosts

      
        return () => clearInterval(interval)
      }, [scatterMode, pacManIndex, map, width, isScared, gameOver])

    // toggle scattered mode
    useEffect(() => {
        const interval = setInterval(() => {
            setScatterMode(prev => !prev)

        }, 7000) // Toggle every 7 seconds
    
        return () => clearInterval(interval)
    }, [])

    // toggle scared mode
    useEffect(() => {
        const interval = setInterval(() => {
            setIsScared(false)

        }, 7000) 
    
        return () => clearInterval(interval)
    }, [isScared])


    const restartGame = () => {
        setPacManIndex(490)
        setGhosts(initialGhosts)
        setMap(initialMap)  
        setGameOver(false)
        setMessage(null)
      };


    //create the board
  return (
    <div className='game-container'>
       
        <span id="score">Score: {score}</span>
        {gameOver && 
        <div className="game-over">
            <p>{message}</p>
            <button onClick={restartGame}>Restart</button>
        </div>
        }
        <div ref={grid} className='grid-container' >
        {map.map((cell, index) => {
            const ghostHere = ghosts.find(ghost => ghost.currentIndex === index)
            const isPacman = index === pacManIndex

            return (
                <div key={index}
                // id={index}
                className={
                    ghostHere
                    ? `ghost ${isScared ? "scared-ghost" : ghostHere.className}` 
                    : isPacman
                    ? "pac-man"
                    : layout[cell] || ""
                }>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default PacMan

// Used BFS to calculate the shortest path from a ghost's current position to a target index, then move one step along that path.

function bfs(start, target, map, width){

    const visited = new Set()
    const queue = [[start]]

    // keeping track of the visited positions
    visited.add(start)


    while(queue.length > 0) {
        // FIFO to get the firts path/node in the queue
        const path = queue.shift()

        const current = path[path.length -1]

        // If the target is reached (at Pac-Man's location), return the path
        if (current === target) return path

        // Ghosts movement directions:
        const directions = [-1, 1, -width, width]

        // Exploring all neighboring cells
        for (const direction of directions) {
            const next = current + direction

            // Conditions for a valid move:
            // - Stay within the map bounds
            // - Don't revisit a square
            // - Don't go through walls 
            if(
                next >= 0 &&
                next < map.length &&
                !visited.has(next) &&
                map[next] !== 1 
            ){
            // Marking the spot as visited
            visited.add(next)
            // Pushing a new path (copy of current path + next step) to the queue
            queue.push([...path, next])
            }

        }

    }
    // In case we finished looping and never reached the target, return null (no path found)
    return null
}



// ghosts Class
class Ghost {
    constructor(className, startIndex, speed, homeCorner, lastMovedAt){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.homeCorner = homeCorner
        this.lastMovedAt = lastMovedAt
        this.currentIndex = this.startIndex
    }
}
const initialGhosts = [
    new Ghost("blinky", 348, 250, 29, Date.now()),
    new Ghost("pinky", 347, 400, 54, Date.now()),
    new Ghost("inky", 351, 300, 743, Date.now()),
    new Ghost("clyde", 379, 500, 729, Date.now())
]

const initialMap = 
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


      