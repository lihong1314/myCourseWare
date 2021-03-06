import React, { Component } from 'react';
import GifPlayer from 'react-gif-player';

import './css/index.css';
window.clickTip = 0
export default class Page8 extends Component {
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        this.state = {
            index,
            data: window.data[index],
            answer: window.data[index].answer,
            sentenceAtip: window.data[index].sentenceAtip,
            sentenceBtip: window.data[index].sentenceBtip,
            sentenceA: window.data[index].sentenceA,
            sentenceB: window.data[index].sentenceB,
            clickone:true,
            audioUrl:null,
            raduioflg:false,
            chickenflg:'none',
            chickensrc:'',
            pumAclass:'chickenBoxa',
            pumBclass:'chickenBoxb',
            chicken:'block',
            chickenerrflg:'none',
            chickenErrsaClass:'chickenErrsa',
            chickenErrsasrc:'',
            chickenErrsbClass:'chickenErrsb',
            chickenErrsaFlg:'none',
            chickenErrsbFlg:'none',
            chickent:0,
            t2:0,
            yanshiShow:'none',
            yanshisrc:'',
            aerror:'aerror',
            berror:'berror'
        }
    }
    componentDidMount() {
       
        this.state.chickent = setInterval(()=>{
            if(window.clickTip == 1){
                clearInterval(this.state.chickent)
                this.state.t2 = setTimeout(()=>{
                    window.clickTip=0
                    window.JAMS_Answer(false)
                    this.setState({
                        clickone:false,
                        audioUrl:require('../Qaudio/false.mp3'),
                        raduioflg:true,
                    })
                    setTimeout(() => {
                        if(this.state.answer === 'A'){
                            this.setState({
                                clickone:false,
                                audioUrl:require('./images/audio/error.mp3'),
                                raduioflg:true,
                                chicken:'none',
                                chickenerrflg:'block',
                                chickenErrsaClass:'chickenErrsa chickenrunright',
                                aerror:'aerror chickenrunright',
                                chickenErrsasrc:window.data[this.state.index].chickenErrsasrc,
                                chickenErrsaFlg:'block',
                            })
                        }else if(this.state.answer === 'B'){
                            this.setState({
                                clickone:false,
                                audioUrl:require('./images/audio/error.mp3'),
                                raduioflg:true,
                                chicken:'none',
                                chickenerrflg:'block',
                                chickenErrsbClass:'chickenErrsb chickenrunleft',
                                berror:'berror chickenrunleft',
                                chickenErrsasrc:window.data[this.state.index].chickenErrsasrc,
                                chickenErrsbFlg:'block',
                            })
                        }
                    },2000)
                    clearTimeout(this.state.t2)
                },10000)
            }
        },20)
        
    }
    componentDidUpdate(){
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearInterval(this.state.chickent)
        clearTimeout(this.state.t2)
        this.setState = (state, callback) => {
        return
        }
    }
    pageDown() {
        // hashHistory.replace("/Page2")
    }
    click(type){
        if(this.state.clickone && window.clickTip==1){
            clearInterval(this.state.chickent)
            clearTimeout(this.state.t2)
            window.clickTip = 0;
            if(type === 'A' && this.state.answer == 'A'){
                window.JAMS_Answer(true)
                window.clickTip = 0
                this.setState({
                    clickone:false,
                    audioUrl:require('../Qaudio/true.mp3'),
                    raduioflg:true,
                    pumAclass:'chickenBoxa chickensuma'
                })
                setTimeout(() => {
                    this.setState({
                        audioUrl:require('./images/audio/Great.mp3'),
                            raduioflg:true,
                        chicken:'none',
                        chickenflg:'block',
                        chickensrc:require("./images/chicken/success.gif")
                    })
                }, 1000);
                
            }else if(type === 'B' && this.state.answer == 'B'){
                window.JAMS_Answer(true)
                window.clickTip = 0
                this.setState({
                    clickone:false,
                    audioUrl:require('../Qaudio/true.mp3'),
                    raduioflg:true,
                    pumBclass:'chickenBoxb chickensumb'

                })
                setTimeout(() => {
                    this.setState({
                        audioUrl:require('./images/audio/Great.mp3'),
                        raduioflg:true,
                        chicken:'none',
                        chickenflg:'block',
                        chickensrc:require("./images/chicken/success.gif")
                    })
                    
                }, 1000);
                
            }else{
                window.JAMS_Answer(false)
                window.clickTip = 0
                this.setState({
                    clickone:false,
                    audioUrl:require('../Qaudio/false.mp3'),
                    raduioflg:true,
                })
                setTimeout(() => {
                    if(type === 'A'){
                        this.setState({
                            clickone:false,
                            audioUrl:require('./images/audio/error.mp3'),
                            raduioflg:true,
                            chicken:'none',
                            chickenerrflg:'block',
                            chickenErrsaClass:'chickenErrsa chickenrunright',
                            aerror:'aerror chickenrunright',
                            chickenErrsasrc:require("./images/chicken/errors.gif"),
                            chickenErrsaFlg:'block',
                        })
                    }else if(type === 'B'){
                        this.setState({
                            clickone:false,
                            audioUrl:require('./images/audio/error.mp3'),
                            raduioflg:true,
                            chicken:'none',
                            chickenerrflg:'block',
                            chickenErrsbClass:'chickenErrsb chickenrunleft',
                            berror:'berror chickenrunleft',
                            chickenErrsasrc:require("./images/chicken/errors.gif"),
                            chickenErrsbFlg:'block',
                        })
                    }
                }, 2000);      
            }
        }
    }
    render() {
        const {audioUrl,sentenceAtip,sentenceBtip,sentenceA,sentenceB,raduioflg,chickenflg,chickensrc,pumAclass,chicken,pumBclass,chickenerrflg,chickenErrsaClass,chickenErrsasrc,chickenErrsbClass,chickenErrsaFlg,chickenErrsbFlg,yanshiShow,yanshisrc,data,aerror,berror} = this.state
        return (
            <div className="bgbox" >
                <img className="dollyanshi" style={{display:yanshiShow}} src={yanshisrc} alt=""/>
                <img className="bg"  src={require("./images/chicken/bg.jpg")} alt="" />
                
                <div className={pumAclass} style={{display:chicken}} onClick={()=>this.click('A')}>
                    <img className="chickenBga" src={require("./images/chicken/selecta.png")} alt="" />
                    <p className="chickenFont">{sentenceA}</p>
                </div>
                
                <div className={pumBclass} style={{display:chicken}} onClick={()=>this.click('B')}>
                    <img className="chickenBgb" src={require("./images/chicken/selectb.png")} alt="" />
                    <p className="chickenFont">{sentenceB}</p>
                </div>

                <div className="chickenselectBox" style={{display:chicken}}>
                    <img className="chickenBgb" src={require("./images/chicken/select.png")} alt="" />
                </div>

                <div className="chickenworkboxa" style={{display:chicken}}>
                    <img className="workbg" src={require("./images/chicken/work1.png")} alt="" />
                    <p className="workFont">{sentenceAtip}</p>
                </div>

                <div className="chickenworkboxb " style={{display:chicken}}>
                    <img className="workbg" src={require("./images/chicken/work2.png")} alt="" />
                    <p className="workFont">{sentenceBtip}</p>
                </div>

                <div className="chickenSucbox" style={{display:chickenflg}}>
                    {/* <img className="chickenSuc" src={chickensrc} /> */}
                    <GifPlayer className="chickenSuc" gif={chickensrc} autoplay="true" />
                    <p className="chickenTip">{ data.pumkinSucsentence}</p>
                </div>

                <div className="chickenErrbox" style={{display:chickenerrflg}}>
                    <img className="chickenErrma" src={require("./images/chicken/errorma.gif")} alt="" />
                    <img className="chickenErrba" src={require("./images/chicken/errorba.gif")} alt="" />
                    <div className="chickenselectBox">
                        <img className="chickenBgb" src={require("./images/chicken/select.png")} alt="" />
                    </div>
                    <img className={chickenErrsaClass} style={{display:chickenErrsaFlg}} src={chickenErrsasrc} alt="" />
                    <div className={aerror}><p>{ data.pumkinSucsentence}</p></div>
                    <img className={chickenErrsbClass} style={{display:chickenErrsbFlg}} src={chickenErrsasrc} alt="" />
                    <div className={berror}><p>{ data.pumkinSucsentence}</p></div>
                </div>

                

                <audio src={audioUrl} autoPlay={raduioflg?true:false} >
                      <track kind="captions" />
                      您的浏览器不支持 audio 元素。
                </audio>
            </div>
        )
    }
}