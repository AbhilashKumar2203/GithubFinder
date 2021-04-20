import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/layout/pages/NotFound';
import PRCommentsState from './context/prComments/PRCommentsState';
import {PRDashboard} from './components/PRCommentsDashboard/PRDashboard';
import "./App.css";
import Navbar from './components/layout/Navbar';

export const PRComments = () => {
    return (
        <PRCommentsState>
            <Router>
            <div className="App">
          <Navbar title={`PR Comments Dashboard`}/>
          <div className="container">
                <Switch>
                    <Route exact path="/" component={PRDashboard}/>
                    <Route component={NotFound}/>
        <div>
            <h1>PR Comments Dashboard</h1>
        </div>
        </Switch>
        </div>
        </div>
        </Router>
        </PRCommentsState>
    )
}

export default PRComments;
