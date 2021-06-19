import React from 'react';
import Nav from './routing/Nav';
import About from './routing/About';
import Shop from './routing/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const RoutingApp = () => {
    return (
        <Router>
           <div className="RoutingApp">
              <Nav />
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/shop" component={Shop}/>
              </Switch>
           </div>
        </Router>
    );
};

const Home = () => (
    <div>
        <h2>Home Page</h2>
    </div>
)
export default RoutingApp;