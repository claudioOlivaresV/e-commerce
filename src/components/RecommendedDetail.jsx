import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Rating from '@material-ui/lab/Rating';



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "15px"
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




  return (
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Button
         className={clsx(classes.expand, {
        
        })}
         variant="contained" color="secondary" >
          Comprar
         </Button> 
    </CardActions>
  </Card>
  );
}
