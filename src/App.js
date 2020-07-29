import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "./components/Main";
import Home from "./components/Home";
import Product from "./components/Product";


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Main>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/producto" component={Product} />

        </Switch>


      </Main>
      
      </BrowserRouter>
     

    </div>
  );
}

export default App;
