import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import Axios from "axios";
import Boton from "../../styledComponents/Boton";
import "./Personajes.scss";
const Personajes = ({ agregarProductoAlCarrito }) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  // const [characterChosen, setCharacterChosen] = useState(false);
  // const [genre, setGenre] = useState();

  const [results, setResults] = useState([]);

  const [characterID, setCharacterId] = useState("");
  console.log(characterID);

  useEffect(() => {
    const llamada = () => {
      Axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
        console.log("resultados", res.data.results);
        const result = res.data.results;
        setResults(result);
        // result.map((item) => {
        //   return (
        //     setCharacter(
        //      {
        //       id: item.id,
        //       name: item.name,
        //       image: item.image,
        //       gender: item.gender,
        //       species: item.species,
        //       status: item.status,
        //     }),
        //     setCharacterChosen(true)
        //     // ,setGenre(true)

        //   );
        // });console.log('otro resultado',character)
      });
    };
    llamada();
  }, []);
// const searchRick =()=>{
//   Axios.get(`https://rickandmortyapi.com/api/character/`).then((res) => {
//         console.log("resultados", res.data.results);
//         const result = res.data.results;
// }
//   const filter=()=>{
//     console.log(results);
// // return results.map((item)=>console.log(item.genre))
//   }
const changeAlive=(event)=>{setChecked1(event.value)}

  return (
    <div className="personajes">
      <div className="container__busqueda">
        <InputText
        placeholder="Search"
          type="text"
          onChange={(event) => {
            setCharacterId(event.target.value);
            // console.log(event.target.value);
          }}
          value={characterID.toLowerCase()}
          // onKeyUp={searchRick}
        />
        {/* <Boton onClick={searchRick}>Search</Boton> */}
        <div className="filter">
          <InputSwitch
            inputId="binary"
            checked={checked1}
            onChange={changeAlive}
          />
          <label htmlFor="binary">{checked1 ? "alive" : "death"}</label>
        </div>

        <div className="filter">
          <InputSwitch
            inputId="second"
            checked={checked2}
            onChange={(e) => setChecked2(e.value)}
          />
          <label htmlFor="second">{checked2 ? "male" : "female"}</label>
        </div>
      </div>

      <div className="container__card">
        {results.map((item) => (
          <div key={item.id} className="card">
            <div>
              <img className="card__image" src={item.image} alt="" />
            </div>
            <h1 className="card__name">{item.name}</h1>
            <p>{item.gender}</p>
            <p>{item.status}</p>
            <Boton
              onClick={() =>
                agregarProductoAlCarrito(item.id, item.name, item.image)
              }
            >
              add to cart
            </Boton>
          </div>
        ))}
      </div>
    
    </div>
  );
};

const mapStateToProps = (estado) => {
  return { productos: estado.character };
};
const mapDispatchToProps = (dispatch) => {
  return {
    agregarProductoAlCarrito: (idCard, name, image) => {
      dispatch({
        type: "AGREGAR_CARD",
        idCard: idCard,
        name: name,
        image: image,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Personajes);

// {!characterChosen ? (
//   <h1>elige un nombre</h1>
// ) : (

//   <form action="" onSubmit={onSubmit}>
//     <div className="card">
// results.map((item)=>(

//         <div className="image">
//           <img src={item.image} alt="" />
//         </div>
//         <div className="details">
//           <div className="center">
//             <h1> Nombre:{item.name}</h1>
//             <p>Identificador:{item.id}</p>
//             <p>Genero:{item.gender}</p>
//             <p>Especie:{item.species}</p>
//             <p>Estado:{item.status}</p>
//             {/* <Boton type="submit">add to cart</Boton> */}
//           </div>
//           <Boton
//             onClick={() =>
//               agregarProductoAlCarrito(item.id, item.name,character.image)
//             }
//           >
//             add to cart
//           </Boton>
//         </div>
// )
//     </div>
// </form>
//  )}
