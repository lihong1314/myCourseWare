import React, { Component } from 'react';
import { hashHistory } from "react-router";

export default class Page1 extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
   
    render() {
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        
        return (
            <img className="FullScreen" src={window.data[index].bgImg} alt=""/>
        )
    }
}
