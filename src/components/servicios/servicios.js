import React from 'react';
import Logo from '../img/logo.png';
import '../servicios/servicios.css'
import Footer from '../footer/footer';

const Servicios = () => {
  return (
    <div>
    <div align="center">
    <div class="p-3 mb-2 bg-transparent text-body"></div>
    <div class="row">
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" image href={Logo} role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 class="fw-normal">Ingenierías</h2>
        <p><a class="btn btn-secondary" href="#">Conocer Más &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 class="fw-normal">Maestría</h2>
        <p><a class="btn btn-secondary" href="#">Conocer Más &raquo;</a></p>
      </div> 
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <h2 class="fw-normal">Certificaciones</h2>
        <p><a class="btn btn-secondary" href="#">Conocer Más &raquo;</a></p>
      </div>
    </div>
    <div class="position-relative overflow-hidden p-1 p-md-2 m-md-3 text-center bg-secondary">
    <div class="col-md-6 p-lg-5 mx-auto my-1">
      <h1 class="display-5 fw-bold" className='texto1'>Universidad Politécnica de Tapachula</h1>
      <h3 class="fw-normal text-muted mb-3" className='texto2'>Innovación y Tecnología al Servicios de la Scoiedad</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
        <button>
           Ver Oferta Educativa
        </button>
        <button>
          Ir a Página Oficial
        </button>
      </div>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
  </div>
  <Footer />
  </div>
  )
}

export default Servicios;
