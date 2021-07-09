import { useParams } from "react-router-dom";



const PokemonProfilePage = () => {
    const {pokemonName} = useParams();
    console.log(pokemonName);

    return ( <div>{pokemonName}</div> );
}
 
export default PokemonProfilePage;