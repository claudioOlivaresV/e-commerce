import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const image = 'https://i5.walmartimages.com/asr/f3077845-8786-4bfa-ba98-482f06af91a2_1.2bdade6ddc986cbd875304164a98aa06.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'




export default class CarritoProduct extends Component {
  
   state = {
     modal:  false,
     cant1: 1
     
  };

  sumar = () => {
    this.setState({cant1: this.state.cant1 + 1 })
  };
  restar = () => {
    if(this.state.cant1 > 1) {
      this.setState({cant1: this.state.cant1 - 1 })
    }
  }

  handleClickOpen = () => {
    this.setState({modal: true})
  };
  
  handleClose = () => {
    this.setState({modal: false})
  };
  
  
    render() {
        return (
            <div className="text-left my-3">
                <Card >
      <CardContent>
          <div className="row">
              <div className="col-2 align-self-center">
                  
                  <img src={image} className="img-fluid" alt="Imagen Producto" />

              </div>
              <div className="col-6">
             
        <Typography variant="h5" component="h2" color="textSecondary" >
          belent
        </Typography>
        <Typography color="secondary" className="mb-2 ">
          $590.000
        </Typography>

      
         <IconButton aria-label="menos" onClick={this.restar}>
        <ArrowBackIosIcon/>
        </IconButton>
        <span>{this.state.cant1}</span> 
        <IconButton aria-label="mas" onClick={this.sumar}>
          <ArrowForwardIosIcon />
        </IconButton>
       
        {/* <TextField
          id="outlined-number"
          label="Cantidad"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          className="mt-3"
          variant="outlined"
        /> */}

              </div>
              <div className=" col-4 text-center align-self-center p-2">

              <IconButton aria-label="delete" onClick={this.handleClickOpen} >
          <DeleteIcon fontSize="large" />
        </IconButton>

              </div>

          </div>
        
      </CardContent>

    </Card>

    <Dialog
        open={this.state.modal}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Esta eliminando un producto"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Realmente quiere eliminar este producto del su compra?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            No
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
                
            </div>
        )
    }
}
