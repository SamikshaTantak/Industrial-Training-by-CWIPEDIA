import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/navbar.components';
import Header from './components/header.components';
import Footer from './components/footer.components';
import NotFound from "./pages/notfound.pages";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />

          </Routes>
      <Footer/>
      </Router>

      
     
      
    </div>
  );
}

export default App;