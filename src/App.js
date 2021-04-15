import React from "react";
import { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
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
import Portfolio from './pages/portfolio';
import SingleProject from './pages/single-project';
import BlogGridLeftsidebar from './pages/blog-grid-leftsidebar';
import Contact from './pages/contact';
import Teacher_Profile from './pages/Teacher_Profile';
import User_Profile from './pages/User_Profile'
import Header from './components/Header';
import Footer from './components/Footer';
import VideoCourse from './pages/video-course';

class App extends Component {
  render(){
  return (
    <BrowserRouter forceRefresh={true}>
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route  path="/Courses" component={Courses} />
        <Route  path="/Cart" component={Cart} />
        <Route  path="/BlogGrid4" component={BlogGrid4} />
        <Route  path="/SingleCourse/:id" component={SingleCourse} />
        <Route  path="/SingleEvent/:id" component={SingleEvent} />
        <Route  path="/SinglePost/:id" component={SinglePost} />
        <Route  path="/Teachers" component={Teachers} />
        <Route  path="/Checkout" component={Checkout} />
        <Route  path="/Events" component={Event} />
        <Route  path="/Pricing" component={Pricing} />
        <Route  path="/SingleTeacher/:id" component={SingleTeacher} />
        <Route  path="/Portfolio" component={Portfolio} />
        <Route  path="/SingleProject" component={SingleProject} />
        <Route  path="/BlogGridLeftsidebar" component={BlogGridLeftsidebar} />
        <Route  path="/Contact" component={Contact} />
        <Route  path="/video-course" component={VideoCourse} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </BrowserRouter>
    );
  }
}

export default App;
