import React from "react"
import { Route, Switch } from "react-router-dom"

//Styles
import './App.css';

//Components
import Footer from "./Components/Footer"
import Header from "./Components/Header"

//Pages
import About from "./Pages/About"
import Main from "./Pages/Main"

function App(props) {

  return (
    <div className="app">
      <div className="app__background">
        <Header />
        <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/" render={(renderProps) => {
                  return <Main {...renderProps}/>
                  }}/>
        </Switch>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
