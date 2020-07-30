import React, { Component } from "react";

import CarritoProduct from "./CarritoProduct";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



export default class StepperOne extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
             <CarritoProduct  />
             <CarritoProduct />
             

            
          </div>
          <div className="col-12 col-lg-4 text-left">
          <Card className="my-3">
      <CardContent>
        <Typography >
         Resumen de Compra
        </Typography>

       
        <Typography  color="textSecondary">
        Total a pagar: $1.000.000 
        </Typography>

        <Typography  color="textSecondary">
        Cantidad de productos: 3
        </Typography>
   
      </CardContent>
     
    </Card>
          </div>
       
        </div>
      </div>
    );
  }
}
