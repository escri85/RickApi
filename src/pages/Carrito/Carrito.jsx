import React from "react";
import { connect } from "react-redux";

const Carrito = ({ carrito }) => {
  return (
    <div>
      <h1>carrito</h1>
      {carrito.length > 0 ? (
        carrito.map((character, id) => {
          return (
            <div key={id}>
              <div className="image">
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
