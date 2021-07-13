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
      if (pokemon !== undefined) {
        setPokemonDetails(pokemon);
      } else {
        //Here it will take us to another page NOT FOUND or refresh it
        // console.log("NO ENCONTRÓ NADA");
        history.push(ROUTES.NOT_FOUND);
        setPokemonDetails(undefined)
      }
    }
    getPokemon();
  }, [pokemonName, history]);

  return pokemonDetails ? (
    <>
      <ProfileHeader
        image={pokemonDetails.sprites?.front_default}
        name={pokemonDetails?.name}
        order={pokemonDetails?.order}
        types={pokemonDetails?.types}
        abilities={pokemonDetails?.abilities}
      ></ProfileHeader>
      <div className="h-16 border-t border-gray-primary mt-12 pt-4 text-center justify-center items-center">
        <ProfileDetails
          moves={pokemonDetails?.moves}
          stats={pokemonDetails?.stats}
          pokemonId={pokemonDetails?.id}
        ></ProfileDetails>
      </div>
    </>
  ) : null;
};

export default ProfilePokemon;
