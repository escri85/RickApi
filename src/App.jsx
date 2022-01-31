import "./App.scss";
import { useState } from "react";
import Input from "./styledComponents/Input";
import Boton from "./styledComponents/Boton";
import Axios from "axios";
function App() {
  const [characterID, setCharacterId] = useState("");
  const [characterChosen, setCharacterChosen] = useState(false);
  // const [genre, setGenre] = useState();
  const [character, setCharacter] = useState({
    id: "",
    name: "",
    image: "",
    gender: "",
    species: "",
    status: "",
  });

  const searchRick = () => {
    Axios.get(
      `https://rickandmortyapi.com/api/character/?name=${characterID}`
    ).then(
      (res) => {
        /* console.log(res.data.results); */
        const result = res.data.results;
        result.map((item) => {
          return (
            setCharacter({
              id: item.id,
              name: item.name,
              image: item.image,
              gender: item.gender,
              species: item.species,
              status: item.status,
            }),
            setCharacterChosen(true)
            // ,setGenre(true)
          );
        });
      }

      // setCharacter({

      //   id: characterID,
      //   name: res.data.name,
      //   image: res.data.image,
      //   gender: res.data.gender,
      //   species: res.data.species,
      //   status: res.data.status,
      // }),
      // setCharacterChosen(true),
    );
  };
  //  const searchRick = () => {
  //   Axios.get(`https://rickandmortyapi.com/api/character/?name=${characterID}`).then(
  //     (res) =>
  //     setCharacter({
  //         id: characterID,
  //         name: res.data.name,
  //         image: res.data.image,
  //         gender: res.data.gender,
  //         species: res.data.species,
  //         status: res.data.status,
  //       }),
  //     setCharacterChosen(true)
  //   );
  // };
  return (
    <div className="App">
      <div className="container">
        <h1>Rick & Morty API</h1>
        <Input
          type="text"
          onChange={(event) => {
            setCharacterId(event.target.value);
          }}
          value={characterID.toLowerCase()}
          // onKeyUp={searchRick}
        />

        <Boton onClick={searchRick}>Search</Boton>

        <div className="toggle toggle--knob">
          {<h2>alive/death</h2>}
          <input
            type="checkbox"
            id="status"
            className="toggle--checkbox"
          />
          {}
          <label className="toggle--btn" htmlFor="status">
            <span
              className="toggle--feature"
              data-label-on="on"
              data-label-off="off"
            ></span>
          </label>
        </div>
        <div className="toggle toggle--knob">
          {<h2>male/female</h2>}
          <input type="checkbox" id="genre" className="toggle--checkbox" />
          {}
          <label className="toggle--btn" htmlFor="genre">
            <span
              className="toggle--feature"
              data-label-on="on"
              data-label-off="off"
            ></span>
          </label>
        </div>
        {/*  <Boton>humano</Boton>
        <Boton>alive</Boton>
        <Boton>alien</Boton>
        <Boton>death</Boton> */}
      </div>
      {/* <div className="card">
        {!characterChosen ? (
          <h1>elige un nombre</h1>
        ) : (
          <>
            <h1> Nombre:{character.name}</h1>
            <p>Identificador:{character.id}</p>
            <p>Genero:{character.gender}</p>
            <p>Especie:{character.species}</p>
            <p>Estado:{character.status}</p>

            <img src={character.image} alt="" />
          </>
        )} */}
      {!characterChosen ? (
        <h1>elige un nombre</h1>
      ) : (
        <div class="card">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
