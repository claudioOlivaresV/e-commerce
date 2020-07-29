import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "./components/Main";
import Home from "./components/Home";
import Product from "./components/Product";
import Carrito from "./components/Carrito";


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Main>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/producto" component={Product} />
           <Route exact path="/carritoCompra" component={Carrito} />

        </Switch>


      </Main>
      
      </BrowserRouter>
     

    </div>
  );
}

export default App;
