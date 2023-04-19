import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='bg-zinc-900 flex justify-evenly w-full h-[80px]'>
       <img className='w-[200px]' src={Logo} /> 
       <div>
        <input className="w-48 h-8 bg-white placeholder-black mt-[20px] px-5 " type="text"   name="search" placeholder='Search character ...' id="" />
       </div>
    </div>
  )
}


export default Navbar
