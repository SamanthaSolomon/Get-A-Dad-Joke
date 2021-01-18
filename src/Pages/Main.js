import React from "react"

//components
import SearchForm from "../Components/SearchForm"
import RandomButton from "../Components/RandomButton"

import Joke from "./Joke"

const Main = (props) => {
//Searched Joke
  const [searchJoke, setSearchJoke] = React.useState(null)

  const getSearched = async (searchterm) => {
    const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchterm}`)

    const data = await response.json()
    setSearchJoke(data)
  }


  //Random Joke
  const [randomJoke, setRandomJoke]=React.useState(null)

  const getRandom= async () => {  
    const response = await fetch(`https://icanhazdadjoke.com`, {
      headers: {Accept: "application/json"}
    })
    const data = await response.json()
    setRandomJoke(data)
  }


    return(
        <div>
            Welcome to Get a Dad Joke! Where you can get your dad joke fix. Search for jokes by keyword or get a random joke.
            <SearchForm jokeSearch={getSearched}/>
            <RandomButton jokeRandom={getRandom}/>
            <Joke randomJoke={randomJoke} searchJoke={searchJoke}/>
        </div>
    )
}

export default Main