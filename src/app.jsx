'use strict'
require('bootstrap-webpack');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router';
import Home from './views/Home.jsx';
import Root from './views/Root.jsx';
import TemplatedPage from './views/TemplatedPage.jsx';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Root} >
            <IndexRoute component={Home} />
            <Route path="/template/:requestedPage" component={TemplatedPage} />
        </Route>
    </Router>,
    document.getElementById('ReactMount')); 