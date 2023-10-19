import React from 'react';
import './home.css';
import foto from '../../img/foto.jpg';
import mini from '../../img/m-market.png'



const Home = () => {
  return (<div>
    <div id="particles-js"></div>
    <div class= "contenedor">
      
      <div class="container-fluid px-0">
 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid ">
            <a class="navbar-brand" href="#">Rojas Duran  Dulce Belzabeth</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#acerca-de-mi">Acerca de mi</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#proyectos">Proyectos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contacto
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="mailto:dulcerojas698@gmail.com">Gmail</a></li>
            <li><a class="dropdown-item" href="https://github.com/IngRojasDulce">GitHub</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/in/dulce-rojas-19060416a/">LinkedIn</a></li>
           
          </ul>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
<div>
  
    <div class="container text-center ">
  <div class="row">
    <div class="col-sm rounded-3">
    <img src={foto} class="img-thumbnail" alt="..."/>
    </div>
    <div class="col-sm">
    
      
     
    {/* <img src="https://www.mytaskpanel.com/wp-content/uploads/2022/01/bffhhhshh.webp" class="img-fluid" alt="imagen"></img> */
  }
    </div>
  </div>
  
</div>
  

</div>
</div>
<div id="acerca-de-mi" class='mx-auto w-60'>
  <p class="lead 	p-3  bg-primary-subtle border border-primary-subtle rounded-3  text-justify">
    Full Stack developer con un background en Ingenieria Electronica , proactiva y eficiente, rápida para adquirir 
    nuevos conocimientos, con capacidad de adaptarse 
    fácilmente a entornos de cambios constantes y sin miedo para trabajar bajo presión. Listo para 
    integrarse en equipos multidisciplinarios y trabajar bajo metodologías agiles orientadas hacia objetivos.</p>

</div>
<div id ="proyectos"> 
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={mini} class="d-block w-100" alt="E-commerce"/>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="..." class="d-block w-100" alt="..."/>
     </div>
     <div class="carousel-item">
       <img src={mini} class="d-block w-100" alt="video juegos"/>
      </div>
    </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
  </div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>

</div> )
  
}

export default Home