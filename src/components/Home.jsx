import React, { Component } from 'react'
import Carrusel from './Carrusel'
import Recommended from './Recommended'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carrusel />
                <Recommended />
                
            </div>
        )
    }
}
