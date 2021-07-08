import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../components/pokemon/pokemon';

const Dashboard = () => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
            .then(res => {
                console.log(res.data.results);
                setPokemonList(res.data.results);
            })

    }, []);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
            {pokemonList.map((pokemon, id) => {
                return (
                    <Pokemon key={id} name={pokemon.name} url={pokemon.url} />
                )
            })}
        </div>

    );
}

export default Dashboard;