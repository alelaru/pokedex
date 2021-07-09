import { Link } from "react-router-dom";


const Pokemon = ({ name }) => {
    return (
        <div className="cursor-pointer ">
            <Link to={`/profile/${name}`} className="">
            <h1 >{name}</h1>
            </Link>
        </div>
    );
}

export default Pokemon;