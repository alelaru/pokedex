import { useEffect, useState } from "react";
import { getEvolutionChainFromId } from "../../services/apiCalls";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

const ProfileDetails = ({ moves, stats, pokemonId }) => {
  //Get evolution from making an API request
  const [evolutions, setEvolutions] = useState([{}]);

  useEffect(() => {
    async function getEvolutions() {
      const apiResult = await getEvolutionChainFromId(pokemonId);
      // console.log("The pokemon we recieve", pokemon);
      if (apiResult) {
        // console.log("Esto regresa del API", apiResult);
        setEvolutions(apiResult);
        // console.log("Aquí están las evoluciones", evolutions);
      } else {
        //Here it will take us to another page NOT FOUND or refresh it
        console.log("No se encontraron cadenas de evoluciones");
      }
    }

    if (pokemonId) {
      getEvolutions();
    }
  }, [pokemonId, stats, moves]);

  return evolutions.length > 1 ? (
    <>
      {/* Here is the Evolution part flex-col of 4 elements, there are maximium 3 evolutions*/}
      <div className="flex justify-center font-bold text-2xl">
        <p>Evolution</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-3 ">
        {evolutions?.map((item) => (
          <div className="flex items-center justify-center flex-col">
            <img
              alt={item.name}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url}.png`}
            ></img>
            <p key={item.name}>{item.name}</p>
          </div>
        ))}
      </div>
      {/* Statistics starts it has almost the same format as Evolution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-3 mb-8">
        <div className="flex md:col-span-3  items-center justify-center font-bold text-2xl">
          <p>Statistics</p>
        </div>
        {stats?.map((item, id) => (
          <div className="flex items-center justify-center flex-col">
            <p key={id}>
              {item.stat.name}: {item.base_stat}
            </p>
          </div>
        ))}
      </div>

      {/* Moves starts it has almost the same format as Evolution */}
      <div className="flex justify-center font-bold text-2xl">
        <p>Moves</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto max-h-36 max-w-screen-lg mt-3 overflow-y-auto">
        {moves?.map((item, id) => (
          <div className="flex items-center justify-center flex-col">
            <p key={id}>{item.move.name}</p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <Skeleton count={1} width={1300} height={400}></Skeleton>
  );
};

export default ProfileDetails;

ProfileDetails.propTypes = {
  moves: PropTypes.array.isRequired,
  stats: PropTypes.array.isRequired,
  pokemonId: PropTypes.number.isRequired,
};
