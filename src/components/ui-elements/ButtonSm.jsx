import React from 'react'
import "./UI.css"

const ButtonSm = ({text,icon,event}) => {
  return (
    <button onClick={event} className="button-sm">
    <i className={icon}></i> {text}
    </button>
  )
}

export default ButtonSm
