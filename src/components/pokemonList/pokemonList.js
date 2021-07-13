import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { fetchAllPokemons } from "../../services/apiCalls";
import PillButton from "../extra/pill-button";
import Pokemon from "../pokemon/pokemon";


const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  //This functions calls the asyncronous funcions of getAllPokemons from services/apiCalls
    
  async function checkPokemons(offset) {
    const pokemons = await fetchAllPokemons(offset);
    if (pokemons.length > 0) {
      setPokemonList([...pokemonList, ...pokemons]);
    } else {
      //Here it will take us to another page NOT FOUND or refresh it
      console.log("No hay pokemons", pokemons);
    }
  }

  useEffect(() => {
    checkPokemons(pokemonList.length);
  }, []);

  const loadMorePokemons = async () => {
    console.log(pokemonList.length);
    checkPokemons(pokemonList.length);
    console.log(pokemonList.length);
  };

  return (
    <>
      {! pokemonList.length > 0 ? (
        <div data-testid="loading">
        <Skeleton data-testid="loading" count={1} width={1350} height={600}></Skeleton>
        </div>
      ) : (
        <>
          {pokemonList.map((pokemon, id) => (
            <Pokemon key={id} pokemonName={pokemon.name} />
          ))}
          {pokemonList.length < 1118 ? (
            <div data-testid="resolved" className="flex justify-center m-4 p-4 py-6 rounded-full border round border-gray-primary bg-white text-center hover:bg-type-flying shadow-xl md:col-start-2 sm:col-span-3 md:col-span-2 ">
              <PillButton
                customClickEvent={loadMorePokemons}
                text={"Load more pokemons"}
              ></PillButton>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default PokemonList;
