import React from 'react';
import './home.css';
import foto from '../../img/foto.jpg';
import mini from '../../img/m-market.png';
import Particles from '../particles/particles';

const Home = () => {
  const initializeParticles = () => {
    // Configura las opciones de Particle.js
    const particleOptions = {
      particles: {
        number: {
          value: 50, // El número de partículas
        },
        size: {
          value: 3, // El tamaño de las partículas
        },
      },
    };
  
    // Inicializa Particle.js
    Particles.init('particles-js', particleOptions);
  };
  
  // Llama a initializeParticles después de que el componente esté montado
  React.useEffect(() => {
    initializeParticles();
  }, []);
  return (
    <div>
      <div id="particles-js"></div>
      <div className="contenedor">
        <div className="container-fluid px-0">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Rojas Duran Dulce Belzabeth
              </a>
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
                <img src={foto} className="img-thumbnail rounded-circle border border-white" alt="..." />
              </div>
              <div className="col-sm">
                {/* <img src="https://www.mytaskpanel.com/wp-content/uploads/2022/01/bffhhhshh.webp" class="img-fluid" alt="imagen"></img> */}
              </div>
            </div>
          </div>
        </div>
        <div id="acerca-de-mi" className="mx-auto w-60">
          <p className="lead p-3 bg-primary-subtle border border-primary-subtle rounded-3 text-justify">
            Full Stack developer con un background en Ingenieria Electronica, proactiva y eficiente, rápida para adquirir
            nuevos conocimientos, con capacidad de adaptarse fácilmente a entornos de cambios constantes y sin miedo para
            trabajar bajo presión. Listo para integrarse en equipos multidisciplinarios y trabajar bajo metodologías agiles
            orientadas hacia objetivos.
          </p>
        </div>
        <div id="proyectos">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
              <div className="card" style={{ width: '18rem' }}>
                  <img src={mini} className="card-img-top" alt="VideoGames" />
                  <div className="card-body">
                    <h5 className="card-title">M-Market</h5>
                    <p className="card-text">
                      E-commerce de Mini-Market para la compra de productos en linea con pasarela de pago, registro de usuario.
                    </p>
                    <a href="#" className="btn btn-primary">
                     DEMO
                    </a>
                    <a href="#" className="btn btn-primary">
                     Codigo
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
              <div className="card" style={{ width: '18rem' }}>
                  <img src={mini} className="card-img-top" alt="VideoGames" />
                  <div className="card-body">
                    <h5 className="card-title">VideoGames</h5>
                    <p className="card-text">
                      otro proyecto a incluir
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
              <div className="carousel-item">
                <div className="card" style={{ width: '18rem' }}>
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
      </div>
      {/* particulas */}
      {/* <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script> */}
    </div>
  );
};

export default Home;