import React,{useState,useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PerfumesList from "./components/PerfumesList.jsx"
import AddPerfume from "./components/AddPerfume.jsx"
import UpdatePerfume from "./components/UpdatePerfumeForm.jsx"
import './App.css'



function App() {
  // const [perfumes, setPerfumes] = useState([])
  // const [trigger,setTrigger]= useState(false)
  // useEffect(() => {
  //   axios.get('http://localhost:8800/perfumes')
  //     .then(response => setPerfumes(response.data))
  //     .catch(error => console.error(error));
  // }, [trigger])
  return (
    <Router>
      <div id="background">
      <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/"> Home page </Link>
            </li>
            <li className="navbar-item">
              <Link to="/add"> Add Perfume </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PerfumesList />} />
          <Route path="/add" element={<AddPerfume  />} />
          <Route path="/update/:id" element={<UpdatePerfume />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
