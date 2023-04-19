import React from "react";

const Card = ({ name, image, gender, species, status }) => {
  return (
    <div className="w-[300px] mx-3 mt-10  max-w-md p-4 bg-zinc-900 border border-green-200  rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-white mb-10 text-xl px-[80px]">{name}</h1>
      <img className="rounded-full" src={image} alt="" />
      <p className="text-white mt-3 text-xl px-[100px] ">{gender}</p>
      <p className="text-white mt-3 text-xl px-[100px]">{species}</p>
      <p className="text-white mt-3 text-xl px-[100px]">{status}</p>
    </div>
  );
};

export default Card;
