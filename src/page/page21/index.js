import React, { Component } from 'react';
import './css/index.css';
window.clickTip = 0
export default class Page21 extends Component {
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        this.state = {
            Problem:  window.data[index].Problem,
            AnswerA:  window.data[index].AnswerA,
            AnswerB:  window.data[index].AnswerB,
            trueAnswer:  window.data[index].trueAnswer,
            Answer: -1,
            audioUrl:null,
            raduioflg:false,
            show:0,
        }
    }
    componentDidMount() {

    }
    changeAnswer(type) {
        console.log(type)
        if (type === "A" && this.state.trueAnswer === "A") {
            this.setState({
                Answer: 1,
                raduioflg: true,
                audioUrl: require('./images/zha.mp3')
            })
            setTimeout(()=>{
                this.setState({
                    raduioflg: true,
                    audioUrl: require('./images/true.mp3')
                })
            },500)
        } else if (type === "B" && this.state.trueAnswer === "B") {
            this.setState({
                Answer: 1,
                raduioflg: true,
                audioUrl: require('./images/zha.mp3')
            })
            setTimeout(()=>{
                this.setState({
                    raduioflg: true,
                    audioUrl: require('./images/true.mp3')
                })
            },500)
        } else {
            this.setState({
                Answer: 0,
                raduioflg: true,
                audioUrl: require('./images/false.mp3')
            })
            setTimeout(()=>{
                this.setState({
                    show:1
                })
            },1000)
        }

    }
    render() {
        let {Answer,trueAnswer,audioUrl,raduioflg,Problem,AnswerA,AnswerB,show} = this.state//
        return (
            <div ref="word" className="word">
                <img className="FullScreen" src={require("./images/bg.png")} alt="" />
                <img className="WordBig" src={require(`./images/bigWord/${Problem}.png`)} alt="" />
                <div className={Answer==0?trueAnswer==="B"?"wordAK WordBallA WordMove":"wordAK WordBallA":Answer==1&&trueAnswer==="A"?"hide":"wordAK WordBallA"} onClick={this.changeAnswer.bind(this, "A")}>
                    <img className="WordBall WordBallA" src={require("./images/Aball.png")} alt="" />
                    <img className="WordAnswer WordA" src={require(`./images/smallWord/${AnswerA}.png`)} alt="" />
                </div>
                <div className={Answer==0?trueAnswer==="A"?"wordBK WordBallB WordMove":"wordBK WordBallB":Answer==1&&trueAnswer==="B"?"hide":"wordBK WordBallB"} onClick={this.changeAnswer.bind(this, "B")}>
                    <img className="WordBall WordBallB" src={require("./images/Bball.png")} alt="" />
                    <img className="WordAnswer WordB" src={require(`./images/smallWord/${AnswerB}.png`)} alt="" />
                </div>
                <img className={Answer==1?trueAnswer==="A"?"WordZha":"WordZha WordZhaR":"hide"} src={require("./images/false.gif")} alt="" />
                <img className={Answer==1?"FullScreen giftGif":"hide"} src={require("./images/trueflower.gif")} alt=""/>
                <audio ref="audio" src={audioUrl} autoPlay={raduioflg ? true : false}></audio>
                <div className={show==1?'FullScreen Mask':"hide"}>
                    <img className="WordBall MaskBall" src={require("./images/Bball.png")} alt="" />
                    <img className="MaskAnswer" src={trueAnswer==="A"?require(`./images/smallWord/${AnswerA}.png`):require(`./images/smallWord/${AnswerB}.png`)} alt=""/>
                </div>
            </div>
        )
    }
}