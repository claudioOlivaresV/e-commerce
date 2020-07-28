import React, { Component } from 'react'
import RecommendedDetail from './RecommendedDetail'
import Menu from './Menu'

export default class Recommended extends Component {
    render() {
        return (
            <div className="container">
                <Menu />
                <div className="row my-5">
                    <div className="col-12 col-lg-4">
                       <RecommendedDetail className="w-100" />
                    </div>
                    <div className="col-12 col-lg-4">
                      <RecommendedDetail className="w-100" />
                    </div>
                    <div className="col-12 col-lg-4">
                       <RecommendedDetail className="w-100" />
                    </div>
                </div>
                
            </div>
        )
    }
}
