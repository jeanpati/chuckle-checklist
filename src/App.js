import "./App.css"
import { useEffect, useState } from "react"
import { AddJoke } from "./services/jokeService.js"
import stevePic from "./assets/steve.png"

export const App = () => {
  const [joke, setJoke] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])

const handleAddbutton = () => {
  AddJoke(joke)
  setJoke("")
}

  return <section>
    <div class="app-heading"><div className="app-heading-circle">
   <img className="app-logo" src={stevePic} alt="Good job Steve" />
 </div></div>
  <h2>Chuckle Checklist</h2>
 <div class="joke-add-form">
    <input
  class="joke-input"
  type="text"
  value={joke}
  placeholder="New One Liner"
  onChange={(event) => {
    // What's the value of event?
    setJoke(event.target.value)
  }}
/>
<button class="joke-input-submit" 
      onClick={() => {
        handleAddbutton()
        }}>Add
        </button>
  </div>
</section>
}