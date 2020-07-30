import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



export default class StepperTwo extends Component {
    render() {
        return (
            <div>
                 
                <div className="row">
                
                    <div className="col-12 col-lg-8">
                    <Card className="my-3">
                   <CardContent>
                        <div className="mb-3">
                        <h3 className="float-left">Tus Datos</h3>  <Button variant="outlined" className="float-right" >Iniciar Session</Button>
                        </div>
                        <div>
                        <Divider className="mt-5 mb-3" />

                        </div>

                        <h4>Compra como invitado</h4>
                        <div className="container px-3">
                        <div className="row my-3">
                            <div className="col-12 col-lg-6  mb-3">

                        <TextField
          label="Nombre"
          id="outlined-size-normal"
          placeholder="Claudio"
          variant="outlined"
          className="w-100"
        />
                            </div>
                            <div className="col-12 col-lg-6 ">

                            <TextField
          label="Apellido"
          id="outlined-size-normal"
          placeholder="Olivares"
          variant="outlined"
          className="w-100"
        />
    </div>
                            
                        </div>

                        
                        <div className="row my-3">
                            <div className="col-12 col-lg-6 text-right  mb-3">

                        <TextField
          label="Rut"
          id="outlined-size-normal"
          placeholder="11.111.111-1"
          variant="outlined"
          className="w-100"
        />
                            </div>
                            <div className="col-12 col-lg-6 text-left">

                            <TextField
          label="Direccion"
          id="outlined-size-normal"
          placeholder="Calle false 123"
          variant="outlined"
          className="w-100"
        />
    </div>
                            
                        </div>
                        <div className="row my-3"> 
                            <div className="col-12 col-lg-6 text-right  mb-3">

                        <TextField
          label="Telefono"
          id="outlined-size-normal"
          placeholder="+56912345678"
          variant="outlined"
          className="w-100"
        />
                            </div>
                            <div className="col-12 col-lg-6 text-left">

                            <TextField
          label="Correp"
          id="outlined-size-normal"
          placeholder="correo@gmail.com"
          variant="outlined"
          className="w-100"
        />
    </div>
                            
                        </div>
                        </div>
                        
                        
                        </CardContent>
                </Card>
                    </div>
                    
                    <div className="col-12 col-lg-4">
                        resumen compra

                    </div>

                </div>
                
            </div>
        )
    }
}
