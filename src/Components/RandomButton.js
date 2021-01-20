import React from "react"
import {Link} from "react-router-dom"

const RandomButton = (props) => {

const handleClick = (event) => {
    event.preventDefault()
    props.jokeRandom();
    props.history.push("/joke")
    
}   
    return (
        <div>
            <button onClick={handleClick}>Get Random Joke</button>
        </div>
    )
}

export default RandomButton