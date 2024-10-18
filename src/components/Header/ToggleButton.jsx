import React, { useContext } from 'react'
import './button.scss'
import { ToggleContext } from '../../context/ToggleContext'

function ToggleButton() {
    const { toggle, setToggle } = useContext(ToggleContext);

    function handleClick() {
        setToggle(!toggle)

    }

  return (
    <div className='toggle-container'>
        <button onClick={handleClick} className='btn'>
           {toggle ? '🚀' : '🧑‍🚀'  }
        </button>

    </div>
  )
}

export default ToggleButton