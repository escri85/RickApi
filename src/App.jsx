import "./App.scss";
import { useState } from "react";
import Input from "./styledComponents/Input";
import Boton from "./styledComponents/Boton";
import Axios from "axios";
function App() {
  const [characterID, setCharacterId] = useState("");
  const [characterChosen, setCharacterChosen] = useState(false);
  const [character, setCharacter] = useState({
    id: "",
    name: "",
    image: "",
    gender: "",
    species: "",
    status: "",
  });

  const searchRick = () => {
    Axios.get(`https://rickandmortyapi.com/api/character/${characterID}`).then(
      (res) =>
      setCharacter({
          id: characterID,
          name: res.data.name,
          image: res.data.image,
          gender: res.data.gender,
          species: res.data.species,
          status: res.data.status,
        }),
      setCharacterChosen(true)
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
          // value={characterID.toLowerCase()}
        />
        <Boton onClick={searchRick}>Search</Boton>
      </div>
      <div className="card">
        {!characterChosen ? <h1>elige un id</h1> : (
        <>
        <h1> Nombre:{character.name}</h1>
        <p>Identificador:{character.id}</p>
        <p>Genero:{character.gender}</p>
        <p>Especie{character.species}</p>
          <img src={character.image} alt="" />
        </>)}
      </div>
    </div>
  );
}

export default App;
