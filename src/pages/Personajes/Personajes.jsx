/* eslint-disable array-callback-return */
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



  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");


  useEffect(() => {
    const llamada = () => {
      Axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
        console.log("resultados", res.data.results);
        const result = res.data.results;
        setUsuarios(result);
    setTablaUsuarios(result);
      
      });
    };
    llamada();
  }, []);

const changeAlive=(event)=>{
  setChecked1(event.value)

}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
   
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}


  return (
    <div className="personajes">
      <div className="container__busqueda">
        <InputText
        placeholder="Search"
          type="text"
          onChange={handleChange}
          value={busqueda}
          // onKeyUp={searchRick}
        />

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
        {usuarios &&
        usuarios.map((item) => (
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

