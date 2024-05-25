import React from "react"

import "./GenerationItem.css"

export default function GenerationItem({ details }) {
  return (
    <li className="item">
      <div className="fuel">
        <img
          alt={`Icon" of ${details.fuel}`}
          className="image"
          src={`../assets/icons/${details.fuel}.svg`}
        />

        <span>{details.fuel}</span>
      </div>

      <div className="bar-container">
        <div className="bar" style={{ width: `${details.perc}%` }} />
        <span>{details.perc}%</span>
      </div>
    </li>
  )
}
