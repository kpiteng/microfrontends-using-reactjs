import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Blogs from './Blogs';
import BlogDetail from './BlogDetail';
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Blogs} />
        <Route exact path="/blogdetail/:blogid" component={BlogDetail} />
      </Switch>
    </Router>
  );
}

export default App;