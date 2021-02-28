import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./views/About";
import Collection from "./views/Collection"
import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Wants from "./views/Wants";

function App(){
    return(
        <Router>
            <Route path="/about"><About/></Route>
            <Route path="/collection"><Collection/></Route>
            <Route path="/"><Home/></Route>
            <Route path="login"><Login/></Route>
            <Route path="/profile"><Profile/></Route>
            <Route path="/wants"><Wants/></Route>
        </Router>
    )
}

export default App;