import React from 'react'

const Card = ({name, image, gender, species, status}) => {
  return (
    <div className='w-[250px]  bg-black mx-3 mt-10'>
        <h1 className='text-white'>{name}</h1>
        
        <img src={image} alt="" />
        <p className='text-white'>{gender}</p>
        <p className='text-white'>{species}</p>
        <p className='text-white'>{status}</p>

    </div>
  )
}

export default Card