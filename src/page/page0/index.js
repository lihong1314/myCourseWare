import React, { Component } from 'react';
//动画配置页面
export default class Page0 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: this.props.datas.img,
            origin: this.props.datas.origin?this.props.datas.origin:"center center",//运动中心 str
            sizePosition: this.props.datas.sizePosition?this.props.datas.sizePosition:["10vw","10vw","10vw"],//宽  X  Y  数组单位任意 arr
            Type: this.props.datas.Type ? this.props.datas.Type : "",//运动类型 str
            moveTime: this.props.datas.moveTime?this.props.datas.moveTime:1000,//运动时间 毫秒为单位 num 
            opacityTime: this.props.datas.opacityTime?this.props.datas.opacityTime:1000,//透明变化时间 毫秒为单位 num
            degree: this.props.datas.degree?this.props.datas.degree:10,//运动幅度 num
            zIndex: this.props.datas.zIndex?this.props.datas.zIndex:1,//图片层级
            t: null,
            tO: null,
            transformValue: "",//transform 属性的value
            opacityValue: 1,//opacity 属性的value
        }
    } q
    componentDidMount() {
        if (this.state.Type.indexOf("translate") != -1||this.state.Type.indexOf("scale") != -1||this.state.Type.indexOf("rotate") != -1) {
            this.state.t = setInterval(() => {
                this.setState({
                    degree: -this.state.degree
                }, () => {
                    if (this.state.Type.indexOf("translate") != -1) {
                        this.setState({
                            transformValue: this.state.Type + '(' + this.state.degree + 'px)'
                        })
                    }
                    if (this.state.Type.indexOf("scale") != -1) {
                        this.setState({
                            transformValue: this.state.Type + '(' + this.state.degree + ')'
                        })
                    }
                    if (this.state.Type.indexOf("rotate") != -1) {
                        this.setState({
                            transformValue: this.state.Type + '(' + this.state.degree + 'deg)'
                        })
                    }
                })
            }, this.state.moveTime)
        }
        if (this.state.Type === "opacity") {
            this.state.tO = setInterval(() => {
                this.setState({
                    opacityValue: -this.state.opacityValue,
                    transformValue: "",
                })
            }, this.state.opacityTime)
        }
    }
    componentWillUnmount() {
        clearInterval(this.state.t)
        clearInterval(this.state.tO)
        this.setState = (state, callback) => {
            return
        }
    }
    render() {
        let { origin, sizePosition, img, moveTime, zIndex,transformValue,opacityValue } = this.state
        return (
            <img style={
                {
                    transform: transformValue,
                    transformOrigin: origin,
                    width: sizePosition[0],
                    transition: moveTime + "ms linear",
                    position: "absolute",
                    left: sizePosition[1],
                    top: sizePosition[2],
                    zIndex: zIndex,
                    opacity: opacityValue
                }
            }
                src={img} alt="" />
        )
    }
}
