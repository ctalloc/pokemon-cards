import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.scss";

class PokeList extends React.Component {
  render() {
    const cards = this.props.pokemonData.map((pokeCard, i) => {
      return (
        <li key={i}>
          <Pokemon pokeData={pokeCard}></Pokemon>
        </li>
      );
    });
    return (
      <div>
        <ul className="pokeList">{cards}</ul>
      </div>
    );
  }
}

export default PokeList;
