import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getAllPokemons } from "../../services/apiCalls";
import Pokemon from "../pokemon/pokemon";

var numberOfPokemons = 0;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  //This functions calls the asyncronous funcions of getAllPokemons from services/apiCalls
  async function checkPokemons(offset) {
    const pokemons = await getAllPokemons(offset);
    if (pokemons) {
      setPokemonList([...pokemonList, ...pokemons]);
      setLoading(false);
    } else {
      //Here it will take us to another page NOT FOUND or refresh it
      console.log("No hay pokemons", pokemons);
    }
  }

  useEffect(() => {
    numberOfPokemons = 0;
    setLoading(true);
    checkPokemons(numberOfPokemons);
  }, []);

  const loadMorePokemons = () => {
    // console.log(numberOfPokemons);
    numberOfPokemons = numberOfPokemons + 20;
    checkPokemons(numberOfPokemons);
  };

  return (
    <>
      {loading ? (
        <Skeleton count={1} width={1350} height={600}></Skeleton>
      ) : (
        <>
          {pokemonList.map((pokemon, id) => (
            <Pokemon key={id} pokemonName={pokemon.name} />
          ))}
          <div className="flex justify-center m-4 p-4 py-6 rounded-full border round border-gray-primary bg-white text-center hover:bg-type-flying shadow-xl md:col-start-2 sm:col-span-3 md:col-span-2 ">
            <button
              type="button"
              className="font-medium capitalize text-xl"
              onClick={loadMorePokemons}
            >
              Load more pokemons
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonList;
