import React, { Component } from 'react';

import './index.css';
// let t = 0;
// let t1 = 0;
export default class Page6 extends Component {
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        console.log(index);
        this.state = {
            index,
            data: window.data[index],
            answer: window.data[index].answer,
            jiaziflg: false,
            donghuaA: false,
            clickone: true,
            jiaziClass: 'jiazi',
            audioUrl: null,
            raduioflg: false,
            height: 0,
            selecthidden: 'block',
            flowerflg: 'none',
            flowersrc: '',
            t : 0,
            t1 : 0,
            yanshiShow:'none',
            yanshisrc:'',
        }
    }
    componentDidMount() {
        // this.click();
        setTimeout(() => {
            this.setState({
                selecthidden: 'none'
            })
        }, 4000)

        this.state.t = setInterval(()=>{
            if(window.clickTip == 1){
                // window.yanshiFn(this,require("./images/doll2/yanshi.gif"))
                clearInterval(this.state.t)
                this.state.t1 = setTimeout(()=>{
                    window.clickTip=0
                    this.setState({
                        clickone: false,
                        jiaziClass: 'jiazidonghua3 jiazi',
                        audioUrl: require('./audio/error.mp3'),
                        raduioflg: true
                    })
                    clearTimeout(this.state.t1)
                },10000)
            }
        },20)
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearInterval(this.state.t)
        clearTimeout(this.state.t1)
        this.setState = (state, callback) => {
        return
        }
    }
    click(type) {
        if (this.state.clickone&& window.clickTip==1) {
            clearInterval(this.state.t)
            clearTimeout(this.state.t1)
            if (type === 'A' && this.state.answer == 'A') {
                window.clickTip=0
                this.setState({
                    donghuaA: true,
                    clickone: false,
                    jiaziClass: 'jiazidonghua1 jiazi',
                    audioUrl: require('./audio/Great.mp3'),
                    raduioflg: true,
                })
                setTimeout(() => {
                    this.setState({
                        audioUrl: require('./audio/flower.mp3'),
                        raduioflg: true,
                        flowerflg: 'block',
                        flowersrc: require("./images/doll2/flower.gif")
                    })
                }, 3000)
            } else if (type === 'B' && this.state.answer == 'B') {
                window.clickTip=0
                this.setState({
                    donghuaB: true,
                    clickone: false,
                    jiaziClass: 'jiazidonghua2 jiazi',
                    audioUrl: require('./audio/Great.mp3'),
                    raduioflg: true,
                })
                setTimeout(() => {
                    console.log('ok')
                    this.setState({
                        audioUrl: require('./audio/flower.mp3'),
                        raduioflg: true,
                        flowerflg: 'block',
                        flowersrc: require("./images/doll2/flower.gif")
                    })
                    window.clickTip=0
                }, 3000)
            } else {
                window.clickTip=0
                
                if(this.state.index == 28){
                    this.setState({
                        clickone: false,
                        jiaziClass: 'jiazidonghua4 jiazi',
                        audioUrl: require('./audio/error.mp3'),
                        raduioflg: true
                    })
                }else{
                    this.setState({
                        clickone: false,
                        jiaziClass: 'jiazidonghua3 jiazi',
                        audioUrl: require('./audio/error.mp3'),
                        raduioflg: true
                    })
                }
                
                
            }
        }
    }
    render() {
        const { jiaziClass, donghuaA, donghuaB, audioUrl, raduioflg, selecthidden, flowerflg, flowersrc ,yanshiShow,yanshisrc} = this.state
        return (
            <div className="bgbox" >
                <img className="dollyanshi" style={{display:yanshiShow}} src={yanshisrc} alt=""/>
                <img className="bg" src={require("./images/doll2/bg.png")} alt="" />
                <img className="game" src={require("./images/doll2/game.png")} alt="" />
                <img className="selectOne" style={{ display: selecthidden }} src={require("./images/doll2/select.png")} alt="" />

                <div className={jiaziClass}>

                </div>
                <div className={donghuaA ? 'dolla donghua1' : 'dolla'} onClick={() => this.click('A')}>
                    <img className="circle" src={require("./images/doll2/circle.png")} alt="" />
                    <img className="Sen" src={this.state.data.answerA} alt="" />
                </div>
                <div className={donghuaB ? 'dollb donghua2' : 'dollb'} onClick={() => this.click('B')}>
                    <img className="circle" src={require("./images/doll2/circle.png")} alt="" />
                    <img className="Sen" src={this.state.data.answerB} alt="" />
                </div>

                <img className="tiepianOne" src={require("./images/doll2/tiepian.png")} alt="" />
                <img className="flower" style={{ display: flowerflg }} src={flowersrc} alt="" />

                <audio src={audioUrl} autoPlay={raduioflg ? true : false} >
                </audio>
            </div>
        )
    }
    
}
