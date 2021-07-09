import { useEffect, useState } from 'react';
import Pokemon from '../components/pokemon/pokemon';
import Skeleton from 'react-loading-skeleton';
import { getAllPokemons } from '../services/apiCalls';
import Header from "../components/header";


const Dashboard = () => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {

       async function checkPokemons(){
            const pokemons = await getAllPokemons();
            if(pokemons){
                setPokemonList(pokemons)
            }
            else{
                //Here it will take us to another page NOT FOUND or refresh it
                console.log(pokemons);
            }       
        }

       checkPokemons();

    }, []);


    return (

        <div className="bg-gray-background">
        <Header></Header>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 mt-3">
            {
             ! pokemonList ?(
                <Skeleton count={1} width={1350} height={600}></Skeleton>
                )
                :(
                pokemonList.map((pokemon, id) => <Pokemon key={id} pokemonName={pokemon.name} />)
                )
            }
        </div>
        </div>

    );
}

export default Dashboard;