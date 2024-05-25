import React, { useState, useEffect } from "react"

import "./GenerationList.css"
import { fetchGenerationMix } from "../lib/data"
import GenerationItem from "./GenerationItem"

export default function GenerationList() {
  const [generationMix, setGenerationMix] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await fetchGenerationMix()
      setGenerationMix(data.generationmix)
    })()
  }, [])

  return (
    <section>
      <ul className="list-container">
        <li className="item">
          <h2>Fuel</h2>

          <h2>Percentage</h2>
        </li>

        {generationMix?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <GenerationItem details={item} />
            </React.Fragment>
          )
        })}
      </ul>
    </section>
  )
}
