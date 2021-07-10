import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailesFromPokemon } from "../../services/apiCalls";
import ProfileHeader from "./header";
import ProfileDetails from "./profile-details";

const ProfilePokemon = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    //Function that calls the apiCalls in the services folder with axios and checks if there is a pokemon or not
    async function getPokemon() {
      const pokemon = await getDetailesFromPokemon(pokemonName);
      // console.log("The pokemon we recieve", pokemon);
      if (pokemon) {
        setPokemonDetails(pokemon);
        // console.log("Entré");
      } else {
        //Here it will take us to another page NOT FOUND or refresh it
        console.log("No se encontró tu pokemon", pokemon);
      }
    }
    getPokemon();
    // console.log("Pokemon Data", pokemonDetails);
    // getDetailesFromPokemon(pokemonName);
  }, [pokemonName]);

  // }, [pokemonDetails, pokemonName]);

  return (
    <>
      {!pokemonDetails ? (
        <>{/* <Skeleton count={1} width={1350} height={400}></Skeleton> */}</>
      ) : (
        <>
          <ProfileHeader
            image={pokemonDetails.sprites?.front_default}
            name={pokemonDetails?.name}
            order={pokemonDetails?.order}
            types={pokemonDetails?.types}
            abilities={pokemonDetails?.abilities}
          ></ProfileHeader>
          <ProfileDetails
            moves={pokemonDetails?.moves}
            stats={pokemonDetails?.stats}
            pokemonId={pokemonDetails?.id}
          ></ProfileDetails>
        </>
      )}
    </>
  );
};

export default ProfilePokemon;
