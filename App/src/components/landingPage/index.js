import React from 'react'
import './landing.css'
import { Link } from "react-router-dom";
import Logo  from '../../assets/Daco_4762649.png'

function index() {
  return (
<div >
<nav>
  <div class="logo">
    Cronometro digital</div>

  <ul class="nav-links">
    <li>Edgar Calel
    </li>
    
  </ul>

</nav>
<main class="hero">
  <div class="row">
     <div class="content-wrapper ">
    
   <h1>Generar metricas de tiempos en procesos</h1>
       <p> Realiza pruebas y toma el tiempo que se tomo para realizar la accion y guarda un registro de sus resultados</p>
      <Link class='btn' to="/Home">Iniciar</Link>
  </div>
    
    <div class="content-wrapper ">
    
  <img src={Logo} alt='Not Found'/>
   
  </div>
  </div>
</main>
</div>
  )
}

export default index