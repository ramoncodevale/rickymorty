import React, { useState, useEffect } from "react";
import Logo from '../assets/logo.png';
import { api } from "../lib/api";


const Navbar = () => {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      await api
        .get("/character")
        .then((response) => {
          setCharacters(response.data.results);
        console.log(response.data.results)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className='bg-zinc-900 flex justify-between px-6 w-full h-[80px]'>
       <img className='w-[200px]' src={Logo} /> 
       <form>
        <input className=" bg-white placeholder-black mt-[20px] px-3 rounded-md sm:w-9 md:w-32 lg:w-54 h-8 " type="text"   name="search" placeholder='Search character ...' value={searchText} onChange={handleSearch}   />
        <button className="bg-green-800 text-white h-8 w-32 mx-1 rounded-md">Search</button>
  
       </form>
    </div>
  )
}

export default Navbar;