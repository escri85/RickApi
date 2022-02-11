import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Registro.scss";
import Boton from "../../styledComponents/Boton";
const Registro = () => {
  const [value3, setValue3] = useState("");
  const [value2, setValue2] = useState("");

const onSubmit =(event)=>{
  event.preventDefault()
console.log(event.target);
}



  return (
    <>
    <div>

      <h1>REGISTRO</h1>
    </div>
    <form action="" onSubmit={onSubmit}>
    <div className="registro">
      <div className="inputs">
        <p>EMAIL</p>
        <InputText placeholder="EMAIL" type='email' />
      </div>
      <div className="inputs">
        <p>CONTRASEÑA</p>
        <Password
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          toggleMask
        />
      </div>
      <div className="inputs">
      <p>REPITE CONTRASEÑA</p>
        <Password
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          toggleMask
        />
      </div>
    </div>
    <Boton className="btn-registro" type="submit">REGISTRAR</Boton>
    </form>
    </>
  );
};

export default Registro;
