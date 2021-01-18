import React from "react"

const RandomButton = (props) => {

const handleClick = (event) => {
    event.preventDefault()
    props.jokeRandom()
}   
    return (
        <div>
            <button onClick={handleClick}>Get Random Joke</button>
        </div>
    )
}

export default RandomButton