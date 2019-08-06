import React, { Component } from 'react';

import './css/index.css';

export default class Page9 extends Component {
    constructor(props) {
        super(props)
        
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        console.log(index)
        this.state = {
            index,
            data: window.data[index],
            answer: window.data[index].answer,
            clickone:true,
            audioUrl:null,
            raduioflg:false,
            selecthidden:'block',
            duileft:'0',
            cuoleft:'0',
            duiflg:'none',
            cuoflg:'none',
            startsrc:'',
            sucflg:'none',
            startflg:'block',
            starturl:require("./images/whack-a-mole/start.png"),
            t:0,
            t1:0,
            yanshiShow:'none',
            yanshisrc:'',
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                selecthidden:'none'
            })
        },4000)
        this.state.t = setInterval(()=>{
            if(window.clickTip == 1){
                // window.yanshiFn(this,require("./images/whack-a-mole/yanshi.gif"))
                clearInterval(this.state.t)
                this.state.t1 = setTimeout(()=>{
                    window.clickTip=0
                    if (this.state.answer !== 'A') {
                        this.setState({
                            clickone:false,
                            audioUrl:require('./images/audio/error.mp3'),
                            raduioflg:true,
                            cuoleft:'22.625vw',
                            cuoflg:'block',
                            starturl:require("./images/whack-a-mole/error.gif"),
                            startflg:'block'
                        })
    
                    } else if (this.state.answer !== 'B') {
                        this.setState({
                            clickone:false,
                            audioUrl:require('./images/audio/error.mp3'),
                            raduioflg:true,
                            cuoleft:'60.625vw',
                            cuoflg:'block',
                            starturl:require("./images/whack-a-mole/error.gif"),
                            startflg:'block'
                        })
                    }
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
    click(type){
        if(this.state.clickone&& window.clickTip==1){
            clearInterval(this.state.t)
            clearTimeout(this.state.t1)
                if(type === 'A' && this.state.answer == 'A'){
                    window.clickTip=0
                    this.setState({
                        clickone:false,
                        audioUrl:require('./images/audio/Great.mp3'),
                        raduioflg:true,
                        duileft:'22.625vw',
                        duiflg:'block',
                        sucflg:'block',
                        startsrc:require("./images/whack-a-mole/success.gif"),
                        startflg:'none'
                    })
                }else if(type === 'B' && this.state.answer == 'B'){
                    window.clickTip=0
                    this.setState({
                        clickone:false,
                        audioUrl:require('./images/audio/Great.mp3'),
                        duileft:'60.625vw',
                        duiflg:'block',
                        raduioflg:true,
                        sucflg:'block',
                        startflg:"none",
                        startsrc:require("./images/whack-a-mole/success.gif"),
                        starturl:''
                    })
                }else{
                    window.clickTip=0
                    if(type === 'A'){
                        this.setState({
                            clickone:false,
                            audioUrl:require('./images/audio/error.mp3'),
                            raduioflg:true,
                            cuoleft:'22.625vw',
                            cuoflg:'block',
                            starturl:require("./images/whack-a-mole/error.gif"),
                            startflg:'block'
                        })

                    }else if(type === 'B'){
                        this.setState({
                            clickone:false,
                            audioUrl:require('./images/audio/error.mp3'),
                            raduioflg:true,
                            cuoleft:'60.625vw',
                            cuoflg:'block',
                            starturl:require("./images/whack-a-mole/error.gif"),
                            startflg:'block'
                        })
                    }
                    
                }
            
        }
       
    }
    render() {
        const {data,audioUrl,raduioflg,selecthidden,duileft,cuoleft,duiflg,cuoflg,startsrc,sucflg,startflg,starturl,yanshiShow,yanshisrc} = this.state
        return (
            <div className="bgbox" >
                 < img className="dollyanshi" style={{display:yanshiShow}} src={yanshisrc} alt=""/>
                <img className="bg" src={require("./images/whack-a-mole/bg.png")} alt="" />
                <img className="game" src={require("./images/whack-a-mole/game.png")} alt="" />
                <img className="selectFour" style={{display:selecthidden}} src={require("./images/whack-a-mole/select.png")} alt="" />
                
                
                <div className='molea' onClick={()=>this.click('A')}>
                    <img className="Sen" src={data.answerA} alt="" />
                </div>
                <div className='moleb' onClick={()=>this.click('B')}>
                    <img className="Sen" src={data.answerB} alt="" />
                </div>

                <div className="molestart">
                    <img className="startimg" style={{dispaly:startflg}} src={starturl} alt="" />
                    <img className="startimgsuc" style={{display:sucflg}} src={startsrc} alt="" />
                </div>
                <img className="moledui" style={{left:duileft,display:duiflg}} src={require("./images/whack-a-mole/dui.png")} alt="" />
                <img className="molecuo" style={{left:cuoleft,display:cuoflg}}  src={require("./images/whack-a-mole/cuo.png")} alt="" />
                <audio src={audioUrl} autoPlay={raduioflg?true:false}></audio>
            </div>
        )
    }
}