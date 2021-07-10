import { useEffect } from "react";
import Header from "../components/header";
import ProfilePokemon from "../components/pokemonProfile";

const DetailsPage = () => {
  //Check if the pokemon exists
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="bg-gray-background">
      <Header></Header>
      <div className="text-center justify-center items-center bg-gray-background">
        <ProfilePokemon></ProfilePokemon>
      </div>
    </div>
  );
};

export default DetailsPage;
