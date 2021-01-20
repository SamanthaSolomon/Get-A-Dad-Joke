import React from "react"
import {Route, Redirect} from "react-router-dom"

//components
import SearchForm from "../Components/SearchForm"
import RandomButton from "../Components/RandomButton"

//pages
import Joke from "./Joke"

const Main = (props) => {

//Searched Joke
  const [searchJoke, setSearchJoke] = React.useState(null)

  const getSearched = async (searchterm) => {
    const response = await fetch(`https://icanhazdadjoke.com/search?page=1&limit=5&term=${searchterm}`,{
        headers: {Accept: "application/json"}
    })
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
    setRandomJoke(data);
  }


    return(
        <div>
            <p>Welcome to Get a Dad Joke! Where you can get your dad joke fix. Search for jokes by keyword or get a random joke.</p>
            <SearchForm jokeSearch={getSearched}/>
            <RandomButton jokeRandom={getRandom} history={props.history}/>
            <Route path="/joke" render={(renderProps) => {
                return <Joke {...renderProps} randomJoke={randomJoke} searchJoke={searchJoke}/>
                }}/>
        </div>
    )
}

export default Main