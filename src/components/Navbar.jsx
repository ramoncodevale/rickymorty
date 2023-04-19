import React from 'react'
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='bg-zinc-900 flex justify-between px-6 w-full h-[80px]'>
       <img className='w-[200px]' src={Logo} /> 
       <div>
        <input className="w-54 h-8 bg-white placeholder-black mt-[20px] px-3 rounded-md " type="text"   name="search" placeholder='Search character ...'  />
        <button className="bg-green-800 text-white h-8 w-32 mx-1 rounded-md">Search</button>
       </div>
    </div>
  )
}


export default Navbar
