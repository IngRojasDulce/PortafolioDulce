import React from 'react';
import './home.css';

const Home = () => {
  return (<div class= "body-background">
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
          <a class="nav-link" href="#">Proyectos</a>
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
    <div class="col-sm">
    <img src="https://avatars.githubusercontent.com/u/123681236?v=4" class="img-thumbnail" alt="..."/>
    </div>
    <div class="col-sm">
    <img src="https://www.mytaskpanel.com/wp-content/uploads/2022/01/bffhhhshh.webp" class="img-fluid" alt="imagen"></img>
    </div>
  </div>
  
</div>
  

</div>
</div>
<div id="acerca-de-mi" class='--bs-danger-rgb '>
<p class="lead 	p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3  ">Soy ingeniero en electrónica, desde pequeña llamo mi atención 
la tecnología y los grandes pasos que da, interesándome las telecomunicaciones durante el desarrollo 
de mi carrera profesional. Decidí ampliar mis conocimientos de programación mediante un bootcamp llamado
 Soy Henry donde aprendí y puse en práctica conociendo como, javascript , React js, Redux, Node js , express, 
 sequelize, postgresql, css y el uso de herramientas como insomnia y git, desarrollando mayor organización con
  el uso de trello, encontrando un mundo apasionante que está en constante actualización, motivadome a no dejar
   de aprender.</p>




  jincidsnuvnsidf


  cksmdijcinsdiunv
</div>
</div> )
  
}

export default Home