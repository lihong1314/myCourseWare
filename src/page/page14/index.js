import React, { Component } from 'react';
window.clickTip = 0
export default class Page14 extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)?this.props.location.search.substring(this.props.location.search.indexOf("=") + 1):0]
    }
  }
  render() {
    let {data}=this.state
    return (
      <div className="first" >
        <img src={data.bg} alt="" />
        <div className="gifsP">
          <img className="gifs gifOne" src={data.gif[0]} alt="" />
          <img className="gifs gifTwo" src={data.gif[1]} alt="" />
          <img className="gifs gifThree" src={data.gif[2]} alt="" />
          <img className="gifs gifFour" src={data.gif[3]} alt="" />
          <img className="gifs gifFive" src={data.gif[4]} alt="" />
          <img className="gifs gifSix" src={data.gif[5]} alt="" />
        </div>
      </div>
    )
  }


}
