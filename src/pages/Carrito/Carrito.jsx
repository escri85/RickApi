import React from "react";
import { connect } from "react-redux";
import './Carrito.scss'
const Carrito = ({ carrito }) => {
  return (
    <div className="container__card">
      
      {carrito.length > 0 ? (
        carrito.map((character, id) => {
          return (
            <div key={id} className='card'>
              <div className="card__image">
                <img src={character.image} alt="" />
              </div>
              <p>nombre: {character.name}</p>
              <p> cantidad :{character.cantidad}</p>
            </div>
          );
        })
      ) : (
        <p>aun no hay productos en el carro</p>
      )}
    </div>
  );
};

const mapStateToProps = (estado) => {
  return {
    carrito: estado.carrito,
  };
};

export default connect(mapStateToProps)(Carrito);
