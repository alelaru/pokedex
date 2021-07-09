import axios from 'axios';


//Function to call all the pokemons from the Dashboard page without arguments
export const getAllPokemons = async() => {
    
    const results = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)

    // console.log(results);

    return results.data.results;
}

//Function to call the details of a pokemon
export const getDetailesFromPokemon = async( pokemonName ) => {
    
    const results = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    // console.log(results.data);
    console.log("Ya terminé el call");
    return results.data;
}