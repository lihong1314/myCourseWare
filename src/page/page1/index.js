import React, { Component } from 'react';

import MyBg from "../myBg/index.js";
import Page0 from "../page0/index.js"

export default class Page1 extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
   
    render() {
        let indexNum = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        
        return (
            <div className="bgbox">
                {/* <MyBg></MyBg> */}
                {
                    window.data[indexNum].img.map((item,index)=>{
                        return (
                            <Page0 key={index} datas={item}/>
                        )
                    })
                }
                <img className="mytitlebox" src={window.data[indexNum].titlebox} alt=""/>
            </div>
        )
    }
}
