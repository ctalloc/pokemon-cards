import "../stylesheets/App.scss";

const Pokemon = (props) => {
  const pokeTypes = props.pokeData.types.map((type, i) => {
    return <li className="pokeCard__typeList--item" key={i}>{type}</li>;
  });
  return (
      <article className="pokeCard">
          <img src={props.pokeData.url} alt="Logo" />
          <h2 className="pokeCard__title">{props.pokeData.name}</h2>
          <ul className="pokeCard__typeList">{pokeTypes}</ul>
      </article>
  )
};

export default Pokemon;
