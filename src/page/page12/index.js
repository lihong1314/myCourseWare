import React, { Component } from 'react';
import GifPlayer from 'react-gif-player';
import './css/index.css';
window.clickTip = 0
export default class Page7 extends Component {
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        this.state = {
            index:index,
            data: window.data[index],
            answer: window.data[index].answer,
            sentenceAtip:window.data[index].sentenceAtip,
            sentenceBtip:window.data[index].sentenceBtip,
            sentenceA:window.data[index].sentenceA,
            sentenceB:window.data[index].sentenceB,
            clickone:true,
            audioUrl:null,
            raduioflg:false,
            pumpkinflg:'none',
            pumpkinsrc:'',
            pumAclass:'pumpkinBoxa',
            pumBclass:'pumpkinBoxb',
            pumpkin:'block',
            pumkinSucsentenceflg:'none',
            pumkinSucsentence:'',
            pumpkint:0,
            t2:0,
            yanshiShow:'none',
            yanshisrc:'',
            pumpkinerrbox:'none'
        }
    }
    componentDidMount() {
        this.state.pumpkint = setInterval(()=>{
            if(window.clickTip == 1){
                clearInterval(this.state.pumpkint)
                this.state.t2 = setTimeout(()=>{
                    window.JAMS_Answer(false)
                    window.clickTip = 0
                    this.setState({
                        clickone:false,
                        audioUrl:require('../Qaudio/false.mp3'),
                        raduioflg:true
                    })
                    setTimeout(() => {
                        window.clickTip = 0
                        this.setState({
                            clickone:false,
                            audioUrl:require('./images/audio/error.mp3'),
                            raduioflg:true,
                            pumpkin:'none',
                            pumpkinflg:'block',
                            pumpkinsrc:window.data[this.state.index].pumpkinsrc[1]
                        })
                        setTimeout(()=>{
                            this.setState({
                                pumpkinerrbox:'block',
                            })
                        },1500)
                    }, 2000);
                    clearTimeout(this.state.t2)
                },10000)
            }
        },20)
        
    }
    componentDidUpdate(){
    }
   
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearInterval(this.state.pumpkint)
        clearTimeout(this.state.t2)
    }
    pageDown() {
        // hashHistory.replace("/Page2")
    }
    click(type){
        
        if(this.state.clickone && window.clickTip==1){
            clearInterval(this.state.pumpkint)
            clearTimeout(this.state.t2)
            window.clickTip = 0
            if(type === 'A' && this.state.answer == 'A'){
                window.JAMS_Answer(true)
                window.clickTip = 0
                this.setState({
                    clickone:false,
                    audioUrl:require('../Qaudio/true.mp3'),
                    raduioflg:true,
                    pumAclass:'pumpkinBoxa pumpkinsuma'
                })
                setTimeout(()=>{
                    this.setState({
                        pumpkin:'none',
                        pumpkinflg:'block',
                        pumpkinsrc:require("./images/pumpkin/success.gif"),
                        audioUrl:require('./images/audio/Great.mp3'),
                        raduioflg:true,
                    })
                },1600)
                setTimeout(()=>{
                    this.setState({
                        pumkinSucsentenceflg:'block',
                        pumkinSucsentence:window.data[this.state.index].pumkinSucsentence
                    })
                },2200)
            }else if(type === 'B' && this.state.answer == 'B'){
                window.JAMS_Answer(true)
                window.clickTip = 0
                this.setState({
                    clickone:false,
                    audioUrl:require('../Qaudio/true.mp3'),
                    raduioflg:true,
                    pumBclass:'pumpkinBoxb pumpkinsumb'
                })
                setTimeout(()=>{
                    this.setState({
                        pumpkin:'none',
                        pumpkinflg:'block',
                        pumpkinsrc:require("./images/pumpkin/success.gif"),
                        audioUrl:require('./images/audio/Great.mp3'),
                        raduioflg:true,
                    })
                },1600)
                setTimeout(()=>{
                    this.setState({
                        pumkinSucsentenceflg:'block',
                        pumkinSucsentence:window.data[this.state.index].pumkinSucsentence,
                    })
                },2200)
            }else{
                window.JAMS_Answer(false)
                window.clickTip = 0
                this.setState({
                    clickone:false,
                    audioUrl:require('../Qaudio/false.mp3'),
                    raduioflg:true
                })
                setTimeout(() => {
                    this.setState({
                        clickone:false,
                        audioUrl:require('./images/audio/error.mp3'),
                        raduioflg:true,
                        pumpkin:'none',
                        pumpkinflg:'block',
                        pumpkinsrc:require("./images/pumpkin/error.gif")
                    })
                    setTimeout(()=>{
                        this.setState({
                            pumpkinerrbox:'block',
                        })
                    },1500)
                }, 2000);
            } 
        }
    }
    render() {
        const {audioUrl,sentenceAtip,sentenceBtip,sentenceA,sentenceB,raduioflg,pumpkinflg,pumpkinsrc,pumAclass,pumpkin,pumBclass,pumkinSucsentenceflg,pumkinSucsentence,yanshiShow,yanshisrc,data,pumpkinerrbox} = this.state
        return (
            <div className="bgbox" >
                <img className="dollyanshi" style={{display:yanshiShow}} src={yanshisrc} alt=""/>
                <img className="bg"  src={require("./images/pumpkin/bg.png")} alt="" />
                
                <div className={pumAclass} style={{display:pumpkin}} onClick={()=>this.click('A')}>
                    <img className="pumpkinBga" src={require("./images/pumpkin/selecta.png")} alt="" />
                    <p className="pumpkinFont">{sentenceA}</p>
                </div>
                
                <div className={pumBclass} style={{display:pumpkin}} onClick={()=>this.click('B')}>
                    <img className="pumpkinBgb" src={require("./images/pumpkin/selectb.png")} alt="" />
                    <p className="pumpkinFont">{sentenceB}</p>
                </div>

                <div className="selectBox" style={{display:pumpkin}}>
                    <img className="pumpkinBgb" src={require("./images/pumpkin/select.png")} alt="" />
                    
                </div>

                <div className="workboxa" style={{display:pumpkin}}>
                    <img className="workbg" src={require("./images/pumpkin/work.png")} alt="" />
                    <p className="workFont">{sentenceAtip}</p>
                </div>

                <div className="workboxb" style={{display:pumpkin}}>
                    <img className="workbg" src={require("./images/pumpkin/work.png")} alt="" />
                    <p className="workFont">{sentenceBtip}</p>
                </div>
                <GifPlayer className="pumpkinSuc" style={{pumpkinflg}} gif={pumpkinsrc} autoplay="true" />
                {/* <img className="pumpkinSuc" style={{pumpkinflg}} src={pumpkinsrc} /> */}
                <p className="pumkinSucsentence" style={{pumkinSucsentenceflg}}>{pumkinSucsentence}</p>
                <div className="pumpkinerrbox" style={{display:pumpkinerrbox}}>
                    <div className="pumkinerror down">
                        <img src={require("./images/pumpkin/errorbox.png")} alt=""/>
                        <p className="word">{data.pumkinSucsentence}</p>
                    </div>
                </div>
                <audio src={audioUrl} autoPlay={raduioflg?true:false} >
                      <track kind="captions" />
                      您的浏览器不支持 audio 元素。
                </audio>
            </div>
        )
    }
    
 
}
