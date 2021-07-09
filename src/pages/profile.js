import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailesFromPokemon } from "../services/apiCalls";
import Header from "../components/header/header"
import Skeleton from 'react-loading-skeleton';


//Page with the information of the pokemon
// picture
// name
// abilities
// type
// order-number
// stats
// possible evolutions
// moves

const DetailsPage = () => {
    const {pokemonName} = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({});
    // console.log(pokemonName);

    useEffect(() => {
        
        // axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => {
        //     console.log(res.data);
        // })

        //Function that calls the apiCalls in the services folder with axios and checks if there is a pokemon or not
        async function getPokemon(){
            const pokemon = await getDetailesFromPokemon(pokemonName);
            if(pokemon){
                setPokemonDetails(pokemon)
                console.log("Entré");
            }
            else{
                //Here it will take us to another page NOT FOUND or refresh it
                console.log(pokemon);
            }       
        }

        getPokemon();        
        

        // console.log("Pokemon Data", pokemonDetails);
        // getDetailesFromPokemon(pokemonName);
        
    }, [pokemonName]);

    // }, [pokemonDetails, pokemonName]);

    return (
        <>
            <Header></Header> 
            { ! pokemonDetails ? 

            <Skeleton count={1} width={1350} height={600}></Skeleton>
            
            : 
            <div className="text-center justify-center items-center">
                <div>{pokemonName}</div>
                <img src={pokemonDetails.sprites?.front_default} alt={pokemonDetails.id} width={200}></img> 
                <div>{pokemonDetails.base_experience}</div>
            </div> 
            }
        </> 
    );
}
 
export default DetailsPage;