import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailesFromPokemon } from "../services/apiCalls";
import Header from "../components/header"
import Skeleton from 'react-loading-skeleton';
import ProfileHeader from "../components/pokemonProfile/header";
import ProfileDetails from "../components/pokemonProfile/profile-details";


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
 
        //Function that calls the apiCalls in the services folder with axios and checks if there is a pokemon or not
        async function getPokemon(){
            const pokemon = await getDetailesFromPokemon(pokemonName)
            console.log("The pokemon we recieve", pokemon);
            if(pokemon){
                setPokemonDetails(pokemon)
                console.log("Entré");
            }
            else{
                //Here it will take us to another page NOT FOUND or refresh it
                console.log("No se encontró tu pokemon",pokemon);
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
            <div className="text-center justify-center items-center bg-gray-background">
                <ProfileHeader image={pokemonDetails.sprites?.front_default} name={pokemonDetails?.name} order={pokemonDetails?.order} types={pokemonDetails?.types}></ProfileHeader>
                <ProfileDetails moves={pokemonDetails?.moves}></ProfileDetails>
            </div> 
            }
        </> 
    );
}
 
export default DetailsPage;