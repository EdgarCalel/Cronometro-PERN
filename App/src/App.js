import React from "react";
import { 
  Route ,
  Routes} from "react-router-dom";
import Timer from './components/Cronometro/index'
import Landing from './components/landingPage';



function App() {
  return (

    <div className="App">
      <div className="headerP">
      <Routes>
        <Route exact path='/' element={<Landing />} />
      </Routes>
      </div>
      <div >
  <Routes>
    <Route exact path='/Home' element={<Timer />} />
  </Routes>

</div>
    </div>
  );
}

export default App;
