import React from "react"

//Styles
import './App.css';

//Components
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import RandomButton from "./Components/RandomButton"
import SearchForm from "./Components/SearchForm"

//Pages
import About from "./Pages/About"
import Joke from "./Pages/Joke"
import OnLoad from "./Pages/OnLoad"

function App() {

  const getJoke= async () => {  
    const response = await fetch(`https://icanhazdadjoke.com`, {
      headers: {Accept: "application/json"}
    })
    const data = await response.json()
    console.log('data-', data)
  }

  getJoke()


  return (
    <div className="App">
      <Header />
      <About />
      <OnLoad />
      <Joke />
      <SearchForm />
      <RandomButton />
      <Footer />
    </div>
  );
}

export default App;
