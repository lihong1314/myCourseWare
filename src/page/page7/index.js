import React, { Component } from 'react';
window.clickTip = 0
export default class Page7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.location.search.substring(this.props.location.search.indexOf("=") + 1),
            tip: 0,
            answer: -1,
            answerTip: -1,
            data: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
            audioUrl: null,
            raduioflg: false,
            direction: 0,
            errorsrc: '',
            truesrc: '',
            t: 0,
            t1: 0,
            select: 0

        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                select: 1
            })
        }, 4000)
        this.state.t = setInterval(() => {
            if (window.clickTip == 1) {
                clearInterval(this.state.t)
                this.state.t1 = setTimeout(() => {
                    window.JAMS_Answer(false)
                    window.clickTip = 0
                    this.setState({
                        audioUrl: require('../Qaudio/false.mp3'),
                        raduioflg: true,
                        answerTip: 0
                    })
                    if (this.state.answer === 'A') {
                        this.setState({
                            direction: 0,
                        })
                    } else {
                        this.setState({
                            direction: 1,
                        })
                    }
                    setTimeout(() => {
                        this.setState({
                            answer: 0,
                            audioUrl: require('./audio/error.mp3'),
                            raduioflg: true,
                            errorsrc: window.data[this.state.index].errorsrc
                        })
                    }, 2000)
                }, 10000)
            }
        }, 20)

    }
    clickAnswer(answer) {
        if (this.state.tip == 0 && window.clickTip == 1) {
            clearInterval(this.state.t)
            clearTimeout(this.state.t1)
            if (answer === 'A' && this.state.data.answer == 'A') {
                window.clickTip = 0
                window.JAMS_Answer(true)
                this.setState({
                    audioUrl: require('../Qaudio/true.mp3'),
                    raduioflg: true,
                    answerTip: 1,
                    direction: 0,
                })
                setTimeout(() => {
                    this.setState({
                        tip: 1,
                        answer: 1,
                        audioUrl: require('./audio/great.mp3'),
                        raduioflg: true,
                        truesrc: window.data[this.state.index].truesrc
                    })
                }, 2000)
            } else if (answer === 'B' && this.state.data.answer == 'B') {
                window.clickTip = 0
                window.JAMS_Answer(true)
                this.setState({
                    audioUrl: require('../Qaudio/true.mp3'),
                    raduioflg: true,
                    answerTip: 1,
                    direction: 1,
                })
                setTimeout(() => {
                    this.setState({
                        tip: 1,
                        answer: 1,
                        audioUrl: require('./audio/great.mp3'),
                        raduioflg: true,

                        truesrc: window.data[this.state.index].truesrc
                    })
                }, 2000)
            } else {
                window.clickTip = 0
                window.JAMS_Answer(false)
                this.setState({
                    audioUrl: require('../Qaudio/false.mp3'),
                    raduioflg: true,
                    answerTip: 0
                })
                if (answer === 'A') {
                    this.setState({
                        direction: 0,
                    })
                } else {
                    this.setState({
                        direction: 1,
                    })
                }
                setTimeout(() => {
                    this.setState({
                        answer: 0,
                        audioUrl: require('./audio/error.mp3'),
                        raduioflg: true,
                        errorsrc: window.data[this.state.index].errorsrc
                    })
                }, 2000)

            }
        }
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearInterval(this.state.t)
        clearTimeout(this.state.t1)
        this.setState = (state, callback) => {
            return
        }
    }
    render() {
        let { answer, answerTip, audioUrl, raduioflg, direction, errorsrc, truesrc, select } = this.state
        return (
            <div className="Game">
                <img className="GameBg" src={require("./images/bg.jpg")} alt="" />
                <img className="GameTitle" src={require("./images/game.png")} alt="" />
                <div className="OneAB">
                    <div onClick={this.clickAnswer.bind(this, "A")} className="OneA"><img src={this.state.data.answerA} alt="" /></div>
                    <div onClick={this.clickAnswer.bind(this, "B")} className="OneB"><img src={this.state.data.answerB} alt="" /></div>
                    <div><img className={answerTip == 0 ? direction == 0 ? "cuo" : "cuoR" : "hide"} src={require("./images/cuo.png")} alt="" /></div>
                    <div><img className={answerTip == 1 ? direction == 0 ? "duiL" : "dui" : "hide"} src={require("./images/dui.png")} alt="" /></div>
                </div>
                <img className={answer < 0 ? "default" : "hide"} src={require("./images/default.gif")} alt="" />
                <img className={answer == 0 ? "fail" : "hide"} src={require("./images/fail.gif")} alt="" />
                <img className={answer == 1 ? direction == 0 ? "successL" : "successR" : "hide"} src={require("./images/success.gif")} alt="" />
                <img className={select == 0 ? "selectTwo" : "hide"} src={require("./images/select.png")} alt="" />
                <audio src={audioUrl} autoPlay={raduioflg ? true : false}></audio>
            </div>
        )
    }
}
