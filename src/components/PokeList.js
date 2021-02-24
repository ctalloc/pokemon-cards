import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    console.log(this.props.pokemonData);
    const card = this.props.pokemonData.map((pokeCard, i) => {
      return <li key={i}>
          <Pokemon pokeData={pokeCard}></Pokemon>
      </li>;
    });
    return (
      <div>
        <ul>{card}</ul>
      </div>
    );
  }
}

export default PokeList;
