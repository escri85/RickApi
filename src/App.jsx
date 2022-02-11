import "./App.scss";
// import { Provider } from "react-redux";
// import {store} from './redux/store'
import Menu from './components/Menu'
import Contenedor from './components/Contenedor'
import { NavLink, Route, Routes } from "react-router-dom";
import Carrito from "./pages/Carrito/Carrito"
import Personajes from "./pages/Personajes/Personajes";
import NotFound from "./pages/NotFound";
import Login from './pages/Login/Login'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Registro from "./components/Registro/Registro";
import Recuperar from "./components/Recuperar/Recuperar";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";       

const  App=()=> {


  return (
    
    <Contenedor>
      <Menu>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/personajes">busqueda de personajes</NavLink>
        <NavLink to="/carrito"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/personajes" element={<Personajes/>} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar" element={<Recuperar />} />



        </Routes>
      </main>
      
    </Contenedor>
  )
}

export default App;
