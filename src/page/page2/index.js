import React, { Component } from 'react';

export default class Page2 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.search.substring(this.props.location.search.indexOf("=") + 1),
            data:window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
            videoType:0
        }
    }
    componentDidMount(){
        this.refs.audio.addEventListener("canplay",()=>{
            this.setState({
                videoType:1
            })
        })
    }
    render() {
        let {data,videoType}=this.state
        return (
            <div>
                <img src={data.videoPoster} className={videoType==0?"FullScreen":"hide"} style={{"position":"absolute","zIndex":"2"}}  alt=""/>
                <video ref="audio" className="FullScreen" autoPlay muted src={data.video} webkit-playsinline="true" playsinline="true" x5-video-player-type="true"  poster={data.videoPoster}></video>
            </div>
        )
    }
}
