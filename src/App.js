import "./App.css"
import { useEffect, useState } from "react"
import { AddJoke, EditJoke, TellJoke, getAllJokes } from "./services/jokeService.js"
import stevePic from "./assets/steve.png"

export const App = () => {
  const [joke, setJoke] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [showToldJokes, setToldJokes] = useState([])
  const [showUntoldJokes, setUntoldJokes] = useState([])


  const fetchJokes = () => {
    getAllJokes().then((jokeArr) => {
      setAllJokes(jokeArr)
  })
  }

  useEffect(() => { //the function is what we want to happen and the array is when we want it to happen
     getAllJokes().then((jokeArray) => {
      setAllJokes(jokeArray)
    })
  }, [showToldJokes,showUntoldJokes]) //ONLY runs on initial render of component (so we dont have an inifinite loop) when empty

  useEffect(() => {
    const untoldJokes = allJokes.filter(
      (joke) => joke.told === false
      )

    const toldJokes = allJokes.filter(
      (joke) => joke.told === true
      )

      setUntoldJokes(untoldJokes)
      setToldJokes(toldJokes)
    }, [allJokes]) 


const handleAddButton = () => {
  AddJoke(joke)
  setJoke("")
  fetchJokes()
}

const handleEditButton = (joke) => {
  const editedJoke = {id:joke.id,text:joke.text,told:!joke.told }
  console.log(editedJoke)
  EditJoke(editedJoke)
  fetchJokes()
}

  return <section>
    <div className="app-heading"><div className="app-heading-circle">
   <img className="app-logo" src={stevePic} alt="Good job Steve" />
 </div></div>
  <h1 className="app-heading-text">Chuckle Checklist</h1>
 <div className="joke-add-form">
    <input
  className="joke-input"
  type="text"
  value={joke}
  placeholder="New One Liner"
  onChange={(event) => {
    // What's the value of event?
    setJoke(event.target.value)
  }}
/>
<button className="joke-input-submit" 
      onClick={() => {
        handleAddButton()
        }}>Add
        </button>
  </div>

  <article className="joke-lists-container">
    <div className="joke-list-container">
    <h2>
      Untold
      <span className="untold-count">{showUntoldJokes.length}</span>
    </h2>
      {showUntoldJokes.map ((joke) => {
        return (
          <ul className="joke-list-item" key={joke.id}>
            {joke.text}
            <button onClick={() => { 
              handleEditButton(joke)
            }}>
              Tell Joke
            </button></ul>
        )
      })}
    </div>
    <div className="joke-list-container">
    <h2>
      Told
      <span className="told-count">{showToldJokes.length}</span>
    </h2>
    {showToldJokes.map ((joke) => {
        return (
          <ul className="joke-list-item" key={joke.id}>{joke.text}
          <button onClick={() => { 
              handleEditButton(joke)
            }}>
              Reuse Joke
            </button></ul>
        )
      })}
    </div>
  </article>
</section>
}