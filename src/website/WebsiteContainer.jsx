import React from 'react'


import Home from './home'
import Friends from './Friends'


import {HashRouter,NavLink,Route} from "react-router-dom"
import Profile from './Profile';


class Website extends React.Component {
    
    render() { 
        return ( 
            <HashRouter>
            <div>
                <h1>Simple Spa in React using Router DOM</h1>
                <div className="header">
                    <ul>
                        <li> <NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/friends">Friends</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/friends" component={Friends}></Route>
                        <Route path="/profile" component={Profile}></Route>
                </div>
            </div>
            </HashRouter>
         );
    }
}
 
export default Website;