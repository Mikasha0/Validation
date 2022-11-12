import Navbar from "./Components.js/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Formikk from "./Pages/Formikk";
import Validation from "./Pages/Validation";
import RHF from "./Pages/RHF";

function App() {
  return (
  <div className="App">
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Formikk color="red" labelColor="green"/>}/>
          <Route path="/validation" element={<Validation color="red" labelColr="green"/>}/>
          <Route path="/reactHooksForm" element={<RHF color="red" labelColor="green"/>}/>
        </Routes>
      </Router>
  </div>   
  );
}

export default App;
