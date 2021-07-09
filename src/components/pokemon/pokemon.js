import { Link } from "react-router-dom";


const Pokemon = ({ pokemonName }) => {
    return (
        <div className="m-4 p-4 py-6 rounded-sm border border-gray-primary bg-white justify-center text-center" >
            <Link to={`/p/${pokemonName}`} className="">
                    <h1>{pokemonName}</h1>
            </Link>
        </div>

    );
}

export default Pokemon;