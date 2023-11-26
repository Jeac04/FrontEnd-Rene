import './App.css';
import { Route, Routes } from "react-router-dom";
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Servicios from './components/servicios/servicios';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/contacto/Contacto';


function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;