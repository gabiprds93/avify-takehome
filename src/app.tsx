import React, { useState, useEffect } from "react"
import { fetchGenerationMix } from "./lib/data"

const App = () => {
  const [generationMix, setGenerationMix] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await fetchGenerationMix()
      setGenerationMix(data.generationmix)
    })()
  }, [])

  return (
    <main>
      <h1>UK Energy Mix</h1>

      <section>
        <ul>
          {generationMix?.map((item) => {
            return <li>{item.fuel}</li>
          })}
        </ul>
      </section>
    </main>
  )
}

export { App }
