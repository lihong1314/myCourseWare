import React, { Component } from 'react';

export default class Page5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sentenceArr: [],
            sentence: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].sentence,
            wordIndex:1,
            id: this.props.location.search.substring(this.props.location.search.indexOf("=") + 1),
            data:window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
            t:null
        }
    }
    componentDidMount() {
        this.setState({
            sentenceArr: this.state.sentence.split(" ")
        })
        this.state.t=setInterval(()=>{
            this.setState({
                wordIndex:this.state.wordIndex+1
            },()=>{
                if(this.state.wordIndex>=this.state.sentenceArr.length+1){
                    clearInterval(this.state.t)
                    this.setState({
                        wordIndex:0
                    })
                }
            })
            
        },this.state.data.times)
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearTimeout(this.state.t)
        this.setState = (state, callback) => {
        return
        }
    }
    render() {
        let { sentenceArr,wordIndex,data } = this.state
        return (
            <div className="WordB">
                <img className="FullScreen" src={data.bgImg} alt="" />
                <div className="sentence">
                    {
                        sentenceArr.map((item, index) => {
                            return (<span className={index<data.sentenceTip[wordIndex]&&index>=data.sentenceTip[wordIndex-1]?"heightLight":""} key={index}>{item}</span>)
                        })
                    }
                </div>
            </div>
        )
    }
}
