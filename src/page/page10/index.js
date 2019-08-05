import React, { Component } from 'react';
let t;
let t1;
let t2;
export default class Page10 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            audioUrl: null,
            raduioflg: false,
            type: 0,
            answer: "A",
            answerTip: -1,
            answerNum: 0,
            shuiTip: 0,
            A: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].T1A,
            B: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].T1B,
            zhadan1: 0,
            zhadan2: 0,
            zhadan3: 0,
            zhadan4: 0,
            zhadan5: 0,
            zhadan6: 0,
            data: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
            yanshiShow:'none',
            yanshisrc:'',
        }
    }
    componentDidMount() {
        setInterval(() => {
            if (window.clickTip == 1) {
                if(localStorage.getItem("endGame")==1){
                    localStorage.setItem("endGame",0)
                    window.yanshiFn(this,require("./images/yanshi.gif"))
                }
                this.showAnswer()
                this.ten()
            }
        }, 20)
    }
    ten() {
        window.clickTip = 2
        t1 = setTimeout(() => { 
           
            if (this.state.answerNum == 0) {
                this.setState({
                    zhadan1: 1
                })
            }
            if (this.state.answerNum == 1) {
                this.setState({
                    zhadan2: 1,
                })
            }
            if (this.state.answerNum == 2) {
                this.setState({
                    zhadan3: 1,
                })
            }
            if (this.state.answerNum == 3) {
                this.setState({
                    zhadan4: 1,
                })
            }
            if (this.state.answerNum == 4) {
                this.setState({
                    zhadan5: 1,
                })
            }
            if (this.state.answerNum == 5) {
                this.setState({
                    zhadan6: 1,
                })
            }
            this.setState({
                answerTip: 0
            })
            t2 = setTimeout(() => {
                this.setState({
                    answerNum: this.state.answerNum + 1,
                    type: 0,
                    answerTip: -1,
                    zhadan: 1,
                    raduioflg: true,
                    audioUrl: require('./images/zha.mp3')
                }, () => {
                    this.refs.audio.play()
                })
            }, 2000)
        }, 10000)
    }
    showAnswer() {
        if (window.clickTip == 1) {
            if (this.state.answerNum == 1) {
                this.setState({
                    A: this.state.data.T2A,
                    B: this.state.data.T2B,
                })
            }
            if (this.state.answerNum == 2) {
                this.setState({
                    A: this.state.data.T3A,
                    B: this.state.data.T3B,
                })
            }
            if (this.state.answerNum == 3) {
                this.setState({
                    A: this.state.data.T4A,
                    B: this.state.data.T4B,
                })
            }
            if (this.state.answerNum == 4) {
                this.setState({
                    A: this.state.data.T5A,
                    B: this.state.data.T5B,
                })
            }
            if (this.state.answerNum == 5) {
                this.setState({
                    A: this.state.data.T6A,
                    B: this.state.data.T6B,
                })
            }
            this.setState({
                type: 1,
                shuiTip: 0,
                answer: this.state.data.answerArr[this.state.answerNum]
            })
        }
    }
    changeAnswer(type) {
        if (window.clickTip == 2) {
            clearTimeout(t1)
            if (type === "A" && this.state.answer === "A") {
                window.clickTip = 0
                this.setState({
                    answerTip: 1,
                })
                clearTimeout(t)
                t = setTimeout(() => {
                    this.setState({
                        answerNum: this.state.answerNum + 1,
                        type: 0,
                        shuiTip: 1,
                        answerTip: -1,
                        raduioflg: true,
                        audioUrl: require('./images/suger.mp3')
                    }, () => {
                        this.refs.audio.play()
                    })
                }, 2000)
            } else if (type === "B" && this.state.answer === "B") {
                window.clickTip = 0
                this.setState({
                    answerTip: 1,
                })
                clearTimeout(t)
                t = setTimeout(() => {
                    this.setState({
                        answerNum: this.state.answerNum + 1,
                        type: 0,
                        answerTip: -1,
                        shuiTip: 1,
                        raduioflg: true,
                        audioUrl: require('./images/suger.mp3')
                    }, () => {
                        this.refs.audio.play()
                    })
                    // window.clickTip = 1
                }, 2000)
            } else {
                window.clickTip = 0
                if (this.state.answerNum == 0) {
                    this.setState({
                        zhadan1: 1
                    })
                }
                if (this.state.answerNum == 1) {
                    this.setState({
                        zhadan2: 1,
                    })
                }
                if (this.state.answerNum == 2) {
                    this.setState({
                        zhadan3: 1,
                    })
                }
                if (this.state.answerNum == 3) {
                    this.setState({
                        zhadan4: 1,
                    })
                }
                if (this.state.answerNum == 4) {
                    this.setState({
                        zhadan5: 1,
                    })
                }
                if (this.state.answerNum == 5) {
                    this.setState({
                        zhadan6: 1,
                    })
                }
                this.setState({
                    answerTip: 0
                })
                clearTimeout(t)
                t = setTimeout(() => {
                    this.setState({
                        answerNum: this.state.answerNum + 1,
                        type: 0,
                        answerTip: -1,
                        zhadan: 1,
                        raduioflg: true,
                        audioUrl: require('./images/zha.mp3')
                    }, () => {
                        this.refs.audio.play()
                    })
                }, 2000)
            }
        }
    }
 
    render() {
        const { answer, answerTip, type, A, B, answerNum, shuiTip, zhadan1, zhadan2, zhadan3, zhadan4, zhadan5, zhadan6, audioUrl, raduioflg,yanshiShow,yanshisrc } = this.state
        return (
            <div className="endGame" onClick={this.showAnswer.bind(this)}>
                <img className="dollyanshi" style={{display:yanshiShow}} src={yanshisrc} alt=""/>
                <img className='endGameBg' src={require("./images/bg.jpg")} alt="" />
                <div className={type == 0 ? "hide" : "answerImg"}>
                    <img className='endGameLogo' src={require("./images/logo.png")} alt="" />
                    <img onClick={this.changeAnswer.bind(this, "A")} className="endanswer" src={A} alt="" />
                    <img onClick={this.changeAnswer.bind(this, "B")} className="endanswer" src={B} alt="" />
                    <img className={answerTip == 1 ? answer === "A" ? "dui" : "duis" : "hide"} src={require("./images/dui.png")} alt="" />
                    <img className={answerTip == 0 ? answer === "B" ? "cuos" : "cuo" : "hide"} src={require("./images/cuo.png")} alt="" />
                </div>
                <div className="superP">
                    <img className={answerNum >= 1 ? zhadan1 == 0 ? "suger suger1" : "zha zha1" : "hide"} src={zhadan1 == 0 ? require("./images/red.png") : require("./images/zha1.gif")} alt="" />
                    <img className={answerNum >= 2 ? zhadan2 == 0 ? "suger suger2" : "zha zha2" : "hide"} src={zhadan2 == 0 ? require("./images/blue.png") : require("./images/zha2.gif")} alt="" />
                    <img className={answerNum >= 3 ? zhadan3 == 0 ? "suger suger3" : "zha zha3" : "hide"} src={zhadan3 == 0 ? require("./images/yellow.png") : require("./images/zha3.gif")} alt="" />
                    <img className={answerNum >= 4 ? zhadan4 == 0 ? "suger suger4" : "zha zha4" : "hide"} src={zhadan4 == 0 ? require("./images/red.png") : require("./images/zha4.gif")} alt="" />
                    <img className={answerNum >= 5 ? zhadan5 == 0 ? "suger suger5" : "zha zha5" : "hide"} src={zhadan5 == 0 ? require("./images/blue.png") : require("./images/zha5.gif")} alt="" />
                    <img className={answerNum >= 6 ? zhadan6 == 0 ? "suger suger6" : "zha zha6" : "hide"} src={zhadan6 == 0 ? require("./images/yellow.png") : require("./images/zha6.gif")} alt="" />
                </div>
                <img className={shuiTip == 1 ? "shui" : "hide"} src={require("./images/shui.gif")} alt="" />
                <audio ref="audio" src={audioUrl} autoPlay={raduioflg ? true : false}></audio>
            </div>
        )
    }
}