import PokemonList from "../components/pokemonList/pokemonList";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect } from "react";

const Dashboard = () => {

  useEffect(() => {
    
  
    document.title = "Pokedex"
  }, [ ]);

  return (
    <div className="bg-gray-background">
      <Header></Header>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mt-3">
        <PokemonList></PokemonList>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
