import Skeleton from 'react-loading-skeleton';


const ProfileHeader = ( {image, name, order}) => {

    console.log(image, name, order);

    return ( 
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <div className="container flex justify-center items-center">
                    <img
                    className="rounded-full h-40 w-40 flex"
                    alt="Hey hey"
                    src={image}
                    ></img>
            </div> 
            <div className="flex items-center justify-center flex-col col-span-2">
                <div className="container flex items-center">
                    <p className="text-2xl mr-4">Name: {name}</p>
                </div>

                <div className="container flex mt-4">
                    <p className="font-medium">Order: {!order ? <Skeleton count={1} height={24}></Skeleton> : order}</p>
                </div>
            </div>
        </div>

    );    
    


}
 
export default ProfileHeader;