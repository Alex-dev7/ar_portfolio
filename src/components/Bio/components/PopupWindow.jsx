import React from 'react'
import Markdown from 'react-markdown'
import "./popup.scss"


export default function PopupWindow({list, isOpen}) {
  return (
    <div className='popup-window' style={isOpen ? {transform: "translateX(-310px)", opacity: "1"} :{ transform: "translateX(0)"}}>
        <Markdown children={list} />
    </div>
  )
}
