import React, { useState } from "react";
import Boton from "../styledComponents/Boton";
import Input from "../styledComponents/Input";
import './Search.scss'
const Search = () => {

  const [character,setCharacter] = useState('')
  
  const BASEURL = "https://rickandmortyapi.com/api/character";

const searchRick= ()=>{
  fetch(BASEURL)
      .then((response) => response.json())
      .then((resultado) => console.log(resultado.results));
}

  return (
    <div className="container">
      <h1>Rick & Morty API</h1>
      <Input type="text"  onChange={(event)=>{setCharacter(event.target.value)}}/>
      <Boton onClick={searchRick}>Search</Boton>
    </div>
  );
};

export default Search;
