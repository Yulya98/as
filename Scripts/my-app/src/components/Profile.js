import React from 'react';
import "../resources/css/profileStyle/profile.css"
import InfoAboutYourself from "../containers/containerAboutYourself"
import MultiAlbum from "../containers/containerMultiAlbum"
import Posts from '../containers/containerPosts'
import {PrivateRoute} from "./PrivateRouter";

import {
    BrowserRouter as Router,
    Link,
    Switch
} from 'react-router-dom'


export default class Profile extends React.Component {

    constructor(props) {
        debugger;
        super(props);
    }

    render() {
        return (
            <div>
                <div className="header"></div>
                <Router>
                    <div className="container-menu">
                        <div className="menu">
                            <ul>
                                <li><Link to="/about">Information</Link></li>
                                <li><Link to="/album">My album</Link></li>
                                <li><Link to="/posts" id="menu_none">Last posts</Link></li>
                            </ul>
                            <Switch>
                                <PrivateRoute exact path="/about" component={InfoAboutYourself}/>
                                <PrivateRoute exact path="/album" component={MultiAlbum} />
                                <PrivateRoute exact path="/posts" component={Posts} />
                                <PrivateRoute exact path="/posts" component={Posts} />
                            </Switch>
                        </div>

                    </div>
                </Router>
            </div>
        );
    }
}
