import React from "react";
import "./App.css";
import Header from "./components/Header";
import Carrusel from "./components/Carrusel";
import Recommended from "./components/Recommended";


function App() {
  return (
    <div className="App">
      <Header className="container"/>
      <Carrusel />
      <Recommended />

    </div>
  );
}

export default App;
