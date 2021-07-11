import Skeleton from "react-loading-skeleton";
import TextPill from "../extra/pill-text";

const ProfileHeader = ({ image, name, order, types, abilities }) => {
  console.log("oder", order);
  //The types is an array that inside contains an object, i realized there are just few types max 3
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
        <div className="grid mt-4 grid-cols-1 md:grid-cols-4 gap-10">
          <p className="font-medium">Abilities: </p>
          {abilities?.map((element, index) => (
            <TextPill
              className="md:mr-10x"
              id={index}
              value={element.ability.name}
              color={"ability"}
            ></TextPill>
          ))}
        </div>
        {/* Types start here */}
        <div className="grid mt-4 grid-cols-1 md:grid-cols-4 gap-10">
          <p className="font-medium ">Types: </p>
          {types?.map((element, index) => (
            <TextPill
              value={element.type.name}
              color={element.type.name}
              id={index}
            ></TextPill>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Skeleton count={1} width={1300} height={156}></Skeleton>
  );
};

export default ProfileHeader;
