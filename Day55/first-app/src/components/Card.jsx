import React from 'react'
import "./Card.css"

const card = (props) => {
  return (
    <div>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default card
