import React, { Component } from 'react';

export default class Page14 extends Component {
    constructor(props) {
        super(props)
       
    }
    render() {
        return (
            <div className="first" >
              <img src={require("./images/bg.jpg")} alt=""/>
              <div className="gifsP">
                <img className="gifs gifOne" src={require("./images/1.gif")} alt=""/>
                <img className="gifs gifTwo" src={require("./images/2.gif")} alt=""/>
                <img className="gifs gifThree" src={require("./images/3.gif")} alt=""/>
                <img className="gifs gifFour" src={require("./images/4.gif")} alt=""/>
                <img className="gifs gifFive" src={require("./images/5.gif")} alt=""/>
                <img className="gifs gifSix" src={require("./images/6.gif")} alt=""/>
              </div>
            </div>
        )
    }
    
 
}
