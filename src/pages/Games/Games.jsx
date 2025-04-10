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

      { selectedGame === "block-breaker" && <Breakout/> }
      { selectedGame === "pac-man" && <PacMan /> }
      </div>
    </div>
  )
}

export default Games