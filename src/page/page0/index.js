import React, { Component } from 'react';

export default class Page0 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    img: require("./images/A.png"),
                    origin:"left top"
                }, {
                    img: require("./images/B.png"),
                    origin:"left center"
                }, {
                    img: require("./images/A.png"),
                    origin:"left bottom"
                },  {
                    img: require("./images/A.png"),
                    origin:"right top"
                }, {
                    img: require("./images/B.png"),
                    origin:"right center"
                }, {
                    img: require("./images/A.png"),
                    origin:"right bottom"
                },  {
                    img: require("./images/A.png"),
                    origin:"center top"
                }, {
                    img: require("./images/B.png"),
                    origin:"center center"
                }, {
                    img: require("./images/A.png"),
                    origin:"center bottom"
                }
            ],
            classA:0
        }
        
    }

    render() {
        let { data, classA} = this.state
        return (
            <div style={{background:"white"}}>
                {
                    data.map((item, index) => {
                        return (
                            <img className={classA==0?"":"a"} key={index} src={item.img} alt=""/>
                        )
                    })
                }
            </div>
        )
    }
}
