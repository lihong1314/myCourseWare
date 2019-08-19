import React, { Component } from 'react';
import './css/index.css';
window.clickTip = 0
export default class Page19 extends Component {
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        this.state = {
            answerTip: window.data[index].answer,
            answer: -1,
            t:null,
            t2:null,
            t3:null,
            A:window.data[index].answerA,
            B:window.data[index].answerB,
            trueFalse:-1
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
    click(type) {
        if(window.clickTip==1){
            window.clickTip=0
            clearInterval(this.state.t)
            clearTimeout(this.state.t2)
            clearTimeout(this.state.t3)
            if (type === "A" && this.state.answerTip === "A") {
                this.setState({
                    audioUrl:require("../Qaudio/true.mp3"),
                    raduioflg:true,
                    trueFalse:1
                })
                setTimeout(()=>{
                    this.setState({
                        answer: 1,
                        audioUrl:require("./images/true.mp3"),
                        raduioflg:true
                    })
                },2000)
               
            } else if (type === "B" && this.state.answerTip === "B") {
                this.setState({
                    audioUrl:require("../Qaudio/true.mp3"),
                    raduioflg:true,
                    trueFalse:1
                })
                setTimeout(()=>{
                    this.setState({
                        answer: 1,
                        audioUrl:require("./images/true.mp3"),
                        raduioflg:true
                    })
                },2000)
            } else {
                this.setState({
                    audioUrl:require("../Qaudio/false.mp3"),
                    raduioflg:true,
                    trueFalse:0
                })
                this.setState({
                    answer: 0,
                    audioUrl:require("./images/false.mp3"),
                    raduioflg:true
                })
            }    
        }
    }
    render() {
        let { answer, answerTip,A,B, audioUrl,raduioflg,trueFalse} = this.state
        return (
            <div className="Dinosaur">
                <img className="FullScreen" src={require("./images/bg.png")} alt="" />
                <img className={answer == 1 && answerTip === "A" ? "hide" : "MAAK"} src={require("./images/AK.png")} alt="" />
                <img className={answer == 1 && answerTip === "B" ? "hide" : "MABK"} src={require("./images/BK.png")} alt="" />
                <img className="MAA" onClick={this.click.bind(this, "A")} src={A} alt="" />
                <img className="MAB" onClick={this.click.bind(this, "B")} src={B} alt="" />
                <img className={trueFalse == 0 ? answerTip === "A" ? "cuoR" : "cuo" : "hide"} src={require("./images/cuo.png")} alt="" />
                <img className={trueFalse == 1 ? answerTip === "A" ? "duiL" : "dui" : "hide"} src={require("./images/dui.png")} alt="" />
                <img className={answer == 1 && answerTip === "A" ? "MAAD" : "hide"} src={require("./images/A.gif")} alt="" />
                <img className={answer == 1 && answerTip === "B" ? "MABD" : "hide"} src={require("./images/B.gif")} alt="" />
                <img className={answer != -1?"hide":"MA"} src={require("./images/MA.png")} alt="" />
                <img className={answer == 0?"MAerror":"hide"} src={require("./images/error.gif")} alt="" />
                <img className={answer == 1?"MAsuccess":"hide"} src={require("./images/success.gif")} alt="" />
                <audio src={audioUrl} autoPlay={raduioflg?true:false} >
                      <track kind="captions" />
                      您的浏览器不支持 audio 元素。
                </audio>
            </div>
        )
    }
}