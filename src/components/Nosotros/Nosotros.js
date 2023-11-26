import React from 'react';
import '../Nosotros/nosotros.css';
import Footer from '../footer/footer'

const Nosotros = () => {
  return (
    <div>
    <div class="p-0 mb-2 bg-transparent text-body"></div>
       <div className="header">
  </div>
  <div class="p-0 mb-2 bg-transparent text-body"></div>
  <div class="container" align="center">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div class="col">
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Visión" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Visión</text></svg>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Nuestra Visión</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Misión" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".em">Misión</text></svg>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Nuestra Misión</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Objetivo" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Objetivos</text></svg>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Nuestros Objetivos</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
    <div class="p-0 mb-2 bg-transparent text-body"></div>
    <Footer />
    </div>
  )
}

export default Nosotros;
