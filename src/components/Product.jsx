import React, { Component } from 'react'
import RecommendedDetail from './RecommendedDetail'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';







 

export default class Product extends Component {
    render() {
        return (
            <div className="container mt-5" >
                <div className="row mt-5">
                  <div className="col-12 ">
                 <Breadcrumbs aria-label="breadcrumb0" className="mt-5">

     
               <Link color="inherit" to="/" >
                  <HomeIcon />   Home
                </Link>

                <Link color="inherit"  >
                    Producto
                </Link>
     
     
    </Breadcrumbs>

                  </div>

                </div>
                <div className="row  ">
                    <div className="col-12 col-lg-6 my-3">
                        <RecommendedDetail />

                    </div>
                </div>
                
            </div>
        )
    }
}
