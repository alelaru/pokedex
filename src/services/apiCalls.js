import axios from "axios";

//Function to call all the pokemons from the Dashboard page without arguments
export const getAllPokemons = async (offset) => {
  console.log(offset);
  console.log(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
  const results = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  );

  // console.log(results);

  return results.data.results;
};

//Function to call the details of a pokemon
export const getDetailesFromPokemon = async (pokemonName) => {
  const results = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  // console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  // console.log(results.data);
  // console.log("I finished the call");
  return results.data;
};

//Function to call get the evolution-chain, first it will call the species api and get the chain from there
//The next step is to get the information from the evolution chain api
//It calls frist the species api to get the chain-evolution id and then make the correct call
export const getEvolutionChainFromId = async (pokemonId: number) => {
  var done = true;
  var evolution_chain = {};
  let evolutionChaiUrl = "";
  let evolutionArray: Array<string> = [];

  //call the first Api to bring the evolution_chain url assign it to evolutionChainUrl and done
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
    .then((resp) => {
      evolutionChaiUrl = resp.data.evolution_chain.url;
      //   console.log(evolutionChaiUrl);
    })
    .catch((err) => {
      console.log(err.message);
    });

  //I couldnt make a double call from just one axios call
  //Second call to the evolution_chain to get the chain Url, if success we assign the info to the variable evolution_chain
  //We will iterate evolution_chain if evolution_chain exists to get
  await axios
    .get(evolutionChaiUrl)
    .then((resp) => {
      //   console.log("Inside", resp.data.chain);
      evolution_chain = resp.data.chain;
    })
    .catch((err) => {
      console.log(err.message);
    });

  //Here we have an object with the following structure    https://pokeapi.co/api/v2/evolution-chain/1/
  //We iterate till evolves_to has a length of 0 that means there are not more pokemons to be retrieved
  while (done && evolution_chain) {
    evolutionArray.push(evolution_chain.species.name);
    if (evolution_chain.evolves_to.length === 0) {
      done = false;
    } else {
      evolution_chain = evolution_chain.evolves_to[0];
    }
  }

  //   console.log(evolutionArray);
  return evolutionArray;
};
