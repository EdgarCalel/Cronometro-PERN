import React,{useState, useEffect} from 'react'
import './cronometro.css'
import TimerIcon from '@mui/icons-material/Timer';
export default function Registros() {
    const [registros, setRegistros] = useState([])

useEffect(() => {

    registrosServer()

},[] )

const registrosServer=async ()=>{
await fetch(`${process.env.REACT_APP_SERVER}/all`)
          .then(response => response.json())
          .then(data => setRegistros(data));
}

    return (
    <div className='registrosS'>
        {
        registros.map(el=>(
          <div className='card_registros'>
          <h2 className='tituloDetalle'>Nombre: <br /> {el.name}</h2>
       <ul>
        <span className="titleDetalle">Datos</span>
        <hr className="tituloDatos"/>
        <div className='listaDatos'>
           {el.stepTime.map(function(tiempo, index){return <li className="listaTime" name={tiempo} key={ index }><TimerIcon /> {tiempo}</li>})}
           </div>
        </ul>
        
          </div>
        ))
      }      
    </div>
  )
}
