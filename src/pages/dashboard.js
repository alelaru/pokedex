import { useEffect, useState } from "react";
import Pokemon from "../components/pokemon/pokemon";
import Skeleton from "react-loading-skeleton";
import { getAllPokemons } from "../services/apiCalls";
import Header from "../components/header";

var numberOfPokemons = 0;

const Dashboard = () => {
  const [pokemonList, setPokemonList] = useState([]);

  async function checkPokemons(offset) {
    const pokemons = await getAllPokemons(offset);
    if (pokemons) {
      setPokemonList([...pokemonList, ...pokemons]);
    } else {
      //Here it will take us to another page NOT FOUND or refresh it
      console.log("No hay pokemons", pokemons);
    }
  }

  useEffect(() => {
    checkPokemons(numberOfPokemons);
  }, []);

  const loadMorePokemons = () => {
    // console.log(numberOfPokemons);
    numberOfPokemons = numberOfPokemons + 20;
    checkPokemons(numberOfPokemons);
  };

  return (
    <>
      <Header></Header>
      <button type="button" onClick={loadMorePokemons}>
        {" "}
        Load more
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mt-3">
        {!pokemonList ? (
          <Skeleton count={1} width={1350} height={600}></Skeleton>
        ) : (
          pokemonList.map((pokemon, id) => (
            <Pokemon key={id} pokemonName={pokemon.name} />
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;
