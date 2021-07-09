import Skeleton from 'react-loading-skeleton';


const ProfileDetails = ( {moves}) => {

    console.log("MOVES", moves);
    
    return ( 

        <div className="h-16 border-t border-gray-primary mt-12 pt-4">
            <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
                {!moves ? (
                    <>
                        <Skeleton count={12} width={320} height={400}></Skeleton>
                    </>
                )
                : moves.length > 0 ?
                        <div className="relative group">
                            <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden">                            
                            </div>
                        </div>
                : null
                }
            </div>
        </div>        
    );
}
 
export default ProfileDetails;