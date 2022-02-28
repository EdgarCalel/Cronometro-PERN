import React from 'react'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import './navbar.css'
function Index() {
  return (
    <div>
      <div className="navContenido">
<Link to={'/'} ><h1 className='linkMenu'><HomeOutlinedIcon /> Inicio </h1></Link>       
<Link to={'/registros'} ><h1 className='linkMenu'><AppRegistrationOutlinedIcon /> Registros </h1></Link>
<Link to={'/Home'} ><h1 className='linkMenu'><HistoryToggleOffOutlinedIcon /> Cronometro </h1></Link>
          </div>

    </div>
  )
}

export default Index
