import React, { Component } from 'react';
import MyBg from "../myBg/index.js";
export default class Page5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sentenceArr: [],
            sentence: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].sentence,
            wordIndex: 0,
            id: this.props.location.search.substring(this.props.location.search.indexOf("=") + 1),
            data: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
            t: null,
            t2: null
        }
    }
    componentDidMount() {
        this.setState({
            sentenceArr: this.state.sentence.split(" ")
        })
        this.state.t2 = setTimeout(() => {
            this.state.data.times.map((item, index) => {
                let aa = `t${index}`;
                this.setState({
                    [aa]: 0
                })
                this.state[aa] = setTimeout(() => {
                    this.setState({
                        wordIndex: this.state.wordIndex + 1
                    }, () => {
                        if (this.state.wordIndex >= this.state.sentenceArr.length + 1) {
                            clearInterval(this.state.t)
                            this.setState({
                                wordIndex: 0
                            })
                        }
                    })
                }, item)
            })
        }, this.state.data.TimeOut);
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearInterval(this.state.t)
        this.state.data.times.map((item, index) => {
            clearTimeout(this.state[`t${index}`])
        })
        this.setState = (state, callback) => {
            return
        }
    }
    render() {
        let { sentenceArr, wordIndex, data } = this.state
        return (
            <div className="WordB">
                <MyBg />
                <img className="mysentencebox" src={data.sentencebox} alt="" />
                <div className="sentence">
                    {
                        sentenceArr.map((item, index) => {
                            return (<span className={index < data.sentenceTip[wordIndex] && index >= data.sentenceTip[wordIndex - 1] ? "heightLight" : ""} key={index}>{item}</span>)
                        })
                    }
                </div>
            </div>
        )
    }
}