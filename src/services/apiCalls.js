import axios from "axios";

//Function to call all the pokemons from the Dashboard from the number of pokemon we need
export async function fetchAllPokemons(offset: number){
  var results = [];
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=250&offset=${offset}`)
    .then((res) => {
      results = res.data.results;
    })
    .catch((err) => {
      console.log("error");
      results = [];
    });

  return results;
};

//Function to call the details of a pokemon if its not successfull then it will return undefined or
//the details of the pokemon if successfull
export const getDetailesFromPokemon = async (pokemonName: string) => {
  var results = {};
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((resp) => {
      results = resp.data;
      //   console.log(evolutionChaiUrl);
      console.log("Enter");
    })
    .catch((err) => {
      console.log(err.message);
      results = undefined;
    });

  //   `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  // console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  // console.log(results.data);
  // console.log("I finished the call");
  return results;
};

//Function to call get the evolution-chain, first it will call the species api and get the chain from there
//The next step is to get the information from the evolution chain api
//It calls frist the species api to get the chain-evolution id and then make the correct call
export const getEvolutionChainFromId = async (pokemonId: number) => {
  var done = false;
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
      return undefined;
      console.log(err.message);
    });

  //I couldnt make a double call from just one axios call
  //Second call to the evolution_chain to get the chain Url, if success we assign the info to the variable evolution_chain
  //We will iterate evolution_chain if evolution_chain exists to get
  await axios
    .get(evolutionChaiUrl)
    .then((resp) => {
      evolution_chain = resp.data.chain;
      done = true;
    })
    .catch((err) => {
      console.log(err.message);
      return undefined;
    });

  //Here we have an object with the following structure    https://pokeapi.co/api/v2/evolution-chain/1/
  //We iterate till evolves_to has a length of 0 that means there are not more pokemons to be retrieved
  while (done && evolution_chain) {
    evolutionArray.push({
      name: evolution_chain.species.name,
      url: evolution_chain.species.url
        .substr(0, evolution_chain.species.url.lastIndexOf("/"))
        .split("es/")
        .pop(),
    });

    if (evolution_chain.evolves_to.length === 0) {
      done = false;
    } else {
      evolution_chain = evolution_chain.evolves_to[0];
    }
  }

  return evolutionArray;
};
