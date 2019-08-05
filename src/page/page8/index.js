import React, { Component } from 'react';

import './css/index.css';
export default class Page8 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
            answer: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].answer,
            clickone: true,
            audioUrl: null,
            raduioflg: false,
            selecthidden: 'block',
            duileft: '0',
            cuoleft: '0',
            duiflg: 'none',
            cuoflg: 'none',
            linedisplaya: 'block',
            linedisplayb: 'block',
            downa: false,
            downb: false,
            startclass: 'start2',
            animalsrc: "",
            animalflg: 'none',
            t:0,
            t1:0
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                selecthidden: 'none'
            })
        }, 4000)
        this.state.t = setInterval(()=>{
            if(window.clickTip == 1){
                clearInterval(this.state.t)
                this.state.t1 = setTimeout(()=>{
                    window.clickTip=0
                    if (this.state.answer !== 'A') {
                        this.setState({
                            clickone: false,
                            audioUrl: require('./images/audio/error.mp3'),
                            raduioflg: true,
                            cuoleft: '21.625vw',
                            cuoflg: 'block',
                            animalflg: 'block',
                            animalsrc: require("./images/candy/animal.gif")
                        })
    
                    } else if (this.state.answer !== 'B') {
                        this.setState({
                            clickone: false,
                            audioUrl: require('./images/audio/error.mp3'),
                            raduioflg: true,
                            cuoleft: '60.625vw',
                            cuoflg: 'block',
                            animalflg: "block",
                            animalsrc: require("./images/candy/animal.gif")
                        })
                    }
                    clearTimeout(this.state.t1)
                },10000)
            }
        },20)
    }
    click(type) {
        if (this.state.clickone&& window.clickTip==1) {
            clearInterval(this.state.t)
            clearTimeout(this.state.t1)
            if (type === 'A' && this.state.answer == 'A') {
                window.clickTip=0
                this.setState({
                    clickone: false,
                    audioUrl: require('./images/audio/Great.mp3'),
                    duileft: '23.625vw',
                    duiflg: 'block',
                    raduioflg: true,
                    linedisplaya: 'none',
                    downa: true,
                    startclass: 'start2 left'
                })
            } else if (type === 'B' && this.state.answer == 'B') {
                window.clickTip=0
                this.setState({
                    clickone: false,
                    audioUrl: require('./images/audio/Great.mp3'),
                    duileft: '61.625vw',
                    duiflg: 'block',
                    raduioflg: true,
                    linedisplayb: 'none',
                    downb: true,
                    startclass: 'start2 right'
                })
            } else {
                window.clickTip=0
                if (type === 'A') {
                    this.setState({
                        clickone: false,
                        audioUrl: require('./images/audio/error.mp3'),
                        raduioflg: true,
                        cuoleft: '21.625vw',
                        cuoflg: 'block',
                        animalflg: 'block',
                        animalsrc: require("./images/candy/animal.gif")
                    })

                } else if (type === 'B') {
                    this.setState({
                        clickone: false,
                        audioUrl: require('./images/audio/error.mp3'),
                        raduioflg: true,
                        cuoleft: '60.625vw',
                        cuoflg: 'block',
                        animalflg: "block",
                        animalsrc: require("./images/candy/animal.gif")
                    })
                }
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
        const { data,audioUrl, raduioflg, selecthidden, duileft, cuoleft, duiflg, cuoflg, linedisplaya, linedisplayb, downa, downb, startclass, animalsrc, animalflg } = this.state
        return (
            <div className="bgbox">
                <img className="bg" src={require("./images/candy/bg.png")} alt="" />
                <img className="molegame" src={require("./images/candy/gameTime.png")} alt="" />
                <img className="selectThree" style={{ display: selecthidden }} src={require("./images/candy/Tip.png")} alt="" />
                <div className='sugara' onClick={() => this.click('A')}>
                    <img className="Sen" src={require("./images/candy/AK.png")} alt="" />
                    <img className="Sena" src={data.answerA} alt="" />
                    <img className="linea" style={{ display: linedisplaya }} src={require("./images/candy/line.png")} alt="" />
                    <img className={downa ? "xiong whereabouts" : "xiong"} src={require("./images/candy/leftS.png")} alt="" />
                </div>
                <div className='sugarb' onClick={() => this.click('B')}>
                    <img className="Sen" src={require("./images/candy/BK.png")} alt="" />
                    <img className="Senb" src={data.answerB} alt="" />
                    <img className="lineb" style={{ display: linedisplayb }} src={require("./images/candy/line.png")} alt="" />
                    <img className={downb ? "xiong whereabouts" : "xiong"} src={require("./images/candy/rightS.png")} alt="" />
                </div>


                <img className="sugardui" style={{ left: duileft, display: duiflg }} src={require("./images/candy/dui.png")} alt="" />
                <img className="sugarcuo" style={{ left: cuoleft, display: cuoflg }} src={require("./images/candy/cuo.png")} alt="" />

                <img className={startclass} src={require("./images/candy/pen.png")} alt="" />
                <audio src={audioUrl} autoPlay={raduioflg ? true : false}></audio>
                <img className='candyanimal' style={{ display: animalflg }} src={animalsrc} alt="" />
            </div>
        )
    }
}
