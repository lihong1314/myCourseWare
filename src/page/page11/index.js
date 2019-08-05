import React, { Component } from 'react';

export default class Page1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
        }
    }
    render() {
        const {data} = this.state
        return (
            <img className='FullScreen' src={data.bgImg} alt=""/>
        )
    } 
}