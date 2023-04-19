import React from "react";

const Card = ({ name, image, gender, species, status }) => {
  return (
    <div className="mx-3 mt-10  bg-zinc-900 border border-green-200  rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 md:w-[250px] lg:w-[300px]">
      <div className="flex justify-center">
      <h1 className="text-white text-xl ">{name}</h1>
      </div>
      <div className="flex justify-center mt-2">
      <img className="rounded-full w-[150px]" src={image} alt="" />
      </div>
      <p className="text-white flex justify-center mt-3 text-xl ">{gender}</p>
      <p className="text-white flex justify-center mt-3 text-xl ">{species}</p>
      <p className="text-white flex justify-center mt-3 text-xl ">{status}</p>
    </div>
  );
};

export default Card;
