import React from "react"

const Joke = (props) => {
    return(
        <div>
            <p>Searched Joke</p>
            <p>Random Joke</p>
            <p>{props?.joke?.joke}</p>
        </div>
    )
}

export default Joke