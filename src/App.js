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
import Checkout from './pages/checkout';
import Event from './pages/event';
import Pricing from './pages/pricing';
import SingleTeacher from './pages/singe-teacher';
import Portfolo from './pages/portfolio';
import SingleProject from './pages/single-project';
import BlogGridLeftsidebar from './pages/blog-grid-leftsidebar';
import Contact from './pages/contact';







class App extends Component {
  render(){
  return (
<<<<<<< HEAD
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
=======
    // <Home/>
    // <Cart/>
    // <Courses/>
    // <BlogGrid4/>
    // <SingleCourse/>
    // <SingleEvent/>
    // <SinglePost/>
    // <Teachers/>

    // <Checkout/>
      // <Event/>
      // <Pricing/>
      // <SingleTeacher/>
      // <Portfolo/>
      // <SingleProject/>
      // <BlogGridLeftsidebar/>
      <Contact/>

  );
>>>>>>> 8e9328dfc9c361bc08ba0551c91814555ecf2eab
}

export default App;
