import React from "react";
import { 
  Route ,
  Routes} from "react-router-dom";
import Timer from './components/Cronometro/index'
import Landing from './components/landingPage';
import Registros from "./components/Cronometro/Registros";
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>
  <Navbar  />   
  <Routes>
    <Route exact path='/Home' element={<Timer />} />
    <Route exact path='/registros' element={<Registros />} />
  </Routes>
    </div>
  );
}

export default App;
