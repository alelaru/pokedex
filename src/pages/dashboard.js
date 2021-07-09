import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../components/pokemon/pokemon';
import Skeleton from 'react-loading-skeleton';

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

        <div className="bg-gray-background text-center">
        <div>Pokedex</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
            {
             ! pokemonList ?(
                <Skeleton count={1} width={1350} height={600}></Skeleton>
                )
                :(
                pokemonList.map((pokemon, id) => <Pokemon key={id} name={pokemon.name} />)
                )
            }
        </div>
        </div>

    );
}

export default Dashboard;