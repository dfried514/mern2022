import React, { useState } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=2000")
      .then(response => response.json())
      .then(data => data.results.map(p => p.name))
      .then(names => setPokemon(names))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <button onClick={ fetchData }>Fetch Pokemon</button>
        {
          pokemon.length > 0 && (
            <ul>
              { pokemon.map((name, i) => (
                <li key={i}>{ name }</li>
              ) ) }
            </ul>
          )
        }
    </div>
  )
}
export default App;
