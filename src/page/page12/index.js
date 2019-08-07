import React, { Component } from 'react';
import './css/index.css';
// let pumpkint=0
// let t2 = 0 ;
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
        }
    }
    componentDidMount() {
        this.state.pumpkint = setInterval(()=>{
            if(window.clickTip == 1){
                // if(localStorage.getItem("sentencegame1")==1){
                //     localStorage.setItem("sentencegame1",0)
                //     window.yanshiFn(this,require("./images/pumpkin/yanshi.gif"))
                // }
                clearInterval(this.state.pumpkint)
                this.state.t2 = setTimeout(()=>{
                    window.clickTip=0
                    window.JAMS_Answer(false)
                    this.setState({
                        clickone:false,
                        audioUrl:require('./images/audio/error.mp3'),
                        raduioflg:true,
                        pumpkin:'none',
                        pumpkinflg:'block',
                        pumpkinsrc:window.data[this.state.index].pumpkinsrc[1]
                    })
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
        this.setState = (state, callback) => {
        return
        }
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
                this.setState({
                    clickone:false,
                    audioUrl:require('./images/audio/Great.mp3'),
                    raduioflg:true,
                    pumAclass:'pumpkinBoxa pumpkinsuma'
                })
                setTimeout(()=>{
                    this.setState({
                        pumpkin:'none',
                        pumpkinflg:'block',
                        pumpkinsrc:window.data[this.state.index].pumpkinsrc[0],
                    })
                },800)
                setTimeout(()=>{
                    this.setState({
                        pumkinSucsentenceflg:'block',
                        pumkinSucsentence:window.data[this.state.index].pumkinSucsentence
                    })
                },1400)
            }else if(type === 'B' && this.state.answer == 'B'){
                window.JAMS_Answer(true)
                this.setState({
                    clickone:false,
                    audioUrl:require('./images/audio/Great.mp3'),
                    raduioflg:true,
                    pumBclass:'pumpkinBoxb pumpkinsumb'
                })
                setTimeout(()=>{
                    this.setState({
                        pumpkin:'none',
                        pumpkinflg:'block',
                        pumpkinsrc:window.data[this.state.index].pumpkinsrc[0],
                    })
                },800)
                setTimeout(()=>{
                    this.setState({
                        pumkinSucsentenceflg:'block',
                        pumkinSucsentence:window.data[this.state.index].pumkinSucsentence,
                    })
                },1400)
            }else{
                window.JAMS_Answer(false)
                this.setState({
                    clickone:false,
                    audioUrl:require('./images/audio/error.mp3'),
                    raduioflg:true,
                    pumpkin:'none',
                    pumpkinflg:'block',
                    pumpkinsrc:window.data[this.state.index].pumpkinsrc[1]
                })
                
            }
            
        }
       
    }
    render() {
        const {audioUrl,sentenceAtip,sentenceBtip,sentenceA,sentenceB,raduioflg,pumpkinflg,pumpkinsrc,pumAclass,pumpkin,pumBclass,pumkinSucsentenceflg,pumkinSucsentence,yanshiShow,yanshisrc} = this.state
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

                <img className="pumpkinSuc" style={{pumpkinflg}} src={pumpkinsrc} />
                <p className="pumkinSucsentence" style={{pumkinSucsentenceflg}}>{pumkinSucsentence}</p>

                <audio src={audioUrl} autoPlay={raduioflg?true:false} >
                      <track kind="captions" />
                      您的浏览器不支持 audio 元素。
                </audio>
            </div>
        )
    }
    
 
}
