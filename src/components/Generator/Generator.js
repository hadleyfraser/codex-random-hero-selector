import React from "react";
import styled from "styled-components";
import heroList from "./hero-list";

const randomItem = (items) => items[(items.length * Math.random()) | 0];

class GeneratorBase extends React.Component {
  state = {
    players: [],
    selections: []
  };

  _textareaUpdate = (e) => {
    this.setState({ players: e.target.value.trim().split("\n") });
  };

  _randomizeHeros = () => {
    const { players } = this.state;

    const keys = Object.keys(heroList);

    if (players.length > keys.length) {
      alert("Too many players");
      this.setState({
        selections: []
      });
      return;
    }

    const selections = players
      .map((player) => {
        const heroColor = randomItem(keys);
        keys.splice(keys.findIndex((color) => heroColor === color), 1);
        return { player, color: heroColor };
      })
      .map(({ player, color }) => {
        return {
          player,
          color,
          hero: randomItem(heroList[color])
        };
      });

    this.setState({ selections });
  };

  render() {
    const { selections } = this.state;
    return (
      <div className={this.props.className}>
        <h2>Player List</h2>
        <textarea onBlur={this._textareaUpdate} placeholder="One player per line" />
        <button onClick={this._randomizeHeros}>Randomize Heroes</button>
        {selections && (
          <div>
            {selections.map((selection) => (
              <div key={selection.player}>
                <strong>{selection.player}:</strong> {selection.color} - {selection.hero}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const Generator = styled(GeneratorBase)`
  width: 800px;
  margin: 0 auto;

  textarea {
    width: 400px;
    height: 200px;
    display: block;
    margin: 0 auto;
    font-size: 16px;
  }

  button {
    display: inline-block;
    margin-top: 10px;
    background: blue;
    color: white;
    border: 0;
    font-size: 16px;
    border-radius: 5px;
    padding: 6px 25px;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }

  > div {
    margin-top: 20px;
  }
`;

export default Generator;
