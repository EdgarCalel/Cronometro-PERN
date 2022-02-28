import React from 'react'
import './landing.css'
import { Link } from "react-router-dom";
import Logo  from '../../assets/Daco_4762649.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Reloj from '../../assets/timeWatch.jpg'

function index() {
  return (
<div >
<nav>
<div className="logo">
    </div>
  <ul className="nav-links">
    <li className='linksPer'>
      <a href="https://github.com/EdgarCalel/Cronometro-PERN" target="_blank" rel="noreferrer" >
        <GitHubIcon sx={{ fontSize: 40}} /> 
      </a>
      <a href="https://www.linkedin.com/in/edgarcalel/" target={"_blank"} rel="noreferrer" >
<LinkedInIcon sx={{ fontSize: 40,  }} />
      </a>
<h2 className='tituloRedes'>Siguenos</h2>
    </li>
    
  </ul>
</nav>
<main className="hero">
  <div className="row">
    
     <div className="content-wrapper ">
     <div className="logo">
  <img clasName="logoper" src={Reloj} alt="" />
    </div>
   <h1>Generar metricas de tiempos en procesos</h1>
       <p> Realiza pruebas y toma el tiempo que se tomo para realizar la accion y guarda un registro de sus resultados</p>
      <Link className='btn' to="/Home">Iniciar</Link>
  </div>
    
    <div className="content-wrapper ">
    
  <img src={Logo} alt='Not Found'/>
   
  </div>
  </div>
</main>
</div>
  )
}

export default index