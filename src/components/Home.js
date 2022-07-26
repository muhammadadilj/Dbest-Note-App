import { React, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home--wrapper">
      <h2 className="home--header">Welcome To Best Note App</h2>
      <p className="home--paragraph">Best Note App</p>
      <img className="home--image" src="./home-image.png"></img>
      <button onClick={() => navigate('/notes')} className="button home--button">Go to notes</button>
    </div>
  )
}

export default Home