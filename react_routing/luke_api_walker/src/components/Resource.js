import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Resource = () => {
    const {category, id} = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(data => {console.log(data.data); setItem(data.data)})
        .catch(() => navigate('/error'))
    }, [category, id]);

    return (
        <>
            {
                (category === 'people') &&
                    (<div>
                        <h1>{item.name}</h1>
                        <h3>Height:  {item.height} cm</h3>
                        <h3>Mass:  {item.mass} kg</h3>
                        <h3>Hair Color:  {item.hair_color}</h3>
                        <h3>Skin Color:  {item.skin_color}</h3>
                    </div>)
            }
            {
                (category === 'planets') && 
                    (<div>
                        <h1>{item.name}</h1>
                        <h3>Climate:  {item.climate}</h3>
                        <h3>Terrain:  {item.terrain}</h3>
                        <h3>Orbital Period:  {item.orbital_period} days</h3>
                        <h3>Rotation Period:  {item.rotation_period} days</h3>
                    </div>)
            }
            {
                (category === 'starships') &&
                    (<div>
                        <h1>{item.name}</h1>
                        <h3>Model:  {item.model}</h3>
                        <h3>Starship Class:  {item.starship_class}</h3>
                        <h3>Crew:  {item.crew}</h3>
                        <h3>Passengers:  {item.passengers}</h3>
                    </div>)
            }
            {
                (category === 'vehicles') &&
                    (<div>
                        <h1>{item.name}</h1>
                        <h3>Model:  {item.model}</h3>
                        <h3>Vehicle Class:  {item.vehicle_class}</h3>
                        <h3>Manufacturer:  {item.manufacturer}</h3>
                        <h3>Length:  {item.length} m</h3>
                    </div>)
            }
            {
                (category === 'films') &&
                    (<div>
                        <h1>{item.title}</h1>
                        <h3>Director:  {item.directory}</h3>
                        <h3>Producer:  {item.producer}</h3>
                        <h3>Release Date:  {item.release_date}</h3>
                        <h3>Opening Crawl:  {item.opening_crawl}</h3>
                    </div>)
            }
            {
                (category === 'species') &&
                    (<div>
                        <h1>{item.name}</h1>
                        <h3>Classification:  {item.classification}</h3>
                        <h3>Designation:  {item.designation}</h3>
                        <h3>Average Height:  {item.average_height} cm</h3>
                        <h3>Average Lifespan:  {item.average_lifespan} yrs</h3>
                    </div>)
            }
        </>
    )
}
export default Resource;
