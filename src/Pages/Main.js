import React from "react"

//components
import SearchForm from "../Components/SearchForm"
import RandomButton from "../Components/RandomButton"

const Main = (props) => {
//Searched Joke
  const [searchJoke, setSearchJoke] = React.useState(null)

  const getSearched = async (searchTerm) => {
    const response = await fetch(
      `https://icanhazdadjoke.com/search`,
      {headers: {limit: "5", term: {searchTerm}}
    })
    
    const data = await response.json()
    
    setSearchJoke(data)
  }


  //Random Joke
  const getRandom= async () => {  
    const response = await fetch(`https://icanhazdadjoke.com`, {
      headers: {Accept: "application/json"}
    })
    const data = await response.json()
    console.log('data-', data)
  }

  getRandom()

    return(
        <div>
            Welcome to Get a Dad Joke! Where you can get your dad joke fix. Search for jokes by keyword or get a random joke.
            <SearchForm jokesearch={getSearched}/>
            <RandomButton />
        </div>
    )
}

export default Main