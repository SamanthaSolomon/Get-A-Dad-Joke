import React from "react"

const Joke = (props) => {

    const loaded = () => {
        return (
            <div>
                <ul>
                    {props.searchJoke.results.map((jokes) => {
                            return <li key={jokes.id}>{jokes.joke}</li>
                    }
                    )}
                </ul>
             </div>
        )
    }

    const loading = () => {
        return(
            <h4>No jokes to display. Try another term.</h4>
        )
    }

    //terinary operator displaying loaded or loading functions if the searchJoke state includes an array of 1 or more
    const list = props?.searchJoke?.results?.length > 0 ? loaded() : loading()
    //terinary operator displaying element if the randomJoke state includes an object
    const random = props?.randomJoke ? <h4>{props.randomJoke.joke}</h4> : null
   

    return (
        <>
            {list}
            {random}
        </>)

}

export default Joke