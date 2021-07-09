import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes"

const Header = () => {
    return ( 
        <header className="h-32 bg-white border-b border-gray-primary mb-8">
            {/* This one is used by facebook and other companies as well i just cenetered the PokeApi */}
            <div className="container mx-auto max-w-screen-lg h-full items-center">
                <div className="flex justify-between h-full">
                        <h1 className="flex justify-center w-full">
                            <Link to={ROUTES.DASHBOARD} arial-label="Pokemon-Logo">
                                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI" className="mt-2 w-12/12  "></img>
                            </Link>
                        </h1>
                </div>
            </div>
        </header>
        );
}
 
export default Header;