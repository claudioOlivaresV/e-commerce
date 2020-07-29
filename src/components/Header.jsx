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
  const [openModal, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
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
  const responseGoogle = (response) => {
    console.log(response);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            E-commerce
          </Typography>
          {auth && (
            <div>
              <Link to="/carritoCompra">
              <IconButton
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
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
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
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Dialog open={openModal} onClose={handleClose2} aria-labelledby="form-dialog-title" fullScreen={fullScreen}>
        <DialogTitle id="form-dialog-title">Iniciar Sessión</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bienvenido ingresa tu correo y contraseña
          </DialogContentText>
          <TextField
            autoFocus
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
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose2} variant="contained" color="secondary">
            Iniciar Sessión
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
