import React, { Component } from 'react';
import './css/index.css';
window.clickTip = 0
let num = 0
export default class Page19 extends Component {
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        this.state = {
            resetX: 0,
            resetY: 0,
            robot1: false,
            robot2: false,
        }
    }
    componentDidMount() {
        this.state.t=setInterval(()=>{
            if(window.clickTip==1){
                clearInterval(this.state.t)
                this.state.t2=setTimeout(()=>{
                    this.setState({
                        audioUrl:require("../Qaudio/false.mp3"),
                        raduioflg:true
                    })
                    window.clickTip=0
                    this.state.t3=setTimeout(()=>{
                        this.setState({
                            answer: 0, 
                            audioUrl:require("./images/false.mp3"),
                            raduioflg:true
                        })
                        window.clickTip=0
                    },2000)
                },10000)
            }
        },20)
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearInterval(this.state.t)
        clearTimeout(this.state.t2)
        clearTimeout(this.state.t3)
        this.setState = (state, callback) => {
            return
        }
    }
    TouchStart(index, event) {
        let target = event.target.parentNode
        num += 1
        target.style.zIndex = num
        this.setState({
            resetX: target.offsetLeft,
            resetY: target.offsetTop
        })
    }
    TouchMove(event) {
        let target = event.target.parentNode
        target.style.transition = "0s"
        target.style.left = (event.changedTouches[0].pageX - (target.clientWidth / 2)) + 'px'
        target.style.top = (event.changedTouches[0].pageY - (target.clientHeight / 2) - this.refs.car.offsetTop) + 'px'
    }
    TouchEnd(index, event) {
        let position = event.changedTouches[0]
        let target = event.target.parentNode
        let carWidth = this.refs.car.clientWidth / 100
        if (position.pageX >= carWidth * 24.8 &&
            position.pageX <= carWidth * 24.8 + target.clientWidth &&
            position.pageY - this.refs.car.offsetTop >= carWidth * 30.5 &&
            position.pageY - this.refs.car.offsetTop <= carWidth * 30.5 + target.clientHeight
        ) { //第一个

            if (this.state.robot1 == false) {
                //     this.state.robotArr.push(index)
                //     let list = this.state.newarr;
                //     list[0] = index
                this.setState({
                    robot1: true,
                    // robotArr: this.state.robotArr,
                    // newarr:list
                })
                target.style.left = "24.8vw"
                target.style.top = "30.5vw"
                target.style.transition = ".5s"
            } else {
                target.style.left = this.state.resetX + "px"
                target.style.top = this.state.resetY + "px"
                target.style.transition = ".5s"
            }
        }
        else if (position.pageX >= carWidth * 57.12 &&
            position.pageX <= carWidth * 57.12 + target.clientWidth &&
            position.pageY - this.refs.car.offsetTop >= carWidth * 30.5 &&
            position.pageY - this.refs.car.offsetTop <= carWidth * 30.5 + target.clientHeight) {

            if (this.state.robot2 == false) {
                //     this.state.robotArr.push(index)
                //     let list = this.state.newarr;
                //     list[1] = index
                this.setState({
                    robot2: true,
                    // robotArr: this.state.robotArr,
                    // newarr:list
                })
                target.style.left = "57.12vw"
                target.style.top = "30.5vw"
                target.style.transition = ".5s"
            } else {
                // this.changePosition(1)
                target.style.left = this.state.resetX + "px"
                target.style.top = this.state.resetY + "px"
                target.style.transition = ".5s"
            }
        } else {
            target.style.left = this.state.resetX + "px"
            target.style.top = this.state.resetY + "px"
            target.style.transition = ".5s"
        }
    }
    render() {
        let { } = this.state
        return (
            <div ref="car" className="car">
                <img className="FullScreen" src={require("./images/bg.jpg")} alt="" />
                <div className="CarS CarA" onTouchStart={this.TouchStart.bind(this, 0)} onTouchMove={this.TouchMove.bind(this)} onTouchEnd={this.TouchEnd.bind(this, 0)}>
                    <img src={require("./images/car.png")} alt="" />
                    <span>There is</span>
                </div>
                <div className="CarS CarB" onTouchStart={this.TouchStart.bind(this, 1)} onTouchMove={this.TouchMove.bind(this)} onTouchEnd={this.TouchEnd.bind(this, 1)}>
                    <img src={require("./images/car.png")} alt="" />
                    <span>a bathroom</span>
                </div>

                {/* <audio src={audioUrl} autoPlay={raduioflg?true:false} >
                      <track kind="captions" />
                      您的浏览器不支持 audio 元素。
                </audio> */}
            </div>
        )
    }
}