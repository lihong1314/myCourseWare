import React, { Component } from 'react';

export default class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.search.substring(this.props.location.search.indexOf("=") + 1),
            data:window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)]
        }
    }
    render() {
        let {data}=this.state
        return (
            <div className="WordB">
                <img className="FullScreen" src={data.bgImg} alt="" />
                <img className="Word" src={data.content} alt="" />
            </div>
        )
    }
}
