
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


class Cart extends React.Component{
    render(){
        return(
            <div id="container">
            <Header/>
            {/* page-banner-section 
                ================================================== */}
            <section className="page-banner-section">
              <div className="container">
                <h1>Teachers</h1>
                <ul className="page-depth">
                  <li><a href="index.html">Studiare</a></li>
                  <li><a href="teachers.html">Teachers</a></li>
                </ul>
              </div>
            </section>
            {/* End page-banner-section */}
            {/* teachers-section 
                ================================================== */}
            <section className="teachers-section">
              <div className="container">
                <div className="teachers-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <a href="single-teacher.html">
                          <img src="./assets/upload/teachers/teacher6.jpg" alt="" />
                          <div className="hover-post">
                            <h2>Michael Arnet</h2>
                            <span>Photographer</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <a href="single-teacher.html">
                          <img src="./assets/upload/teachers/teacher4.jpg" alt="" />
                          <div className="hover-post">
                            <h2>Leslie Williams</h2>
                            <span>Math</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <a href="single-teacher.html">
                          <img src="./assets/upload/teachers/teacher7.jpg" alt="" />
                          <div className="hover-post">
                            <h2>John Maddix</h2>
                            <span>Chemical Engineering</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <a href="single-teacher.html">
                          <img src="./assets/upload/teachers/teacher5.jpg" alt="" />
                          <div className="hover-post">
                            <h2>Linda Castello</h2>
                            <span>Teacher Training</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <a href="single-teacher.html">
                          <img src="./assets/upload/teachers/teacher1.jpg" alt="" />
                          <div className="hover-post">
                            <h2>Dinna Joakimsen</h2>
                            <span>Computer Science</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <a href="single-teacher.html">
                          <img src="./assets/upload/teachers/teacher3.jpg" alt="" />
                          <div className="hover-post">
                            <h2>Leon Redding</h2>
                            <span>Web Developer</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <a href="single-teacher.html">
                          <img src="./assets/upload/teachers/teacher2.jpg" alt="" />
                          <div className="hover-post">
                            <h2>Duha Sampra</h2>
                            <span>Physics</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="teacher-post">
                        <a href="single-teacher.html">
                          <img src="./assets/upload/teachers/teacher8.jpg" alt="" />
                          <div className="hover-post">
                            <h2>Olivia Barham</h2>
                            <span>Communication</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>	
              </div>
            </section>
            {/* End teachers section */}
            <Footer/>
          </div>
    
        )
    }
}
export default Cart;