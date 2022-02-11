import React, { useState } from "react";
import Boton from "../../styledComponents/Boton";
import Input from "../../styledComponents/Input";
import {  NavLink } from "react-router-dom";
import './Login.scss'
const Login = () => {
  const initial_state = {
    email: "",
    password: "",
  };

  const [perfil, setPerfil] = useState(initial_state);
  const [checked,setChecked] = useState(false)
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(perfil);
  };
  const change = ({ target: { name, value } }) => {
    setPerfil({ ...perfil, [name]: value });
  };
const handleChange=()=>{
  setChecked(true)
}
  return (
    
      <div>

    <form action="" onSubmit={onSubmit} className="login">
      <label>
        <p>email</p>
        <Input
          type="email"
          name="email"
          onChange={change}
          value={perfil.email}
        />
      </label>
      <label>
        <p>password</p>

        <Input
          type="password"
          name="password"
          onChange={change}
          value={perfil.password}
        />
      </label>
      <Boton type="submit">login</Boton>
      <label htmlFor="check">
      <input type="checkbox" checked={checked} onChange={handleChange}/>
      Recuerdame
      </label>
    <NavLink to='/recuperar'>olvidaste tu contraseña?</NavLink>

    <NavLink to='/registro'>o crea una cuenta nueva</NavLink>
      
    </form>
    <div>
    </div>

    </div>
    
  );
};

export default Login;
