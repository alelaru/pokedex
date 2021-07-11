import Skeleton from "react-loading-skeleton";

const ProfileHeader = ({ image, name, order, types, abilities }) => {
  // console.log("The type is",types);
  //The types is an array that inside contains an object, i realized there are just few types

  //If there is not an image an skeleton will appear
  return image ? (
    // First div here we need to change everything to go in 1 row when small
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-3">
      {/* Image of the pokemon */}
      <div className="flex items-center justify-center flex-col">
        <img
          className="rounded-full border-4 border-gray-primary border-solid h-40 w-40 flex mt-2"
          alt={name}
          src={image}
        ></img>
      </div>
      {/* The information of the header name, abilities and types */}
      <div className="flex items-center justify-center flex-col col-span-1 sm:col-span-2">
        {/* //Here the Name starts */}
        <div className="container md:flex">
          <p className="capitalize text-3xl">
            {name} #{order}
          </p>
        </div>
        {/* Abilities and Types tried to split it in different components but not successfull*/}
        <div className="grid mt-4 grid-cols-1 md:grid-cols-4">
          <p className="font-medium md:mr-10">Abilities: </p>
          {abilities?.map((element, index) => (
            <p
              key={index}
              className={`md:mr-10 bg-type-ability border border-solid rounded-xl w-32 h-7 text-white`}
            >
              {element.ability.name}
            </p>
          ))}
        </div>
        {/* Types start here */}
        <div className="grid mt-4 grid-cols-1 md:grid-cols-4">
          <p className="font-medium md:mr-14">Types: </p>
          {types?.map((element, index) => (
            <p
              key={index}
              className={`md:mr-10 bg-type-${element.type.name} border rounded-xl w-32 h-7 text-white`}
            >
              {element.type.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Skeleton count={1} width={1300} height={156}></Skeleton>
  );
};

export default ProfileHeader;
