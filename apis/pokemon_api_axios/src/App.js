import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=2000")
      .then(data => data.data.results.map(p => p.name))
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
