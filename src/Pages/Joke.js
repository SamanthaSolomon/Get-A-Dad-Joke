import React from "react"

const Joke = (props) => {

    const loaded = () => {
        return (
            <div>
                <ul className="joke__searched">
                    {props.searchJoke.results.map((jokes) => {
                            return ( <li className="joke__searched--li" key={jokes.id}>{jokes.joke}</li> )
                    }
                    )}
                </ul>
             </div>
        )
    }

    const loading = () => {
        return(
            <div></div>
        )
    }

    //terinary operator displaying loaded or loading functions if the searchJoke state includes an array of 1 or more
    const list = props?.searchJoke?.results?.length > 0 ? loaded() : loading()
    //terinary operator displaying element if the randomJoke state includes an object
    const random = props?.randomJoke ? 
                    <p className="joke__random">{props.randomJoke.joke}</p> : null
   

    return (
        <div className="joke">
            {list}
            {random}
        </div>)

}

export default Joke