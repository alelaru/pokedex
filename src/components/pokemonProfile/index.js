import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getDetailesFromPokemon } from "../../services/apiCalls";
import ProfileHeader from "./header";
import ProfileDetails from "./profile-details";
import * as ROUTES from "../../constants/routes";

const ProfilePokemon = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({});
  const history = useHistory();

  useEffect(() => {
    //Function that calls the apiCalls in the services folder with axios and checks if there is a pokemon or not
    async function getPokemon() {
      const pokemon = await getDetailesFromPokemon(pokemonName);
      // console.log("The pokemon we recieve", pokemon);
      console.log("NO HAY", pokemon);
      if (pokemon !== undefined) {
        setPokemonDetails(pokemon);
        // console.log("Entré");
      } else {
        //Here it will take us to another page NOT FOUND or refresh it
        history.push(ROUTES.NOT_FOUND);
      }
    }
    getPokemon();
    // console.log("Pokemon Data", pokemonDetails);
    // getDetailesFromPokemon(pokemonName);
  }, [pokemonName, history]);

  // }, [pokemonDetails, pokemonName]);

  return pokemonDetails ? (
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
  ) : null;
};

export default ProfilePokemon;
