import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import '../menu/menu.css'

const Menu = () => {
  return (
      <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <img src={logo} className="logo" href="/"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" className="nav-link">
                Inicio
              </Link>
        </li>
        <li class="nav-item">
        <Link to="/Servicios" className="nav-link">
                Servicios
              </Link>
        </li>
        <li class="nav-item">
        <Link to="/Nosotros" className="nav-link">
                Nosotros
              </Link>
        </li>
        <li class="nav-item">
        <Link to="/Contacto" className="nav-link">
                Contacto
              </Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  
  );
}

export default Menu;
