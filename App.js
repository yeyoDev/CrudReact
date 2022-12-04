import './App.css';
import List from "./components/List"
import Create from "./components/Create"
import Editar from "./components/Editar"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import About from './components/About';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark">
        <div className="nav navbar-nav">

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className='nav-item mx-4'>   
            <img src={require('./img/mi_logo.png')} height="50" alt="logo"/>
          </li>
          <li><Link className="nav-item nav-link text-light" to={"/"}>Sistema <span className="sr-only"></span></Link></li>
          <li><Link className="nav-item nav-link text-light" to={"/create"}>Crear empleado</Link></li>
          <li><Link className="nav-item nav-link text-light" to={"/about"}>Sobre nosotros</Link></li>
        </ul>
              
        </div>
      </nav>
  
      <div className="container mt-5">

      <Routes>
          <Route exact path="/" element={<List/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/editar/:id" element={<Editar/>}></Route>
      </Routes>

      </div>

    </Router>
  );
}

export default App;
