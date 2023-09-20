import './App.css';
import { Route } from "react-router";
import React from "react"
import Home from './Home';
import Ask from "./Ask";
import About from "./About"

function App() {
  // const baseUrl = document.getElementsByTagName('base')[0]?.getAttribute('href');
  // console.log(baseUrl);
  return (
    <div className="App">
      <h1>Hiii</h1>

      <Route exact path="/" component={Home}></Route>

      <Route exact path="/ask" component={Ask}></Route>

      <Route exact path="/about" component={About}></Route>

    </div>
  );
}

export default App;
