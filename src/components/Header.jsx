import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from '@material-ui/core/Badge';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './styles/header.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';





// dialog
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';

import { useFormik } from 'formik';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function MenuAppBar() {

  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [spinner, setSpinner] = React.useState(false);
  const [errorLogin, setErrorLogin] = React.useState(false);

  const [openModal, setOpen] = React.useState(false);
  const [openModalRegister, setOpenRegister] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  const handleClickOpenRegister = () => {
    setOpenRegister(true)

  }
  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const startSession = () =>{
    handleClose();
    handleClickOpen();
  }
  
  const register = () =>{
    handleClose();
    handleClickOpenRegister();
  }

  const responseGoogle = (response) => {
    console.log(response);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      setSpinner(true)
      if(values.email === "claudio@gmail.com" && values.password === "1234"){
        
        setTimeout(() => {
          setSpinner(false)
        }, 3000);
        console.log('estas logeado');
        const user = {
          name: 'Claudio Olivares',
          picture: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
        }
        sessionStorage.setItem("user", user);   
      }else {
        setTimeout(() => {
          setSpinner(false)
          setErrorLogin(true)
        }, 3000);
      }
    },
    validate: values => {
      // values.email values.password
      let errors = {}
     
      if (!values.email) {
        errors.email = '(*) Correo Obligatorio';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = '(*) Contraseña Obligatoria';
      } 

      return errors;
    }
    
  });

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            E-commerce
          </Typography>
          {auth && (
            <div>
              <Tooltip title="Carrito de compra">
              <Link to="/carritoCompra">
              <IconButton  className="header-icons"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />

                </Badge>
              </IconButton>
              </Link>
                
              </Tooltip>
              <Tooltip title="Carrito de compra">
              <IconButton className="header-icons"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={startSession}>Iniciar Sessión</MenuItem>
                <MenuItem onClick={register}>Regístrate</MenuItem>
                
  
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Dialog open={openModal} onClose={handleClose2} aria-labelledby="form-dialog-title" fullScreen={fullScreen}>
      
      {spinner ? <LinearProgress /> : null}
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="form-dialog-title">Iniciar Sessión </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bienvenido ingrese su correo y contraseña
          </DialogContentText>
     
          <TextField
            
            margin="dense"
            id="email"
            name="email"
            label="Correo electrónico"
            variant="outlined"
            type="email"
            fullWidth
            
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText= {formik.errors.email ? formik.errors.email : '(*) Campo obligatorio' }
            error = {formik.errors.email ? true : false }
          />
          
           <TextField
            margin="dense"
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText= {formik.errors.password ? formik.errors.password : '(*) Campo obligatorio' }
            error = {formik.errors.password ? true : false }
          />
           <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={errorLogin}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Correo o contraseña incorrecta"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              Cerrar
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
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
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            Iniciar Sessión
          </Button>
        </DialogActions>
        </form>
      </Dialog>

      <Dialog open={openModalRegister} onClose={handleCloseRegister} aria-labelledby="form-dialog-title" fullScreen={fullScreen}>
        <DialogTitle id="form-dialog-title">Regístrate</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bienvenido ingresa tu correo y contraseña
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRegister} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleCloseRegister} variant="contained" color="secondary">
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
