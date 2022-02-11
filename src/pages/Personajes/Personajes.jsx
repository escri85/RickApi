import { useState } from "react";

import Axios from "axios";
import Input from "../../styledComponents/Input";
import Boton from "../../styledComponents/Boton";
import Card from "../../components/Card/Card";

const Personajes = () => {
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
    ).then((res) => {
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
    });
  };
  return (
    <div className="App">
      <div className="container">
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
          <input type="checkbox" id="status" className="toggle--checkbox"/>
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
          <label className="toggle--btn" htmlFor="genre">
            <span
              className="toggle--feature"
              data-label-on="on"
              data-label-off="off"
            ></span>
          </label>
        </div>
      </div>
      
        <Card characterChosen={characterChosen} character={character} />
    
    </div>
  );
};

export default Personajes;
