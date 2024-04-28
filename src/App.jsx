import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
