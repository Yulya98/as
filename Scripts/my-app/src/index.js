import React from 'react';
import ReactDOM from 'react-dom';
import {PrivateRoute} from "./components/PrivateRouter";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/index.js";
import Authorization from './containers/containerAuthorization';
import Profile from './containers/containerProfile'
import Posts from "./containers/containerPosts"


import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";



const App = () => (
    <Router>
        <div>
            <Route path="/public" component={Posts} />
            <Route path="/login" component={Authorization} />
            <PrivateRoute path="/profile" component={Profile}  />
        </div>
    </Router>
);


let store = createStore(mainReducer, applyMiddleware(thunk));



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));