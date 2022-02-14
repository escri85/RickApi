import React from "react";
import Boton from "../../styledComponents/Boton";
import { connect } from "react-redux";

const Card = (props,  {agregarProductoAlCarrito }) => {
  const { characterChosen, character } = props;

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(character);
  // };

  return (
    <div className="container">
      {!characterChosen ? (
        <h1>elige un nombre</h1>
      ) : (
        // <form action="" onSubmit={onSubmit}>
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
                {/* <Boton type="submit">add to cart</Boton> */}
              </div>
              <Boton
                onClick={() =>
                  agregarProductoAlCarrito(character.id, character.name)
                }
              >
                add to cart
              </Boton>
            </div>
          </div>
        // </form>
      )}
    </div>
  );
};
const mapStateToProps = (estado) => {
  return { productos: estado.character };
};
const mapDispatchToProps = (dispatch) => {
  return {
    agregarProductoAlCarrito: (idCard, name) => {
      dispatch({ type: "AGREGAR_CARD", idCard: idCard, name: name });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
