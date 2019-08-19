import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import "./mybg.css";

export default class MyBg extends Component {
    render(){
        return(
            <div className="mybgbox">
                <img className="mybgimg" src={require('./images/bg.jpg')} alt=""/>
                <img className="myone rotateCenter1" src={require('./images/1.gif')} alt=""/>
                <img className="mytwo rotateCenter2" src={require('./images/2.gif')} alt=""/>
                <img className="mybananas rotateCenter" src={require('./images/3.gif')} alt=""/>
            </div>
        )
    }
}

