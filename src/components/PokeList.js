import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.scss";

class PokeList extends React.Component {
  render() {
    const card = this.props.pokemonData.map((pokeCard, i) => {
      return <li key={i}>
          <Pokemon pokeData={pokeCard}></Pokemon>
      </li>;
    });
    return (
      <div>
        <ul className="pokeList">{card}</ul>
      </div>
    );
  }
}

export default PokeList;
