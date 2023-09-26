import React from 'react'

const Home = () => {
  return (<div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rojas Dulce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Acerca de mi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Proyectos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contacto
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gmail</a></li>
            <li><a class="dropdown-item" href="#">GitHub</a></li>
            <li><a class="dropdown-item" href="#">LinkedIn</a></li>
           
          </ul>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
<img src="https://www.mytaskpanel.com/wp-content/uploads/2022/01/bffhhhshh.webp" class="img-fluid" alt="imagen"></img></div>
  )
}

export default Home