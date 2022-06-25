import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Register from "./Register";
import Allusers from "./Allusers";


function App() {
return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/users" element={<Allusers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;