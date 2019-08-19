import React, { Component } from 'react';
import { Router, Route, hashHistory } from "react-router";

import Page1 from "./page/page1/index.js";
import Page2 from "./page/page2/index.js";
import Page3 from "./page/page3/index.js";
import Page5 from "./page/page5/index.js";
import Page6 from "./page/page6/index.js";
import Page7 from "./page/page7/index.js";
import Page8 from "./page/page8/index.js";
import Page9 from "./page/page9/index.js";
import Page10 from "./page/page10/index.js";
import Page12 from "./page/page12/index.js";
import Page13 from "./page/page13/index.js";
import Page14 from "./page/page14/index.js";
import Page15 from "./page/page15/index.js";
import Page16 from "./page/page16/index.js";
import Page17 from "./page/page17/index.js";
import Page18 from "./page/page18/index.js";
import Page19 from "./page/page19/index.js";
import Page20 from "./page/page20/index.js";
import Page21 from "./page/page21/index.js";

require('../src/rem.js');
require('../src/work.js');

export default class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route exact  path="/" component={Page14} />
                <Route path="/Page1" component={Page1} />
                <Route path="/Page2" component={Page2} />
                <Route path="/Page3" component={Page3} />
                <Route path="/Page5" component={Page5} />
                <Route path="/Page6" component={Page6} />
                <Route path="/Page7" component={Page7} />
                <Route path="/Page8" component={Page8} />
                <Route path="/Page9" component={Page9} />
                <Route path="/Page10" component={Page10} />
                <Route path="/Page12" component={Page12} />
                <Route path="/Page13" component={Page13} />
                <Route path="/Page14" component={Page14} />
                <Route path="/Page15" component={Page15} />
                <Route path="/Page16" component={Page16} />
                <Route path="/Page17" component={Page17} />
                <Route path="/page18" component={Page18} />
                <Route path="/page19" component={Page19} />
                <Route path="/page20" component={Page20} />
                <Route path="/page21" component={Page21} />
            </Router>
        );
    }
}