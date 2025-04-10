import React, { useState, useEffect, useRef } from "react";
import "./breakout.scss";
import win from '/soundEffects/winMusic.mp3'
import loose from '/soundEffects/gameOverPop.mp3'
import userPop from '/soundEffects/userPop.mp3'
import blockPop from '/soundEffects/upPop.mp3'


const Breakout = () => {
  const canvasRef = useRef(null)
  const animationFrameId = useRef(null);
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [ballSpeed , setBallSpeed] = useState(2)
  const [message, setMessage] = useState("")
  const [sound, setSound] = useState(true)
  
  // sounds
  const winMusic = new Audio(win)
  const looseMusic = new Audio(loose)
  const userSound = new Audio(userPop)
  const blockSound = new Audio(blockPop)


  const blockWidth = 100
  const blockHeight = 20
  const boardWidth = 560
  const boardHeight = 300
  const ballDiameter = 20
//   let ballSpeed = 2;
  let xDirection = -ballSpeed
  let yDirection = ballSpeed

  // let timerId;
  const userStart = [230, 280]
  let currentPosition = [...userStart]

  const ballStart = [280, 270 ]
  let ballCurrentPosition = [...ballStart]


  class Block {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.color = ["#00FFFF","#FF10F0","#F9E105"]
    }
  }

  const blocks = [
    new Block(10, 10),
    new Block(120, 10),
    new Block(230, 10),
    new Block(340, 10),
    new Block(450, 10),
    new Block(10, 40),
    new Block(120, 40),
    new Block(230, 40),
    new Block(340, 40),
    new Block(450, 40),
    // new Block(10, 70),
    // new Block(120, 70),
    // new Block(230, 70),
    // new Block(340, 70),
    // new Block(450, 70),
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const drawBlocks = () => {
      blocks.forEach((block) => {
        ctx.fillStyle = block.color[0]
        // ctx.fillRect(block.x, boardHeight - block.y - blockHeight, blockWidth, blockHeight);
        ctx.fillRect(block.x, block.y, blockWidth, blockHeight)
      })
    }

    const drawUser = () => {
      ctx.fillStyle = "#FF802B";
      // ctx.fillRect(currentPosition[0], boardHeight - currentPosition[1] - 20 , blockWidth, 10)
      ctx.fillRect(currentPosition[0], currentPosition[1], blockWidth, 10)
    
    }

    const drawBall = () => {
      ctx.beginPath();
      // ctx.arc(ballCurrentPosition[0], boardHeight - ballCurrentPosition[1], ballDiameter / 2, 0, Math.PI * 2);
      ctx.arc(ballCurrentPosition[0], ballCurrentPosition[1], ballDiameter / 2, 0, Math.PI * 2)
      ctx.fillStyle = "#e666bc"
      ctx.fill()
      ctx.closePath()
    }


    const moveUser = (e) => {
      if (e.key === "ArrowLeft" && currentPosition[0] > 0) {
        currentPosition[0] -= 20
      } else if (e.key === "ArrowRight" && currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 20
      }
    }

    document.addEventListener("keydown", moveUser)

    const moveBall = () => {
      ballCurrentPosition[0] += xDirection
      ballCurrentPosition[1] += yDirection
      checkForCollision()
      redraw()
    }

    const checkForCollision = () => {
      // ball edges
      const ballLeft = ballCurrentPosition[0] - ballDiameter / 2
      const ballRight = ballCurrentPosition[0] + ballDiameter / 2
      const ballTop = ballCurrentPosition[1] + ballDiameter / 2
      const ballBottom = ballCurrentPosition[1] - ballDiameter / 2

      // user top
      const userTop = currentPosition[1] + blockWidth / 2


      // check block collision
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]
        // block boundaries
        const blockLeft = block.x
        const blockRight = block.x + blockWidth
        const blockTop = block.y + blockHeight
        const blockBottom = block.y
        

        if (
            ballRight > blockLeft &&
            ballLeft < blockRight &&
            ballTop > blockBottom &&
            ballBottom < blockTop
          ) {
            if (sound) blockSound.play()

            // find where the collision occurred
            const fromLeft = Math.abs(ballRight - blockLeft)
            const fromRight = Math.abs(ballLeft - blockRight)
            const fromTop = Math.abs(ballBottom - blockTop)
            const fromBottom = Math.abs(ballTop - blockBottom)
      
            // find the smallest overlap to determine collision side
            const minOverlap = Math.min(fromLeft, fromRight, fromTop, fromBottom)
      
            if (minOverlap === fromLeft || minOverlap === fromRight) {
              // hit left or right → reverse X direction
              xDirection = -xDirection
            } else {
              // hit top or bottom → reverse Y direction
              yDirection = -yDirection
            }

            if(blocks[i].color.length > 1){
                blocks[i].color.shift()
            } else {
                blocks.splice(i, 1)
            }

          // update score
          setScore((prevScore) => prevScore + 1)

          // Win Condition
          if (blocks.length === 0) {
            if (sound) winMusic.play() 
            setMessage("You Win!")
            setGameOver(true)
            cancelAnimationFrame(animationFrameId.current)
          }
        }
      }

      // check for wall collision
      if (ballLeft <= 0 || ballRight >= boardWidth){ // side walls
        if (sound) userSound.play()
        xDirection = -xDirection
      }
      if (ballTop <= ballDiameter){ // top wall
        if (sound) userSound.play()
        yDirection = -yDirection
      }

      // check for paddle collision
      if (
        ballCurrentPosition[0] + ballDiameter / 2 > currentPosition[0] &&
        ballCurrentPosition[0] - ballDiameter / 2 < currentPosition[0] + blockWidth &&
        ballCurrentPosition[1] + ballDiameter / 2 > currentPosition[1] &&
        ballCurrentPosition[1] - ballDiameter / 2 < currentPosition[1] + blockHeight
      ) {
        if (sound) userSound.play()
        // change y direction
        yDirection = -yDirection 
      }

      // Game Over
      if (ballCurrentPosition[1] + ballDiameter / 2 >= 295) {
        if (sound) looseMusic.play()
        setMessage("Game Over")
        setGameOver(true)
        cancelAnimationFrame(animationFrameId.current)
      }

      return
    }


    const redraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall()
      drawBlocks()
      drawUser()
    }

    const gameLoop = () => {
      if (!gameOver) {
        moveBall()
        animationFrameId.current = requestAnimationFrame(gameLoop)
      }
    }

    animationFrameId.current = requestAnimationFrame(gameLoop)


    return () => {
      cancelAnimationFrame(animationFrameId.current)
      document.removeEventListener("keydown", moveUser)
    }
  }, [gameOver])

  function handleStartButtonClick(){
    setGameOver(!gameOver)
    setScore(0)
  }



  return (
    <div className="games-container">
      <div className="buttons-container">
        <button className="start-button" onClick={handleStartButtonClick}>{gameOver ? "Start" : "Stop"}</button>
        <button className="sound-button" onClick={() => setSound(!sound)}>Sound {sound ? "On" : "Off"}</button>        
      </div>

      <h2>Score: {score}</h2>
      {gameOver && <h2 style={{position: 'absolute'}}>{message}</h2>}
      <canvas className="gameCanvas" ref={canvasRef} width={boardWidth} height={boardHeight} style={{ background: "inherit" }} />
    </div>
  )
}

export default Breakout


