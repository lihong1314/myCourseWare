import React, { Component } from 'react';

export default class Page0 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // data: 
            // [
            // {
            img: require("./images/A.png"),
            origin: "left top",
            sizePosition: "10vw 10vw 10vw",//宽  X  Y
            Type: "LeftRight",
            degree: 20,//运动幅度
            // }
            // , {
            //     img: require("./images/B.png"),
            //     origin:"left center",
            //     sizePosition:"10vw 40vh 2vh",
            //     Type:"UpDown",
            //     degree:60
            // }
            // , {
            //     img: require("./images/A.png"),
            //     origin:"left bottom",
            //     size:"10vw 15vh",
            //     Type:"LeftRight",
            //     degree:"3"
            // },  {
            //     img: require("./images/A.png"),
            //     origin:"right top",
            //     size:"10vw 15vh",
            //     Type:"UpDown",
            //     degree:"4"
            // }, {
            //     img: require("./images/B.png"),
            //     origin:"right center",
            //     size:"10vw 15vh",
            //     Type:"LeftRight",
            //     degree:"5"
            // }, {
            //     img: require("./images/A.png"),
            //     origin:"right bottom",
            //     size:"10vw 15vh",
            //     Type:"UpDown",
            //     degree:"6"
            // },  {
            //     img: require("./images/A.png"),
            //     origin:"center top",
            //     size:"10vw 15vh",
            //     Type:"LeftRight",
            //     degree:"7"
            // }, {
            //     img: require("./images/B.png"),
            //     origin:"center center",
            //     size:"10vw 15vh",
            //     Type:"UpDown",
            //     degree:"8"
            // }, {
            //     img: require("./images/A.png"),
            //     origin:"center bottom",
            //     size:"10vw 15vh",
            //     Type:"LeftRight",
            //     degree:"9"
            // }
            // ],
            // ,
            classA: 0
        }
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.degree > 0) {
                this.setState({
                    degree: -this.state.degree
                })
            }else{
                this.setState({
                    degree: this.state.degree
                })
            }
        }, 20)
    }
    render() {
        let { data, classA, origin, sizePosition, Type, degree, img } = this.state
        return (
            <div style={{ background: "white", width: "100vw", height: "100vh", position: "relative" }}>

                <img style={
                    {
                        transform: 'rotateZ(' + degree + 'deg) translate(1vw)',
                        transformOrigin: origin,
                        width: sizePosition.split(" ")[0],
                        transition: "1s linear",
                        position: "absolute",
                        left: sizePosition.split(" ")[1],
                        top: sizePosition.split(" ")[2],
                    }
                }
                    src={img} alt="" />

            </div>
        )
    }
}
