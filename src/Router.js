import React, { Component } from 'react';
import { Router, Route, hashHistory } from "react-router";


import Page0 from "./page/page0/index.js";
import Page1 from "./page/page1/index.js";

import Page2 from "./page/page2/index.js";
import Page3 from "./page/page3/index.js";
import Page4 from "./page/page4/index.js";
import Page5 from "./page/page5/index.js";
import Page6 from "./page/page6/index.js";

import Page7 from "./page/page7/index.js";
import Page8 from "./page/page8/index.js";
import Page9 from "./page/page9/index.js";
import Page10 from "./page/page10/index.js";
import Page11 from "./page/page11/index.js";

import Page12 from "./page/page12/index.js";
import Page13 from "./page/page13/index.js";
import Page14 from "./page/page14/index.js";
import Page15 from "./page/page15/index.js";
import Page16 from "./page/page16/index.js";

require('../src/rem.js');
require('../src/work.js');

export default class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                {/* <Route path="/?id=0" component={Page1} /> */}
                <Route path="/" component={Page14} />
                <Route path="/Page0" component={Page0} />
                <Route path="/Page1" component={Page1} />
                
                <Route path="/Page2" component={Page2} />
                <Route path="/Page3" component={Page3} />

                <Route path="/Page4" component={Page4} />
                <Route path="/Page5" component={Page5} />



                <Route path="/Page6" component={Page6} />
                <Route path="/Page7" component={Page7} />
                <Route path="/Page8" component={Page8} />
                <Route path="/Page9" component={Page9} />

                <Route path="/Page10" component={Page10} />

                <Route path="/Page11" component={Page11} />

                <Route path="/Page12" component={Page12} />
                <Route path="/Page13" component={Page13} />
                <Route path="/Page14" component={Page14} />
                <Route path="/Page15" component={Page15} />
                <Route path="/Page16" component={Page16} />


            </Router>
        );
    }
}