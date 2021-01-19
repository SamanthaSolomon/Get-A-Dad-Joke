import React from "react"

const Joke = (props) => {

    const loaded = () => {
        return (
            <di>
                <ul>
                    {props.searchJoke.results.map((jokes) => {
                            <li key={jokes.id}>{jokes.joke}</li>
                        }
                    )}
                    <li>{props.randomJoke.joke}</li>
                </ul>
             </di>
        )
    }

    const loading = () => {
        return(
            <h4>No jokes to display. Try another term.</h4>
        )
    }

    return props ? loaded() : loading()
}

export default Joke