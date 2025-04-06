import { useState } from 'react'
import './games.scss'
import Breakout from './breakoutGame/Breakout'
import PacMan from './pacManGame/PacMan'

function Games() {
  const [toggleGame, setToggleGame] = useState(true)

  return (
    <div className='games-page'>
      <a className='home-btn' href='/'>home</a>
      <h1>GAMES</h1>
      <div className='game-item-container'>
{/* {  !toggleGame && <button className='exit-btn' onClick={() => setToggleGame(true)}>x</button>} */}
{/* {     toggleGame ?         
        <div className='game-item' onClick={() => setToggleGame(false)}>
            <div className='content'>
              <img src='console.svg' alt='game console' width={60} height={60}/>
              <h4>Block Breaker</h4>
              <p>This is a cool arcade game.</p>            
          </div>
        </div>
 : <Breakout/> } */}
{     toggleGame ?         
        <div className='game-item' onClick={() => setToggleGame(false)}>
            <div className='content'>
              <img src='console.svg' alt='game console' width={60} height={60}/>
              <h4>Pac Man</h4>
              <p>This is a cool arcade game.</p>            
          </div>
        </div>
 : <PacMan /> }
      </div>
    </div>
  )
}

export default Games