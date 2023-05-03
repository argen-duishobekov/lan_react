import React from 'react'
import argen from "./Card.module.css"
export const Card = ({name,col}) => {
  return (
    <div style={{backgroundColor:col}} className={argen.help}>
        <h3>{name}</h3>
    </div>
  )
}

