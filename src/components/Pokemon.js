const Pokemon = (props) => {
  const pokeTypes = props.pokeData.types.map((type, i) => {
    return <li key={i}>{type}</li>;
  });
  return (
      <article>
          <img src={props.pokeData.url} alt="Logo" />
          <h2>{props.pokeData.name}</h2>
          <ul>{pokeTypes}</ul>
      </article>
  )
};

export default Pokemon;
