import Header from "../components/header";
import ProfilePokemon from "../components/pokemonProfile";
const DetailsPage = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="text-center justify-center items-center ">
          <ProfilePokemon></ProfilePokemon>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
