import React, { Component } from 'react';
import GifPlayer from 'react-gif-player';
require("./css/index.css")

export default class Page14 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: -1,
      answerA: 0,//控制 错误 和 挖洞 切换
      answerC: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].answer,//选择A B正确答案
      nowAnswer: "",//点击A 或 B
      t: null,
      t1: null,
      t2: null,
      data: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
      audioUrl: null,
      yanshiShow:'none',
      yanshisrc:'',
    }
  }
  componentDidMount() {
    this.state.t = setInterval(() => {
      if (window.clickTip == 1) {
        // window.yanshiFn(this,require("./images/yanshi.gif"))
        clearInterval(this.state.t)
        this.state.t1 = setTimeout(() => {
          this.setState({
            answer: 0
          })
          if (this.state.answerC === "A") {
            this.changeAnswer("B")
          }
          if (this.state.answerC === "B") {
            this.changeAnswer("A")
          }
          window.clickTip = 0
          clearTimeout(this.state.t1)
        }, 10000)
        this.state.t2 = setTimeout(() => {
          this.setState({
            answerA: 1,
            audioUrl:require("./images/zha.mp3")
          },()=>{
            this.refs.audio.play()
          })
          clearTimeout(this.state.t2)
        }, 12000)
      }
    }, 20)
  }
  changeAnswer(type) {
    if (window.clickTip == 1) {
      window.clickTip = 0
      clearInterval(this.state.t)
      clearTimeout(this.state.t1)
      clearTimeout(this.state.t2)
      if (type === "A" && this.state.answerC === "A") {
        this.setState({
          answer: 1,
          nowAnswer: type,
          audioUrl:require("./images/suger.mp3")
        })
        setTimeout(() => {
          this.setState({
            answerA: 1
          },()=>{
            this.refs.audio.play()
          })
        }, 2000)
      } else if (type === "B" && this.state.answerC === "B") {
        this.setState({
          answer: 1,
          nowAnswer: type,
          audioUrl:require("./images/suger.mp3")
        })
        setTimeout(() => {
          this.setState({
            answerA: 1
          },()=>{
            this.refs.audio.play()
          })
        }, 2000)
      } else {
        this.setState({
          answer: 0,
          nowAnswer: type,
          audioUrl:require("./images/zha.mp3")
        })
        setTimeout(() => {
          this.setState({
            answerA: 1
          },()=>{
            this.refs.audio.play()
          })
          
        }, 2000)
      }
    }
  }
  componentWillUnmount() {
    // 卸载异步操作设置状态
    clearInterval(this.state.t)
    clearTimeout(this.state.t1)
    clearTimeout(this.state.t2)
    this.setState = (state, callback) => {
        return
    }
}
  render() {
    let { answer, answerA, answerC, nowAnswer, data ,audioUrl,yanshiShow,yanshisrc} = this.state
    return (
      <div className="gold">
        <img className="dollyanshi" style={{display:yanshiShow}} src={yanshisrc} alt=""/>
        <img src={require("./images/bg.png")} alt="" />
        <img className={answer != -1 ? "hide" : "Miner"} src={require("./images/Miner.png")} alt="" />
        <GifPlayer className={answerA == 1 ? 
          "hide" : 
          answer != -1 ? nowAnswer === "A" ? "Miner MinerD MinerL" : "Miner MinerD MinerR" : "hide"} gif={require("./images/MinerD.gif")} autoplay="true" />
        <GifPlayer className={answerA == 1 && answer == 0 ? nowAnswer === "A" ? "error" : "error errorR" : "hide"} gif={require("./images/error.gif")} autoplay="true" />
        <GifPlayer className={answerA == 1 && answer == 1 ? answerC === "A" ? "true trueL" : "true trueR" : "hide"} gif={require("./images/true.gif")} autoplay="true" />
        <div className="answerP">
          <img className={answerA == 1 && answerC === "A" && answer == 1 ? "hide" : "answer answerA"} src={require("./images/answer.png")} alt="" />
          <img className={answerA == 1 && answerC === "B" && answer == 1 ? "hide" : "answer answerB"} src={require("./images/answer.png")} alt="" />
          <img className={answerA == 1 && answerC === "A" && answer == 1 ? "hide" : "goldAnswer goldA"} onClick={this.changeAnswer.bind(this, "A")} src={data.answerA} alt="" />
          <img className={answerA == 1 && answerC === "B" && answer == 1 ? "hide" : "goldAnswer goldB"} onClick={this.changeAnswer.bind(this, "B")} src={data.answerB} alt="" />
        </div>
        <audio ref="audio" src={audioUrl}></audio>
      </div>
    )
  }
}
