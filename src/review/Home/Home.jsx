import React from 'react';
import  { useEffect } from 'react';

import './home.css';
import foto from '../../img/foto.jpg';
import mini from '../../img/m-market.png';
import logo from '../../img/logoLuzDen.png';
import js from '../../img/JavaScript-logo.png';
import cV from '../../file/CvRojasDulceFS.pdf';
import react from '../../img/LogoReact.svg';
import css from '../../img/logoCSS.png';
import html from '../../img/logoHtml.png';
import postgres from '../../img/logoPostgreSQL.png';
import java from '../../img/logoJava.png';
import redux from '../../img/logoRedux.jpg';
import sql from '../../img/logoSQL.jpg';
import node from '../../img/logoNode.png'
// import ParticlesBackground from '../../component/config/ParticlesBackground';

const Home = () => {
  
  return (
    <div>
      {/* <ParticlesBackground/> */}
      
      <div className="contenedor">
        <div className="container-fluid px-0">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Rojas Duran Dulce Belzabeth
              </a>
               <a className="dropdown-item" href="https://github.com/IngRojasDulce">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                          className="bi bi-github" viewBox="0 0 16 16" >
                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        </a>
                <a href='https://www.linkedin.com/in/dulce-rojas-19060416a/'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg></a>

                <a  href="mailto:dulcerojas698@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                </svg></a>
                <a href={cV}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16" alt = "Desacarga Cv">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg></a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#acerca-de-mi">
                      Acerca de mi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#proyectos">
                      Proyectos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#skill">
                      Skill
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Contacto
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="mailto:dulcerojas698@gmail.com">
                          Gmail
                        </a>
                      </li>
                      <li>
                        {/* <a className="dropdown-item" href="https://github.com/IngRojasDulce">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                          className="bi bi-github" viewBox="0 0 16 16" >
                         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        </a> */}

                        <a className="dropdown-item" href="https://github.com/IngRojasDulce">
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="https://www.linkedin.com/in/dulce-rojas-19060416a/">
                          LinkedIn
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm rounded-3">
                <img src={foto} className="img-thumbnail rounded-circle border border-white " style={{ maxWidth: "35%" }} alt="..." />
              </div>
              <div className="col-sm">
                {/* <img src="https://www.mytaskpanel.com/wp-content/uploads/2022/01/bffhhhshh.webp" class="img-fluid" alt="imagen"></img> */}
              </div>
            </div>
          </div>
        </div>
        <div id="acerca-de-mi" className="mx-auto w-60">
          <p className="lead p-3 bg-primary-subtle border border-primary-subtle rounded-3 text-justify">
            Ingeniera Electronica con experiencia en desarrollo web, soy  proactiva y eficiente, rápida para adquirir
            nuevos conocimientos, con capacidad de adaptarse fácilmente a entornos de cambios constantes y sin miedo para
            trabajar bajo presión. Lista para integrarse en equipos multidisciplinarios y trabajar bajo metodologías agiles
            orientadas hacia objetivos.
          </p>
        </div>
        <div id="proyectos">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
              <div className='card-container'> 
              <div className="card " style={{ width: '18rem', backgroundColor: '#212529ad', color:'#fff3cd'}}>
                  <img src={mini} className="card-img-top" alt="VideoGames" />
                  <div className="card-body">
                    <h5 className="card-title">M-Market</h5>
                    <p className="card-text">
                      E-commerce de Mini-Market para la compra de productos en linea con pasarela de pago, registro de usuario.
                    </p>
                    <a href="#" className="btn btn-primary">
                     DEMO
                    </a>
                    <a href="https://github.com/IngRojasDulce/M-Market.git" className="btn btn-primary">
                     Codigo
                    </a>
                    
                  </div>
                </div>
              </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className='card-container'>
              <div className="card" style={{ width: '18rem', backgroundColor: '#212529ad', color:'#fff3cd'}}>
                  <img src={logo} className="card-img-top" alt="VideoGames" />
                  <div className="card-body">
                    <h5 className="card-title">LuzBen</h5>
                    <p className="card-text">
                      Pagina que web que permite al usuario ver repuestos de motocicletas y a poder detallar sus caracteristicas, actualmente sigue en desarrollo
                    </p>
                    <a href="#" className="btn btn-primary">
                     Demo
                    </a>
                    <a href="#" className="btn btn-primary">
                     Codigo
                    </a>
                  </div>
                </div>
                </div>
              </div>
              <div className="carousel-item">
              <div className='card-container'>
                <div className="card" style={{ width: '18rem', backgroundColor: '#212529ad', color:'#fff3cd'}}>
                  <img src={mini} className="card-img-top" alt="VideoGames" />
                  <div className="card-body">
                    <h5 className="card-title">VideoGames</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                     Demo
                    </a>
                    
                    <a href="https://github.com/IngRojasDulce/VideoGames" className="btn btn-primary">
                     Codigo
                    </a>
                  </div>
                </div>
                </div>
                {/* <img src={mini} class="d-block w-100 " alt="video juegos"/>
                   <p><a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light link</a></p> */}
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" ariahidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div id='skill'>
        Tech Skill
        <div className="container text-center">
  <div class="row">
    <div className="col"><img src={js} className="img-fluid rounded" style={{ height: '50%', width: '80%' }} alt="Logo de JavaScript" />  JS</div>
    <div className="col"><img src={css} className="img-fluid rounded" style={{ height: '50%', width: '80%' }} alt="Logo de CSS" />CSS</div>
    <div className="col"><img src={html} className="img-fluid rounded" style={{ height: '50%', width: '80%' }} alt="Logo de HTML" />HTML</div>
    <div className="col"><img src={react} className="img-fluid rounded" style={{ height: '50%', width: '100%' }} alt="Logo de REACT" />React js</div>
  </div>
  <div class="row">
    <div className="col"><img src={postgres} className="img-fluid rounded" style={{ height: '50%', width: '80%' }} alt="Logo de Postgres sql" />Postgres sql</div>
    <div className="col"><img src={java} className="img-fluid rounded" style={{ height: '50%', width: '80%' }} alt="Logo de Java" />Java</div>
    <div className="col"><img src={redux} className="img-fluid rounded" style={{ height: '50%', width: '80%' }} alt="Logo de Redux" />Redux</div>
    <div className="col"><img src={sql} className="img-fluid rounded" style={{ height: '50%', width: '80%' }} alt="Logo de SQL" />SQL</div>
    <div className="col"><img src={node} className="img-fluid rounded" style={{ height: '50%', width: '80%' }} alt="Logo de node" />Node js</div>
    </div >
</div>

</div>
      </div>
      </div>  
     
  );
};

export default Home;