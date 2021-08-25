import React from 'react';
// @ts-ignore
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import BoardWrite from "./Components/BoardWrite";
import BoardBody from "./Components/BoardBody";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route exact={true} path="/" component={BoardBody}/>
                <Route exact={true} path="/w" component={BoardWrite}/>
            </Router>
        )
    }
}

export default Routes;