import React, { Component } from 'react';
require("./css/index.css")

export default class Page14 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answerType: 0,
      answer: -1,
      TrueAnswer: "A",
      trueFalse: 0,
      answerNum: 0,
      answer1: -1,
      answer2: -1,
      answer3: -1,
      answer4: -1,
      answer5: -1,
      answer6: -1,
      doorType1: 0,
      doorType2: 0,
      doorType3: 0,
      doorType4: 0,
      doorType5: 0,
      doorType6: 0,
      A: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].T1A,
      B: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)].T1B,
      t: null,
      t1: null,
      data: window.data[this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)],
      tip:0,
      audioUrl:null
    }
  }

  rotateFn(domS, deg) {
    domS.style = `transform: rotateZ(${deg * (this.state.answerNum)}deg);transition:1.5s Linear`
  }

  answerFn(ans) {
    if (this.state.answerNum == 0) {
      if (ans == 0) {
        this.setState({
          answer1: 0
        })
      } else if (ans == 1) {
        this.setState({
          answer1: 1
        })
      }
    }
    if (this.state.answerNum == 1) {
      if (ans == 0) {
        this.setState({
          answer2: 0
        })
      } else if (ans == 1) {
        this.setState({
          answer2: 1
        })
      }
    }
    if (this.state.answerNum == 2) {
      if (ans == 0) {
        this.setState({
          answer3: 0
        })
      } else if (ans == 1) {
        this.setState({
          answer3: 1
        })
      }
    }
    if (this.state.answerNum == 3) {
      if (ans == 0) {
        this.setState({
          answer4: 0
        })
      } else if (ans == 1) {
        this.setState({
          answer4: 1
        })
      }
    }
    if (this.state.answerNum == 4) {
      if (ans == 0) {
        this.setState({
          answer5: 0
        })
      } else if (ans == 1) {
        this.setState({
          answer5: 1
        })
      }
    }
    if (this.state.answerNum == 5) {
      if (ans == 0) {
        this.setState({
          answer6: 0
        })
      } else if (ans == 1) {
        this.setState({
          answer6: 1
        })
      }
    }

  }

  doorFn(type) {
    if (this.state.answerNum == 0) {
      this.setState({
        doorType1: type
      })
    }
    if (this.state.answerNum == 1) {
      this.setState({
        doorType2: type
      })
    }
    if (this.state.answerNum == 2) {
      this.setState({
        doorType3: type
      })
    }
    if (this.state.answerNum == 3) {
      this.setState({
        doorType4: type
      })
    }
    if (this.state.answerNum == 4) {
      this.setState({
        doorType5: type
      })
    }
    if (this.state.answerNum == 5) {
      this.setState({
        doorType6: type
      })
    }

  }

  componentDidMount() {
    this.state.t = setInterval(() => {
      if (window.clickTip == 1) {
        window.clickTip =0
        this.setState({
          tip:1
        })
        this.click();
      }
    }, 20)
  }
  click() {
    this.setState({
      answerType: 1,
      TrueAnswer:this.state.data.answerArr[this.state.answerNum]
    })
    this.state.t1 = setTimeout(() => {
      window.JAMS_Answer(false)
      if (this.state.TrueAnswer === "A") {
        this.changeAnswer("B")
      } else if (this.state.TrueAnswer === "B") {
        this.changeAnswer("A")
      }
      clearTimeout(this.state.t1)
    }, 10000)
  }
  changeAnswer(type) {
    if (this.state.tip == 1) {
      clearTimeout(this.state.t1)
      this.setState({
        answerType: 1,
        tip:0
      })
      if (type === "A" && this.state.TrueAnswer === "A") {
        window.JAMS_Answer(true)
        this.setState({
          answer: 1,
          audioUrl:require('./images/true.mp3')
        },()=>{
          this.refs.audio.play()
        })
        setTimeout(() => {
          this.setState({
            trueFalse: 1
          })
          this.doorFn(1)
        }, 2000)  
      } else if (type === "B" && this.state.TrueAnswer === "B") {
        window.JAMS_Answer(true)
        this.setState({
          answer: 1,
          audioUrl:require('./images/true.mp3')
        },()=>{
          this.refs.audio.play()
        })
        setTimeout(() => {
          this.setState({
            trueFalse: 1
          })
          this.doorFn(1)
        }, 2000)
      } else {
        window.JAMS_Answer(false)
        this.setState({
          answer: 0,
          audioUrl:require('./images/false.mp3')
        },()=>{
          this.refs.audio.play()
        })
      }
      setTimeout(() => {
        this.answerFn(this.state.answer)
        this.doorFn(0)
        this.setState({
          answerNum: this.state.answerNum + 1,
          trueFalse: 0,
          answer: -1,
        }, () => {
          if (this.state.answerNum == 1) {
            this.setState({
              A: this.state.data.T2A,
              B: this.state.data.T2B,
            })
          }
          if (this.state.answerNum == 2) {
            this.setState({
              A: this.state.data.T3A,
              B: this.state.data.T3B,
            })
          }
          if (this.state.answerNum == 3) {
            this.setState({
              A: this.state.data.T4A,
              B: this.state.data.T4B,
            })
          }
          if (this.state.answerNum == 4) {
            this.setState({
              A: this.state.data.T5A,
              B: this.state.data.T5B,
            })
          }
          if (this.state.answerNum == 5) {
            this.setState({
              A: this.state.data.T6A,
              B: this.state.data.T6B,
            })
          }
          if (this.state.answerNum == 6) {
            clearInterval(this.state.t)
            this.setState({
              answerType: 0
            })
          }
        })
        this.rotateFn(this.refs.gu, 60)
        this.rotateFn(this.refs.lun, 60)
        this.rotateFn(this.refs.greenS, -60)
        this.rotateFn(this.refs.orangeS, -60)
        this.rotateFn(this.refs.pinkS, -60)
        this.rotateFn(this.refs.greenT, -60)
        this.rotateFn(this.refs.orangeT, -60)
        this.rotateFn(this.refs.pinkT, -60)
        // clearTimeout(this.state.t1)
      }, 3500)
    }
  }
  render() {
    let { A, B, answer, TrueAnswer,
      trueFalse, doorType1, doorType2, doorType3,
      doorType4, doorType5, doorType6, answerType,
      answer1, answer2, answer3, answer4, answer5, answer6 ,audioUrl} = this.state
    return (
      <div className="FerrisWheel">
        <div className={answerType == 1 ? "hide" : ""}>
          <img className="bg" src={require("./images/bg.jpg")} alt="" />
          <img className="gu" src={require("./images/gu.png")} alt="" />
          <img className="xin" src={require("./images/xin.png")} alt="" />
          <div className="FerrisP">
            <img className="Ferris FerrisOne" src={answer1 == 1 ? require("./images/green2.png") : require("./images/greenAll.png")} alt="" />
            <img className="Ferris FerrisTwo" src={answer2 == 1 ? require("./images/orange2.png") : require("./images/orangeAll.png")} alt="" />
            <img className="Ferris FerrisThree" src={answer3 == 1 ? require("./images/pink2.png") : require("./images/pinkAll.png")} alt="" />
            <img className="Ferris FerrisFour" src={answer4 == 1 ? require("./images/green2.png") : require("./images/greenAll.png")} alt="" />
            <img className="Ferris FerrisFive" src={answer5 == 1 ? require("./images/orange2.png") : require("./images/orangeAll.png")} alt="" />
            <img className="Ferris FerrisSix" src={answer6 == 1 ? require("./images/pink2.png") : require("./images/pinkAll.png")} alt="" />
          </div>
        </div>
        <div className={answerType == 1 ? "" : "hide"}>
          <img className="bg" src={require("./images/bigBG.jpg")} alt="" />
          <img ref="gu" className="gus" src={require("./images/gu.png")} alt="" />
          <div className={trueFalse == 1 ? "hide" : "guP"}>
            <img className="answerK answerAK" src={require("./images/AK.png")} alt="" />
            <img onClick={this.changeAnswer.bind(this, "A")} className="answerK answerAK" src={A} alt="" />
            <img className="answerK answerBK" src={require("./images/BK.png")} alt="" />
            <img onClick={this.changeAnswer.bind(this, "B")} className="answerK answerBK" src={B} alt="" />
            <img className={answer == 0 ? TrueAnswer === "A" ? "cuo cuoFR" : "cuo cuoFL" : "hide"} src={require("./images/cuo.png")} alt="" />
            <img className={answer == 1 ? TrueAnswer === "B" ? "dui duiFR" : "dui duiFL" : "hide"} src={require("./images/dui.png")} alt="" />
            <img className="zuo" src={require("./images/zuo.png")} alt="" />
          </div>
          <img className={trueFalse == 1 ? "moveA" : "hide"} src={require("./images/move.gif")} alt="" />
          <img className={answer == 0 ? "cry" : "hide"} src={require("./images/cry.gif")} alt="" />
          <div ref="lun" className="lun">
            <div ref="orangeS" className="SS orangeS">
              <img src={answer1 != 1 ? require("./images/orange.png") : require("./images/orange2.png")} alt="" />
              <img src={require("./images/orange1.png")} alt="" />
              <img className={doorType1 == 0 ? "menL" : "hide"} src={require("./images/men.png")} alt="" />
              <img className={doorType1 == 0 ? "menR" : "hide"} src={require("./images/men.png")} alt="" />
            </div>
            <div ref="pinkS" className="SS pinkS">
              <img src={answer2 != 1 ? require("./images/pink.png") : require("./images/pink2.png")} alt="" />
              <img src={require("./images/pink1.png")} alt="" />
              <img className={doorType2 == 0 ? "menL" : "hide"} src={require("./images/men.png")} alt="" />
              <img className={doorType2 == 0 ? "menR" : "hide"} src={require("./images/men.png")} alt="" />
            </div>
            <div ref="greenT" className="SS greenT">
              <img src={answer3 != 1 ? require("./images/green.png") : require("./images/green2.png")} alt="" />
              <img src={require("./images/green1.png")} alt="" />
              <img className={doorType3 == 0 ? "menL" : "hide"} src={require("./images/men.png")} alt="" />
              <img className={doorType3 == 0 ? "menR" : "hide"} src={require("./images/men.png")} alt="" />
            </div>
            <div ref="orangeT" className="SS orangeT">
              <img src={answer4 != 1 ? require("./images/orange.png") : require("./images/orange2.png")} alt="" />
              <img src={require("./images/orange1.png")} alt="" />
              <img className={doorType4 == 0 ? "menL" : "hide"} src={require("./images/men.png")} alt="" />
              <img className={doorType4 == 0 ? "menR" : "hide"} src={require("./images/men.png")} alt="" />
            </div>
            <div ref="pinkT" className="SS pinkT">
              <img src={answer5 != 1 ? require("./images/pink.png") : require("./images/pink2.png")} alt="" />
              <img src={require("./images/pink1.png")} alt="" />
              <img className={doorType5 == 0 ? "menL" : "hide"} src={require("./images/men.png")} alt="" />
              <img className={doorType5 == 0 ? "menR" : "hide"} src={require("./images/men.png")} alt="" />
            </div>
            <div ref="greenS" className="SS greenS">
              <img src={answer6 != 1 ? require("./images/green.png") : require("./images/green2.png")} alt="" />
              <img src={require("./images/green1.png")} alt="" />
              <img className={doorType6 == 0 ? "menL" : "hide"} src={require("./images/men.png")} alt="" />
              <img className={doorType6 == 0 ? "menR" : "hide"} src={require("./images/men.png")} alt="" />
            </div>
          </div>
        </div>
        <audio ref="audio" src={audioUrl}></audio>
      </div>
    )
  }
}
