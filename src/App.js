import React from "react";
import { Component } from "react";

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
  

import Home from './pages/Home';
import Cart from './pages/Cart';
import Courses from './pages/Courses';
import BlogGrid4 from './pages/blog-grid-4';
import SingleCourse from './pages/single-course';
import SingleEvent from './pages/single-event';
import SinglePost from './pages/single-post';
import Teachers from './pages/teachers';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact path="/Courses" component={Courses} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/BlogGrid4" component={BlogGrid4} />
        <Route exact path="/SingleCourse" component={SingleCourse} />
        <Route exact path="/SingleEvent" component={SingleEvent} />
        <Route exact path="/SinglePost" component={SinglePost} />
        <Route exact path="/Teachers" component={Teachers} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
