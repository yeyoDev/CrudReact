import './App.css';
import List from "./components/List"
import Create from "./components/Create"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <a className="nav-item nav-link active" href="/">Sistema <span className="sr-only"></span></a>
          <a className="nav-item nav-link" href="/create">Crear empleado</a>
          </div>
      </nav>
  
      <div className="container">

      <Routes>
          <Route exact path="/" element={<List></List>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
      </Routes>

      </div>

    </Router>
  );
}

export default App;
