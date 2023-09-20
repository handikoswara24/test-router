import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import Ask from "./Ask";
import About from "./About"

function App() {
  return (
    <div className="App">
      <h1>Hiii</h1>
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/ask" component={Ask}></Route>

        <Route exact path="/about" component={About}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
