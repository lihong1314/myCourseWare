import React, { Component } from 'react';

import './css/index.css';
export default class Page17 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bg: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].bg,
            way: require("./images/hezi1.png"),
            way2: require("./images/hezi1.png"),
            way3: require("./images/hezi1.png"),
            way4: require("./images/hezi1.png"),
            cone: true
        }
    }
    handleClick(type) {
        if (this.state.cone) {
            if (type === "1") {
                this.setState({
                    way: require("./images/open.png"),
                    cone: false
                })
            } else if (type === "2") {
                this.setState({
                    way2: require("./images/open.png"),
                    cone: false
                })

            } else if (type === "3") {
                this.setState({
                    way3: require("./images/open.png"),
                    cone: false
                })
            } else if (type === "4") {
                this.setState({
                    way4: require("./images/open.png"),
                    cone: false
                })
            }

            let num = Math.ceil(Math.random() * 3)
            window.JAMS_showJb(num);

        }

    }

    render() {
        const { bg, way, way2, way3, way4 } = this.state
        return (
            <div>
                <img className="bg7" src={bg} alt="" />
                <div className="bg"> </div>
                <div className="hezi">
                    <img className="blue7" src={require("./images/cj_bg.png")} alt="" />
                    <img id="hezi1" src={way} alt="" onClick={() => this.handleClick('1')} />
                    <img id="hezi2" src={way2} alt="" onClick={() => this.handleClick('2')} />
                    <img id="hezi3" src={way3} alt="" onClick={() => this.handleClick('3')} />
                    <img id="hezi4" src={way4} alt="" onClick={() => this.handleClick('4')} />
                </div>
            </div>
        )
    }
}