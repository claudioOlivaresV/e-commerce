import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';

const image = 'https://i5.walmartimages.com/asr/f3077845-8786-4bfa-ba98-482f06af91a2_1.2bdade6ddc986cbd875304164a98aa06.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'

export default class CarritoProduct extends Component {
  
    render() {
        return (
            <div className="text-left my-3">
                <Card >
      <CardContent>
          <div className="row">
              <div className="col-4 align-self-center">
                  
                  <img src={image} className="img-fluid" alt="Imagen Producto" />

              </div>
              <div className="col-6">
             
        <Typography variant="h5" component="h2" color="textSecondary" >
          belent
        </Typography>
        <Typography color="secondary" className="mb-2 ">
          $590.000
        </Typography>
        <TextField
          id="outlined-number"
          label="Cantidad"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          className="mt-3"
          variant="outlined"
        />

              </div>
              <div className="col-12 col-lg-2 text-center align-self-center p-2">

              <IconButton aria-label="delete" >
          <DeleteIcon fontSize="large" />
        </IconButton>

              </div>

          </div>
        
      </CardContent>

    </Card>
                
            </div>
        )
    }
}
