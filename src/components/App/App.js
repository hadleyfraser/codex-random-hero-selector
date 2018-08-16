import React, { Component } from "react";
import Generator from "../Generator/Generator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Code Hero Picker</h1>
        </header>
        <Generator />
      </div>
    );
  }
}

export default App;