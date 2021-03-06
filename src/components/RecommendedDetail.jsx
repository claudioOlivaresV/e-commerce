import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "15px",
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    position: 'absolute',
    right: '30px',
   
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const img = 'https://i5.walmartimages.com/asr/f3077845-8786-4bfa-ba98-482f06af91a2_1.2bdade6ddc986cbd875304164a98aa06.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [open, setOpen] = React.useState(false);

  const openSnack =  () => {
    setOpen(true);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <div>

   
    <Card className={classes.root}>
    <CardMedia
      className={classes.media}
      image = {img}
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
      <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
    </CardContent>
    <CardActions disableSpacing>
      <Link to="/producto">
    <Tooltip title="Ver Detalle">
        <IconButton aria-label="add to favorites">
          <VisibilityIcon />
        </IconButton>
    </Tooltip>
      </Link>
    <Tooltip title="Compartir">
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
    </Tooltip>

        <Button
         onClick={openSnack}
         className={clsx(classes.expand, {
        
        })}
         variant="contained" color="secondary" >
          Comprar
         </Button> 
    </CardActions>
  </Card>

<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
<Alert onClose={handleClose} severity="success">
  Producto agregado!
</Alert>
</Snackbar>
</div>

  );
}



