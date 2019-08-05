import React, { Component } from 'react';

export default class Page0 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: window.data[0]
        }
    }

    render() {
        let { data} = this.state
        return ( 
            <img className="FullScreen" src={window.data[0].bgImg} alt=""/>
        )
    }
}
