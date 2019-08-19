import React, { Component } from 'react';
import MyBg from "../myBg/index.js";

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
                <MyBg/>
                <img className="mywordbox" src={data.wordbox} alt=""/>
                <img className="Word" src={data.content} alt="" />
            </div>
        )
    }
}
