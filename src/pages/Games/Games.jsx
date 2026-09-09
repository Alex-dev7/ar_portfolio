import { useState } from 'react'
import './games.scss'
import Breakout from './breakoutGame/Breakout'
import PacMan from './pacManGame/PacMan'

function Games() {
  const [selectedGame, setSelectedGame] = useState(null)

  return (
    <div className='games-page'>
      <a className='home-btn' href='/'>home</a>
      <h1>GAMES</h1>
      <div className='game-item-container'>
      { selectedGame && <button className='exit-btn' onClick={() => setSelectedGame(null)}>x</button>}

      {selectedGame === null && 
      (
      <>
        <div className='game-item block' onClick={() => setSelectedGame('block-breaker')}>
          <div className='content'>
            <img src='console.svg' alt='game console' width={60} height={60}/>
            <h4>Block Breaker</h4>
            <p>This is a cool arcade game.</p>            
          </div>
        </div>
        <div className='game-item pacman' onClick={() => setSelectedGame('pac-man')}>
          <div className='content'>
              <img src='pacman.svg' alt='game console' width={60} height={60}/>
              <h4>Pac Man</h4>
              <p>This is a cool arcade game.</p>            
          </div>
        </div>
      </>
      )}

      { selectedGame === "block-breaker" && [<Breakout/>, <BreackDesc/>] }
      { selectedGame === "pac-man" && [<PacMan/>, <PMDesc/>] }
      </div>
    </div>
  )
}

export default Games

function PMDesc(){
  return (
    <div className="desc-container">
        <h3>Pac-Man with Breadth-First Search Algorithm</h3>
        <p>
        I leveraged the Breadth-First Search (BFS) algorithm to implement pathfinding for the ghosts in my Pac-Man game. The maze is represented as a one-dimensional array, with each index representing a position on the game board. BFS searches the maze from a ghost's current position to a target position while avoiding walls and previously visited cells. Because BFS explores the maze level by level, it finds the shortest available path to the target. The game then moves the ghost one step along that path rather than moving it directly to the target. I also use different targets depending on the game state, allowing the ghosts to chase Pac-Man during normal gameplay, move toward their designated corners during scatter mode, and move away from Pac-Man when they are scared. This allows the game to create dynamic enemy behavior while using a relatively simple and efficient pathfinding algorithm.
        </p>
    </div>
  )
}
function BreackDesc(){
  return (
    <div className="desc-container">
        <h3>Collision Detection Algorithm</h3>
        <p>
        The algorithm calculates the boundaries of the ball and each game object and compares their positions to determine when two objects overlap. When the ball collides with a block, the algorithm calculates the smallest overlap between the ball and the four sides of the block to determine which side was hit. The ball's horizontal or vertical direction is then reversed to simulate a bounce. The algorithm also removes or changes the color of blocks after they are hit and updates the player's score. This collision detection process runs continuously through the game's animation loop, allowing the ball and other objects to interact in real time.
        </p>
    </div>
  )
}