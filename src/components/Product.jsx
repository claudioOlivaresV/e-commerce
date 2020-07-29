import React, { Component } from 'react'
import RecommendedDetail from './RecommendedDetail'
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';




const StyledBreadcrumb = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591
  
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export default class Product extends Component {
    render() {
        return (
            <div className="container mt-5" >
                <div className="row mt-5">
                 <Breadcrumbs aria-label="breadcrumb0" className="mt-5">
     
      <Link color="inherit" to="/"   icon={<HomeIcon fontSize="small" />}>
                  Home
                </Link>
      <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
     
    </Breadcrumbs>

                </div>
                <div className="row w-75 ">
                    <div className="col-12 my-3">
                        <RecommendedDetail />

                    </div>
                </div>
                
            </div>
        )
    }
}
