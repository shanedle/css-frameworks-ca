import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import NavigationBar from "./NavigationBar";

const Layout = () => {
    return (
        <>
            <Router>
                <NavigationBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" exact component={News} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            </Router>
        </>
    );
}

export default Layout;