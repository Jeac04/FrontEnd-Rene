import React from 'react'
import pw1 from '../img/pw1.jpg';
import pw2 from  '../img/pw2.jpg';
import pw3 from  '../img/pw3.jpg';
import menu2 from '../img/menu2.jpg';
import Footer from '../footer/footer';


const Home = () => {
  return (
    <div>
    <div style={{ backgroundColor: 'black' }}>
      <div>
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" align="center">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pw1} className="d-block w-50" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={pw2} className="d-block w-50" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={pw3} className="d-block w-50" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  </div>
  <div class="container col-xxl-8 px-4 py-1">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      <img src={menu2} className="d-block w-100" alt="Slide 3" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">¡Somos una Universidad Pública!</h1>
        <p class="lead">Somos una Universidad Pública y contamos con diversas certifaciones y acreditaciones a nivel internacional.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-secondary btn-lg px-4 me-md-2">Ir a Redes Sociales</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Ir a Página Oficial</button>
        </div>
      </div>
    </div>
  <div>
    </div>
    </div>
    <Footer />
    </div>
    
    
  )
}

export default Home;
