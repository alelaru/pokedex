import { useEffect, useState } from "react";
import { getEvolutionChainFromId } from "../../services/apiCalls";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import ProgressBar from "./progressBar";
import PillButton from "../extra/pill-button";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Footer from "../footer";
import TextPill from "../extra/pill-text";

const ProfileDetails = ({ moves, stats, pokemonId }) => {
  //Get evolution from making an API request
  const [evolutions, setEvolutions] = useState([]);
  let history = useHistory();

  const handleClick = () => {
    history.push(ROUTES.DASHBOARD);
  };

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

  return evolutions.length > 0 && moves ? (
    <>
      {/* Statistics starts it has almost the same format as Evolution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-3 mb-8">
        <div className="flex md:col-span-3  items-center justify-center font-bold text-2xl">
          <p>Statistics</p>
        </div>
        {stats?.map((item, id) => (
          <div key={id} className="flex items-center justify-center flex-col">
            <p>
              {item.stat.name} : {item.base_stat}
            </p>
            <ProgressBar progressPercentage={item.base_stat}></ProgressBar>
          </div>
        ))}
      </div>
      {/* Here is the Evolution part flex-col of 4 elements, there are maximium 3 evolutions*/}
      <div>
        <div className="flex justify-center font-bold text-2xl">
          <p>Evolution</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-3 ">
          {evolutions?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col"
            >
              <img
                alt={item.name}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url}.png`}
              ></img>
              <p key={item.name}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Moves starts it has almost the same format as Evolution */}
      <div className="flex justify-center font-bold text-2xl mt-8">
        <p>Moves</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between mx-auto max-h-44 max-w-screen-lg mt-3 overflow-y-auto border-t-2 border-b-2 rounded border-gray-primary p-4">
        {moves?.map((item, id) => (
          <TextPill id={id} value={item.move.name} color="ability"></TextPill>
        ))}
      </div>
      {/* <div className="flex justify-center font-bold text-2xl m-4 p-4 py-6 w-2/4 rounded-full border round border-gray-primary bg-white hover:bg-type-flying shadow-xl "> */}
      <div className="flex justify-center w-8/12 sm:w-6/12 font-bold text-2xl mx-auto p-4 mt-6 rounded-full border round border-gray-primary bg-white hover:bg-type-flying shadow-xl">
        <PillButton
          text="Go back to Homepage"
          customClickEvent={handleClick}
        ></PillButton>
      </div>
      <Footer></Footer>
    </>
  ) : (
    <Skeleton count={1} width={1300} height={400}></Skeleton>
  );
};

export default ProfileDetails;

ProfileDetails.propTypes = {
  moves: PropTypes.array,
  stats: PropTypes.array,
  pokemonId: PropTypes.number,
};
