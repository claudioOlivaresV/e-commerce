import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default class StepperThree extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Card variant="outlined">
              <CardContent>
                  <h3>Claudio Olivares</h3>
                  <h4>11.111.111-1</h4>
                  <h4>Direccion</h4>
                  <h4>Telefono</h4>
                  <h4>Correo</h4>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 col-lg-6">resumen compra</div>
        </div>
      </div>
    );
  }
}
