import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Linda" },
        { name: "Frank" },
        { name: "Joly" },
        { name: "Ali" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monsters) => {
          return <h1>{monsters.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;