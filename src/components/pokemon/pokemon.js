import { Link } from "react-router-dom";


const Pokemon = ({ pokemonName }) => {
    return (
        <div className="cursor-pointer ">
            <Link to={`/p/${pokemonName}`} className="">
                <h1 >{pokemonName}</h1>
            </Link>
        </div>
    );
}

export default Pokemon;