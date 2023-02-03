import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/About" element={<About />}/>
          <Route path="/Logement/:id" element={<Logement />}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
