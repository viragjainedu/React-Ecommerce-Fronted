import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
class Portfolio extends React.Component{
    render(){
        return(
        <div>
          
          {/* Container */}
          <div id="container">
            <Header/>
            {/* page-banner-section 
              ================================================== */}
            <section className="page-banner-section">
              <div className="container">
                <h1>Portfolio</h1>
                <ul className="page-depth">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                </ul>
              </div>
            </section>
            {/* End page-banner-section */}
            {/* portfolio-section 
              ================================================== */}
            <section className="portfolio-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="sidebar">
                      <div className="filter-widget widget">
                        <h2>Filter Controls</h2>
                        <ul className="filter">
                          <li><a className="active" href="#" data-filter="*">All</a></li>
                          <li><a href="#" data-filter=".campus">Campus Images</a></li>
                          <li><a href="#" data-filter=".university">Nature of University</a></li>
                          <li><a href="#" data-filter=".students">Students Learning</a></li>
                          <li><a href="#" data-filter=".travelling">Travelling with Teachers</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="portfolio-box iso-call">
                      <div className="project-post university">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-1.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">Spring Events and Courses</a></h2>
                            <span>Nature of University</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-post students">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-2.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">Southeastern Art</a></h2>
                            <span>Students Learning</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-post travelling">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-3.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">Beauty of Bucknell</a></h2>
                            <span>Travelling with Teachers</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-post students">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-4.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">Close-up Hand and Exam</a></h2>
                            <span>Students Learning</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-post campus">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-5.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">2018 Faculty Biennial</a></h2>
                            <span>Campus Images</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-post travelling">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-6.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">Juried Student Exhibition</a></h2>
                            <span>Travelling with Teachers</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-post university">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-7.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">Students Looking Resource</a></h2>
                            <span>Nature of University</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-post students">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-8.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">Spring Events and Courses</a></h2>
                            <span>Students Learning</span>
                          </div>
                        </div>
                      </div>
                      <div className="project-post campus">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-9.jpg" alt="" />
                            <a href="single-project.html">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="single-project.html">Access to Photography</a></h2>
                            <span>Campus Images</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End portfolio section */}
            <Footer/>
          </div>
          {/* End Container */}
        </div>
      );
    }
  }
  export default Portfolio;