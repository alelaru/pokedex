import Skeleton from "react-loading-skeleton";

const ProfileHeader = ({ image, name, order, types, abilities }) => {
  // console.log("The type is",types);
  //The types is an array that inside contains an object, i realized there are just few types

  //If there is not an image an skeleton will appear
  return image ? (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      {/* Image of the pokemon */}
      <div className="flex items-center justify-center flex-col">
        <img
          className="rounded-full border-4 border-gray-primary border-solid h-40 w-40 flex mt-4"
          alt={name}
          src={image}
        ></img>
      </div>
      {/* The information of the header name and order together */}
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="capitalize text-3xl mr-4">
            {name} #{order}
          </p>
        </div>
        {/* Abilities and Types*/}
        <div className="container flex mt-4 ">
          <p className="font-medium mr-10">Abilities: </p>
          {abilities?.map((element, index) => (
            <p
              key={index}
              className={`mr-10 bg-type-ability border border-solid rounded-xl w-36 h-7 text-white`}
            >
              {element.ability.name}
            </p>
          ))}
        </div>
        <div className="container flex mt-4 ">
          <p className="font-medium mr-14">Types: </p>
          {types?.map((element, index) => (
            <p
              key={index}
              className={`mr-10 bg-type-${element.type.name} border rounded-xl w-36 h-7 text-white`}
            >
              {element.type.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <>
      <Skeleton count={1} width={1300} height={156}></Skeleton>
    </>
  );
};

export default ProfileHeader;
