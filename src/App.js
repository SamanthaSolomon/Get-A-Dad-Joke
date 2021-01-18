import React from "react"
import { Route, Switch } from "react-router-dom"

//Styles
import './App.css';

//Components
import Footer from "./Components/Footer"
import Header from "./Components/Header"

//Pages
import About from "./Pages/About"
import Joke from "./Pages/Joke"
import Main from "./Pages/Main"

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
      <Switch>
        <Route exact path="/">
          <Main />
        </Route> 
        <Route path="/about">
          <About />
        </Route>
        <Route path="/joke">  
          <Joke />
        </Route>
      </Switch> 
      <Footer />
    </div>
  );
}

export default App;
