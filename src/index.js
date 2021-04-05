import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
import Portfolio from './pages/portfolio';
import SingleProject from './pages/single-project';
import BlogGridLeftsidebar from './pages/blog-grid-leftsidebar';
import Contact from './pages/contact';


ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact path="/Courses" component={Courses} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/BlogGrid4" component={BlogGrid4} />
        <Route exact path="/SingleCourse" component={SingleCourse} />
        <Route exact path="/SingleEvent" component={SingleEvent} />
        <Route exact path="/SinglePost" component={SinglePost} />
        <Route exact path="/Teachers" component={Teachers} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/Event" component={Event} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route exact path="/SingleTeacher" component={SingleTeacher} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/SingleProject" component={SingleProject} />
        <Route exact path="/BlogGridLeftsidebar" component={BlogGridLeftsidebar} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>   
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
