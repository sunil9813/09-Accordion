import React, { useState } from "react"
import "./App.css"
import Accordion from "./components/Accordion"
import data from "./components/data"

function App() {
  const [items, setItems] = useState(data)
  return (
    <>
      <main>
        <div className='heading'>
          <h2>FACTS & QUESTIONS</h2>
        </div>
        {items.map((val) => (
          <Accordion key={val.id} {...val} />
        ))}
      </main>
    </>
  )
}

export default App
