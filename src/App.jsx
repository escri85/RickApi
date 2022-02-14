import "./App.scss";
// import { Provider } from "react-redux";
// import {store} from './redux/store'
import Menu from './components/Menu'
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
import { createStore } from "redux";
import { Provider } from "react-redux";
import './sass/fonts.scss'
import {reducer} from './redux/reducer'
import Header from "./components/Header";
const  App=()=> {

  const store = createStore(reducer);
  

  console.log(
    "console,log de de config reducer en la variable store",
    store.getState()
  );
  return (
    <Provider store={store}>
      <Header/>
    <div>
      <Menu>
        <NavLink to="/login">LOGIN</NavLink>
        <NavLink to="/personajes">PERSONAJES</NavLink>
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
      
    </div>
    </Provider>

  )
}

export default App;
