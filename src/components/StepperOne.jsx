import React, { Component } from "react";

import CarritoProduct from "./CarritoProduct";
import Typography from '@material-ui/core/Typography';



export default class StepperOne extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
             <CarritoProduct />

             <Typography color="secondary" className="my-3 float-right">Total a pagar: $1.000.000 </Typography>
          </div>
       
        </div>
      </div>
    );
  }
}
