import { useEffect } from "react";
import Header from "../components/header";
import ProfilePokemon from "../components/pokemonProfile";
import Footer from "../components/footer";
const DetailsPage = () => {
  //Check if the pokemon exists
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div>
        <Header></Header>
        <div className="text-center justify-center items-center ">
          <ProfilePokemon></ProfilePokemon>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default DetailsPage;
