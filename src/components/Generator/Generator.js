import React from "react";
import styled from "styled-components";
import heroList from "./hero-list";

const randomItem = (items) => items[(items.length * Math.random()) | 0];

function pickRandomProperty(obj) {
  var result;
  var count = 0;
  for (var prop in obj) if (Math.random() < 1 / ++count) result = prop;
  return result;
}

class GeneratorBase extends React.Component {
  state = {
    players: [],
    selections: []
  };

  _textareaUpdate = (e) => {
    this.setState({ players: e.target.value.split("\n") });
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
        <textarea onBlur={this._textareaUpdate} />
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

  > div {
    margin-top: 20px;
  }
`;

export default Generator;
