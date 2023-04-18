import React from 'react'

const Card = ({name, image, gender, species}) => {
  return (
    <div>
        <h1>{name}</h1>
        
        <img src={image} alt="" />
        <p>{gender}</p>
        <p>{species}</p>
    </div>
  )
}

export default Card