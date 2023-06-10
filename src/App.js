import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Linda", id: "180bcc" },
        { name: "Frank", id: "4kdfd" },
        { name: "Joly", id: "1094j" },
        { name: "Ali", id: "e3f88" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monsters) => {
          return <h1 key={monsters.id}>{monsters.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
