import React from 'react';
import Footer from '../footer/footer';

const Contacto = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
      <form>
    <h1 class="h3 mb-3 fw-normal" align="center">Información de Contacto</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Nombre</label>
    </div>
    <div class="p-3 mb-2 bg-transparent text-body"></div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Apellido</label>
    </div>
    <div class="p-3 mb-2 bg-transparent text-body"></div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Correo</label>
    </div>
    <div class="p-3 mb-2 bg-transparent text-body"></div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Asunto</label>
    </div>
    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Recordarme
      </label>
    </div>
    <button class="btn btn-primary w-20 py-2" align="center" type="submit">Enviar</button>
  </form>
      </div>

      <div className="col-md-6">
        <iframe
          title="Ubicación de la Universidad Politécnica de Tapachula"
          width="600"
          height="500"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.272020758051!2d-92.26420738518003!3d14.910196489632672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d66f91d66a5ca5%3A0x61478c0ec678d9e5!2sUniversidad%20Politecnica%20de%20Tapachula!5e0!3m2!1sen!2smx!4v1637908121121!5m2!1sen!2smx"
        />
      </div>
    </div>
    <div class="p-3 mb-2 bg-transparent text-body"></div>
    <div class="p-3 mb-2 bg-transparent text-body"></div>
    <Footer />
  </div>
);

export default Contacto;
