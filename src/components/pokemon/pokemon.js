import { Link } from "react-router-dom";

const Pokemon = ({ pokemonName }) => {
  return (
    <div className="flex justify-center m-4 p-4 py-6 rounded-sm border border-gray-primary bg-white text-center hover:bg-gray-primary shadow-xl">
      <Link to={`/p/${pokemonName}`} className="">
        <h1 className="font-medium capitalize text-xl">{pokemonName}</h1>
      </Link>
    </div>
  );
};

export default Pokemon;
