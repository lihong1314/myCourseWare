import React, { Component } from 'react';

export default class Page0 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: this.props.datas.img,
            origin: this.props.datas.origin,
            sizePosition: this.props.datas.sizePosition,//宽  X  Y
            Type: this.props.datas.Type,//运动状态
            moveTime: this.props.datas.moveTime,
            degree: this.props.datas.degree,//运动幅度
            zIndex: this.props.datas.zIndex,

            t: null
        }
    }
    componentDidMount() {
        this.state.t = setInterval(() => {
            this.setState({
                degree: -this.state.degree
            })
        }, this.state.moveTime)
    }
    componentWillUnmount() {
        clearInterval(this.state.t)
        this.setState = (state, callback) => {
            return
        }
    }
    render() {
        let { origin, sizePosition, Type, degree, img, moveTime, zIndex } = this.state
        return (
            <img style={
                {
                    transform: Type + '(' + degree + 'deg)',
                    transformOrigin: origin,
                    width: sizePosition.split(" ")[0],
                    transition: moveTime + "ms linear",
                    position: "absolute",
                    left: sizePosition.split(" ")[1],
                    top: sizePosition.split(" ")[2],
                    zIndex: zIndex
                }
            }
                src={img} alt="" />
        )
    }
}
