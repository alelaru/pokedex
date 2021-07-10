import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getEvolutionChainFromId } from "../../services/apiCalls";
import PropTypes from "prop-types";

const ProfileDetails = ({ moves, stats, pokemonId }) => {
  // console.log("MOVES", moves);
  const [evolutions, setEvolutions] = useState([""]);

  useEffect(() => {
    async function getEvolutions() {
      const evolutions = await getEvolutionChainFromId(pokemonId);
      // console.log("The pokemon we recieve", pokemon);
      if (evolutions) {
        setEvolutions(evolutions);
        console.log(evolutions);
      } else {
        //Here it will take us to another page NOT FOUND or refresh it
        console.log("No se encontraron cadenas de evoluciones", evolutions);
      }
    }

    if (pokemonId) {
      getEvolutions();
    }
  }, [pokemonId, stats, moves]);

  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        <div className="relative group">
          {moves?.map((item, id) => (
            <p key={id}>{item.move.name}</p>
          ))}
        </div>
        <div className="relative group">
          {stats?.map((item, id) => (
            <p key={id}>{item.stat.name}</p>
          ))}
        </div>
        <div className="relative group">
          {evolutions?.map((item, id) => (
            <p key={id}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

ProfileDetails.propTypes = {
  moves: PropTypes.array.isRequired,
  stats: PropTypes.array.isRequired,
  pokemonId: PropTypes.number.isRequired,
};
