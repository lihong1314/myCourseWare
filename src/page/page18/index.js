import React, { Component } from 'react';
import GifPlayer from 'react-gif-player';
import './css/index.css';
let num = 10
window.clickTip = 0
export default class Page18 extends Component {
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        this.state = {
            index,
            data: window.data[index],
            answer: window.data[index].answer,
            audioUrl: null,
            raduioflg: false,
            yanshiShow: 'none',
            yanshisrc: '',
            resetX: 0,
            resetY: 0,

            robot1: false,
            robot2: false,
            robot3: false,

            robotArr: [],
            changeNum: 0,
            closedoor:false,
            startflg:true,
            resultflg:null,
            chickent:null,
            t2:null,
            newarr:[-1,-1,-1],//放拖完后的顺序
            truearr:[0,1,2] //正确答案的数组
        }
    }
    componentDidMount() {
        this.state.chickent = setInterval(()=>{
            if(window.clickTip == 1){
                // if(localStorage.getItem("sentencegame3")==1){
                //     localStorage.setItem("sentencegame3",0)
                //     window.yanshiFn(this,require("./images/yanshi.gif"))               
                // }
                clearInterval(this.state.chickent)
                this.state.t2 = setTimeout(()=>{
                    window.clickTip = 0
                    window.JAMS_Answer(false)
                    this.setState({
                        closedoor:true,
                    })
                    setTimeout(()=>{
                        this.setState({
                            startflg:false,
                            resultflg:2,
                            sentencetip:this.state.data.sentencetip.join(' ')+'.',
                            audioUrl:require('./images/audio/error.mp3'),
                            raduioflg: true,
                        })
                        this.refs.audio.play()
                    },1000)
                    
                    clearTimeout(this.state.t2)
                },10000)
            }
        },20)

    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearInterval(this.state.chickent)
        clearTimeout(this.state.t2)
        this.setState = (state, callback) => {
            return
        }
    }
    changeArr(arr, k, j, FN) {
        let c = arr[k];
        arr[k] = arr[j];
        arr[j] = c;
        this.setState({
            robotArr: arr
        }, FN(c))
    }
    changePosition(num) {
        this.changeArr(this.state.robotArr, num, this.state.changeNum, (c) => {
            this.refs['ele' + c].style.left = this.state.resetX + "px"
            this.refs['ele' + c].style.top = this.state.resetY + "px"
            this.refs['ele' + c].style.transition = ".5s"
        })
    }
    TouchStart(index, event) {
        if (this.state.robotArr.length < 3 && window.clickTip == 1) {
            clearTimeout(this.state.t2)
            this.state.robotArr.map((item, value) => {
                if (item == index) {
                    this.setState({
                        changeNum: value
                    })
                }
            });
            let target = event.target.parentNode;
            num += 1
            target.style.zIndex = num
            this.setState({
                resetX: target.offsetLeft,
                resetY: target.offsetTop
            })
        }
    }
    TouchMove(event) {
        if (this.state.robotArr.length < 3 && window.clickTip == 1) {
            clearTimeout(this.state.t2)
            let target = event.target.parentNode
            target.style.transition = "0s"
            target.style.left = (event.changedTouches[0].pageX - (target.clientWidth / 2)) + 'px'
            target.style.top = (event.changedTouches[0].pageY - (target.clientHeight / 2) - this.refs.robot.offsetTop) + 'px'
        }
    }
    TouchEnd(index, event) {
        if (this.state.robotArr.length < 3 && window.clickTip == 1) {
            clearTimeout(this.state.t2)
            let position = event.changedTouches[0]
            let target = event.target.parentNode
            let robotWidth = this.refs.robot.clientWidth / 100

            if (position.pageX >= robotWidth * 13 &&
                position.pageX <= robotWidth * 13 + target.clientWidth &&
                position.pageY - this.refs.robot.offsetTop >= robotWidth * 26.936 &&
                position.pageY - this.refs.robot.offsetTop <= robotWidth * 26.936 + target.clientHeight
            ) { //第一个
                
                if (this.state.robot1 == false) {
                    this.state.robotArr.push(index)
                    let list = this.state.newarr;
                    list[0] = index
                    this.setState({
                        robot1: true,
                        robotArr: this.state.robotArr,
                        newarr:list
                    })
                    target.style.left = "13vw"
                    target.style.top = "26.935vw"
                    target.style.transition = ".5s"
                } else {
                    // this.changePosition(0)
                    target.style.left = this.state.resetX + "px"
                    target.style.top = this.state.resetY + "px"
                    target.style.transition = ".5s"
                }
            }
            else if (position.pageX >= robotWidth * 39 &&
                position.pageX <= robotWidth * 39 + target.clientWidth &&
                position.pageY - this.refs.robot.offsetTop >= robotWidth * 26.936 &&
                position.pageY - this.refs.robot.offsetTop <= robotWidth * 26.936 + target.clientHeight) {
                
                if (this.state.robot2 == false) {
                    this.state.robotArr.push(index)
                    let list = this.state.newarr;
                    list[1] = index
                    this.setState({
                        robot2: true,
                        robotArr: this.state.robotArr,
                        newarr:list
                    })
                    target.style.left = "39vw"
                    target.style.top = "26.935vw"
                    target.style.transition = ".5s"
                } else {
                    // this.changePosition(1)
                    target.style.left = this.state.resetX + "px"
                    target.style.top = this.state.resetY + "px"
                    target.style.transition = ".5s"
                }

            } else if (position.pageX >= robotWidth * 66 &&
                position.pageX <= robotWidth * 66 + target.clientWidth &&
                position.pageY - this.refs.robot.offsetTop >= robotWidth * 26.936 &&
                position.pageY - this.refs.robot.offsetTop <= robotWidth * 26.936 + target.clientHeight) {
                
                if (this.state.robot3 == false) {
                    this.state.robotArr.push(index)
                    let list = this.state.newarr;
                    list[2] = index
                    this.setState({
                        robot3: true,
                        robotArr: this.state.robotArr,
                        newarr:list
                    })
                    target.style.left = "66vw"
                    target.style.top = "26.935vw"
                    target.style.transition = ".5s"
                } else {
                    // this.changePosition(2)
                    target.style.left = this.state.resetX + "px"
                    target.style.top = this.state.resetY + "px"
                    target.style.transition = ".5s"
                }
            } else {
                target.style.left = this.state.resetX + "px"
                target.style.top = this.state.resetY + "px"
                target.style.transition = ".5s"
            }
        }
        if(this.state.robotArr.length === 3 ){//答完题后的变化
            window.clickTip = 0
            this.setState({
                closedoor:true,
            })
            let result = this.scalarArrayEquals(this.state.truearr,this.state.newarr)
            if(result){
                window.JAMS_Answer(true)
            }else{
                window.JAMS_Answer(false)
            }
            
            setTimeout(()=>{
                this.setState({
                    startflg:false,
                    resultflg:result?1:2,
                    sentencetip:this.state.data.sentencetip.join(' ')+'.',
                    audioUrl: result?require('./images/audio/Great.mp3'):require('./images/audio/error.mp3'),
                    raduioflg: true,
                })
                this.refs.audio.play()
            },1000)
        }

    }
    scalarArrayEquals(array1,array2) {//比较两个数组的值是否相等，包括顺序
        return array1.length==array2.length && array1.every(function(v,i) { return v === array2[i]});
      }
    render() {
        const { audioUrl, raduioflg, yanshiShow, yanshisrc, data,closedoor,sentencetip,startflg,resultflg } = this.state
        return (
            <div className="bgbox robot" ref="robot">
                <img className="dollyanshi" style={{ display: yanshiShow }} src={yanshisrc} alt="" />
                <img className="robotBg" src={require("./images/bg.png")} alt="" />
                <div className="startbox" style={{display:startflg?"block":"none"}}>
                    <img className="rope rope1" src={require("./images/offtherope.png")} alt="" />
                    <img className="rope rope2" src={require("./images/offtherope.png")} alt="" />
                    <img className="rope rope3" src={require("./images/offtherope.png")} alt="" />
                    {
                        data.sentencetip.map((item, index) => {
                            return (
                                <div onTouchStart={this.TouchStart.bind(this, index)} onTouchMove={this.TouchMove.bind(this)} onTouchEnd={this.TouchEnd.bind(this, index)} key={index} className={`robotbgbox robotbgbox${index + 1}`} ref={`ele${index}`} >
                                    <img className="robotbg" src={require("./images/robotbg.png")} alt="" />
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }
                    <div className="dragbox dragbox1">
                    <img src={require("./images/dragbg.png")} alt="" />
                    </div>
                    <div className="dragbox dragbox2">
                        <img src={require("./images/dragbg.png")} alt="" />
                    </div>
                    <div className="dragbox dragbox3">
                        <img src={require("./images/dragbg.png")} alt="" />
                    </div>
                </div>
                

                <img className="stands stands1" src={require("./images/stands.png")} alt="" />
                <img className="stands stands2" src={require("./images/stands.png")} alt="" />
                <img className="stands stands3" src={require("./images/stands.png")} alt="" />
                <img className="tiao" src={require("./images/tiao.png")} alt="" />

                

                <div className="doorbox" style={{display:closedoor?"block":"none"}}>
                    <img className={closedoor == true?"doorR closedoorr":"doorR"} src={require("./images/door.png")} alt=""/>
                    <img className={closedoor == true?"doorL closedoorl":"doorL"} src={require("./images/door.png")} alt=""/>
                    <img className="juzi" style={{display:startflg?'none':'block'}} src={require("./images/juzi.png")} alt=""/>
                    <p  style={{display:startflg?'none':'block'}} className="juziword">{sentencetip}</p>
                    <GifPlayer className="truecl" gif={resultflg == 1 && resultflg?require("./images/true.gif"):resultflg == 2 && resultflg?require("./images/false.gif"):''} autoplay="true" />
                </div>

                <audio src={audioUrl} ref="audio" autoPlay={raduioflg ? true : false} >
                    <track kind="captions" />
                    您的浏览器不支持 audio 元素。
                </audio>
            </div>
        )
    }


}
