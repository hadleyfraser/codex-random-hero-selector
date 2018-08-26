import React, { Component } from "react";
import styled from "styled-components";
import Generator from "../Generator/Generator";

class AppBase extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <header>
          <h1>Codex Random Hero Selector</h1>
        </header>
        <Generator />
      </div>
    );
  }
}

const App = styled(AppBase)`
  text-align: center;

  * {
    box-sizing: border-box;
  }

  header {
    background-color: #222;
    padding: 20px;
    color: white;
  }

  h2 {
    font-size: 1.5em;
  }
`;

export default App;
