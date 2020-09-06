import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { useFormik } from 'formik';

export default function StartSession() {
    const responseGoogle = (response) => {
        console.log(response);
      }
      const responseFacebook = (response) => {
        console.log(response);
      }
    return (
        <div>
              <DialogContent>
          <DialogContentText>
            Bienvenido ingrese su correo y contraseña
          </DialogContentText>
          <TextField
            
            margin="dense"
            id="name"
            label="Correo electrónico"
            variant="outlined"
            type="email"
            fullWidth
          />
           <TextField
            margin="dense"
            id="name"
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
          />
           <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Iniciar con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    className="w-100 text-center my-3"
    cookiePolicy={'single_host_origin'}
  />
   <FacebookLogin
    appId="1088597931155576"
    autoLoad={false}
    fields="name,email,picture"
    icon="fa-facebook"
  
    // onClick={componentClicked}
    callback={responseFacebook} />

        </DialogContent>
            
        </div>
    )
}
