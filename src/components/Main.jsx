import React from 'react'
import Header from "./Header";


function Main (props){

    return (
        <React.Fragment>
            <Header/>
           {props.children}        
        </React.Fragment>
       
        );
}

export default Main
