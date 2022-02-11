import React from 'react';
import Boton from '../../styledComponents/Boton';

const Card = (props) => {
  const {characterChosen,character}= props

  const onSubmit = (event)=>{
    event.preventDefault()
    console.log(character);
  }


  return (
    
<div className='container'>

{!characterChosen ? (
  <h1>elige un nombre</h1>
) : (
  <form action="" onSubmit={onSubmit}>
  <div className="card">
    <div className="image">
      <img src={character.image} alt="" />
    </div>
    <div className="details">
      <div className="center">
        <h1> Nombre:{character.name}</h1>
        <p>Identificador:{character.id}</p>
        <p>Genero:{character.gender}</p>
        <p>Especie:{character.species}</p>
        <p>Estado:{character.status}</p>
        <Boton type="submit">add to cart</Boton>
      </div>
    </div>
  </div>


  </form>
)}
</div>
  )
};
export default Card