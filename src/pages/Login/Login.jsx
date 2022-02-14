import React, { useState } from "react";
import Boton from "../../styledComponents/Boton";
import { Link } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import "./Login.scss";
import Registro from "../../components/Registro/Registro";
const Login = () => {
  const initial_state = {
    email: "",
    password: "",
  };

  const [perfil, setPerfil] = useState(initial_state);
  const [checked, setChecked] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(perfil);
  };
  const change = ({ target: { name, value } }) => {
    setPerfil({ ...perfil, [name]: value });
  };

  return (
    <div className="container">
      <div>
        <h1>LOGIN</h1>
        <form action="" onSubmit={onSubmit} className="login">
          <label>
            <p>EMAIL</p>
            <InputText
              type="email"
              name="email"
              onChange={change}
              value={perfil.email}
            />
          </label>
          <label>
            <p>PASSWORD</p>

            <Password
              type="password"
              name="password"
              onChange={change}
              value={perfil.password}
              toggleMask
            />
          </label>
          <Boton type="submit">login</Boton>
          <div className="field-checkbox">
            <Checkbox
              inputId="binary"
              checked={checked}
              onChange={(e) => setChecked(e.checked)}
            />
            <label htmlFor="binary">{checked ? "Recordar" : "Recordar"}</label>
          </div>

          {/* <label htmlFor="check">
      <input type="checkbox" checked={checked} onChange={handleChange}/>
      Recuerdame
      </label> */}
          <div className="links">
            <Link to="/recuperar">olvidaste tu contraseña?</Link>
          </div>
        </form>
        <div></div>
      </div>
      <div>
        <Registro/>
      </div>
    </div>
  );
};

export default Login;
