import React, {useState, useEffect} from "react";
import './cronometro.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const App = () => {
  const notify = () => toast.success('Se ha registrado su solicitud!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [TimePerson, setTimePerson] = useState({
    name:"",
    stepTime:[]
  })

const toto = 
("0" + Math.floor((time / 60000) % 60)).slice(-2)+' : ' + 
("0" + Math.floor((time / 1000) % 60)).slice(-2)+' : '+ 
("0" + ((time / 10) % 100)).slice(-2)

  useEffect(() => {
    let interval = null;
    if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
   if (!timerOn) {
    TimePerson.stepTime.push(toto)
  
   }else{
    return null
    }}
    return () => clearInterval(interval)
  }, [timerOn]);

  const handleSubmit = async (e)=> {
  
    e.preventDefault();

     await fetch(`${process.env.REACT_APP_SERVER}/time`, {
      method: 'POST',
      body: JSON.stringify(TimePerson),
      headers: {'Content-Type':'application/json'}
    })
    setTimePerson({
  name:"",
  stepTime:[]
    })
    notify()
    setTime(0)
  }
  const handleChange =(e)=> setTimePerson({...TimePerson, [e.target.name]: e.target.value})
  return (
    <div className="principal" >
      <div className="Timers card">
      <h2>Cronometro digital</h2>
     
      <div id="display ">
        <span  className="minuto">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span><span> : </span>
        <span className="segundo">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span><span> : </span>
        <span  className="milisegundo">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
<hr className="division"/>
      <div  id="buttons">
        {!timerOn && time === 0 && !TimePerson.stepTime.length >0 &&   (<button className="btn" onClick={() => setTimerOn(true)}>Start</button>)}
        { timerOn && <button className="btn" onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (<button className="btn" onClick={() => setTime(0)}>Terminar</button>)}
        {!timerOn && time > 0 && (<button className="btn"onClick={() => setTimerOn(true)}>Resume</button>)}
      </div>
   
  
     <form onSubmit={(e) => handleSubmit(e)}>
      
        {!timerOn && time === 0 && TimePerson.stepTime.length >0 && 
        (<span className="NameUser">Nombre: 
        <input className="inputNameUser" required value={TimePerson.name} type="text" name="name" onChange={handleChange}/>
        </span>)}

       { TimePerson.stepTime.length >0 && <ul>
        <span className="title">Datos</span>
        <hr className="tituloDatos"/>
           {TimePerson.stepTime.map(function(tiempo, index){return <li className="listaTime" name={tiempo} key={ index }> {tiempo}</li>})}
        </ul>}

       {!timerOn && time === 0 && TimePerson.stepTime.length >0 && 
       (<button className="btn" type="submit" >Crear</button>)}
        {!TimePerson.stepTime.length >0 &&
        <Link type="button" className="btn" to="/">Regresar</Link>}
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </form>
    </div>
    </div>
  );
};

export default App;