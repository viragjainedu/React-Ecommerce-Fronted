import React from 'react';
import Course from '../components/Course';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Courses extends React.Component{
    render(){
        return(

      <div id="container">
        <Header/>
        {/* page-banner-section 
			================================================== */}
        <section className="page-banner-section">
          <div className="container">
            <h1>Courses</h1>
            <ul className="page-depth">
              <li><a href="/">Home</a></li>
              <li><a href="/Courses">Courses</a></li>
            </ul>
          </div>
        </section>
        {/* End page-banner-section */}
        {/* courses-section 
			================================================== */}
        <section className="courses-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
               
                <div className="courses-top-bar">
                  <div className="courses-view">
                    <span>Showing all 9 results</span>
                  </div>
                  <form className="search-course">
                    <input type="search" name="search" id="search_course" placeholder="Search Courses..." />
                    <button type="submit">
                      <i className="material-icons">search</i>
                    </button>
                  </form>
                </div>

                <div className="row">
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                  
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="category-widget widget">
                    <h2>Product categories</h2>
                    <ul className="category-list">
                      <li><a href="#">Design</a></li>
                      <li><a href="#">Photography</a></li>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Web Design</a></li>
                      <li><a href="#">Web Development</a></li>
                    </ul>
                  </div>
                  <div className="products-widget widget">
                    <h2>Products</h2>
                    <ul className="products-list">
                      <li>
                        <a href="/SingleCourse"><img src="./assets/upload/courses/thumb1.jpg" alt="" /></a>
                        <div className="list-content">
                          <h3><a href="/SingleCourse">Introduction Web Design with HTML</a></h3>
                          <span>$244</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ads-widget widget">
                    <a href="#">
                      <img src="./assets/upload/blog/ad-banner.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End courses section */}
        <Footer/>
      </div>
    
        )
    }
}
export default Courses;
