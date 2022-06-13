import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRouters";
import Navbar from "./components/UI/Navbar/Navbar";
import './styles/app.css'

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouters/>
    </BrowserRouter>
  );
}

export default App;
