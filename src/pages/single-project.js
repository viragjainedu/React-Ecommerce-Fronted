import React from 'react';

class SingleProject extends React.Component{
    render(){
        return(
        <div>
          
          {/* Container */}
          <div id="container">
            {/* Header
              ================================================== */}
            <header className="clearfix">
              <div className="top-line">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <p><i className="material-icons">phone</i> <span>+01 2334 853</span></p>
                      <p><i className="material-icons">email</i> <span>email@mycourse.com</span></p>
                    </div>
                    <div className="col-md-6">
                      <div className="right-top-line">
                        <ul className="top-menu">
                          <li><a href="#">Purchase Now</a></li>
                          <li><a href="about.html">About</a></li>
                          <li><a href="blog.html">News</a></li>
                        </ul>
                        <button className="search-icon">
                          <i className="material-icons open-search">search</i> 
                          <i className="material-icons close-search">close</i>
                        </button>
                        <button className="shop-icon">
                          <i className="material-icons">shopping_cart</i>
                          <span className="studiare-cart-number">0</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form className="search_bar">
                <div className="container">
                  <input type="search" className="search-input" placeholder="What are you looking for..." />
                  <button type="submit" className="submit">
                    <i className="material-icons">search</i>
                  </button>
                </div>
              </form>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <a className="navbar-brand" href="index.html">
                    <img src="./assets/images/logo.svg" alt="" />
                  </a>
                  <a href="#" className="mobile-nav-toggle"> 
                    <span />
                  </a>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="drop-link">
                        <a className="active" href="index.html">Home</a>
                      </li>
                      <li className="drop-link">
                        <a href="about.html">Pages <i className="fa fa-angle-down" /></a>
                        <ul className="dropdown">
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="pricing.html">Pricing Packages</a></li>
                          <li><a href="portfolio.html">Portfolio</a></li>
                          <li><a href="single-project.html">Portfolio Single</a></li>
                          <li><a href="teachers.html">Teachers</a></li>
                          <li><a href="single-teacher.html">Teacher Single</a></li>
                          <li className="drop-link">
                            <a href="#">Submenu Level 1</a>
                            <ul className="dropdown level2">
                              <li><a href="#">Submenu Level 2</a></li>
                              <li className="drop-link">
                                <a href="#">Submenu Level 2</a>
                                <ul className="dropdown level2">
                                  <li><a href="#">Submenu Level 3</a></li>
                                  <li><a href="#">Submenu Level 3</a></li>
                                </ul>
                              </li>
                              <li><a href="#">Submenu Level 2</a></li>
                            </ul>
                          </li>
                          <li><a href="cart.html">Shopping Cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                      </li>
                      <li className="drop-link">
                        <a href="blog.html">Blog <i className="fa fa-angle-down" /></a>
                        <ul className="dropdown">
                          <li className="drop-link">
                            <a href="blog-list.html">Blog List</a>
                            <ul className="dropdown level2">
                              <li><a href="blog-list-leftsidebar.html">Blog List - Sidebar Left</a></li>
                              <li><a href="blog-list-rightsidebar.html">Blog List - Sidebar Right</a></li>
                              <li><a href="blog-list.html">No Sidebar</a></li>
                            </ul>
                          </li>
                          <li className="drop-link">
                            <a href="blog-grid-3.html">Blog Grid</a>
                            <ul className="dropdown level2">
                              <li><a href="blog-grid-3.html">3 Column</a></li>
                              <li><a href="blog-grid-4.html">4 Column</a></li>
                              <li><a href="blog-grid-leftsidebar.html">Sidebar Left</a></li>
                              <li><a href="blog-grid-rightsidebar.html">Sidebar Right</a></li>
                            </ul>
                          </li>
                          <li><a href="blog.html">Blog Classic</a></li>
                          <li><a href="single-post.html">Post Single</a></li>
                        </ul>
                      </li>
                      <li className="drop-link">
                        <a href="courses.html">Courses</a>
                      </li>
                      <li><a href="events.html">Events</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <a href="#" className="register-modal-opener login-button"><i className="material-icons">perm_identity</i> Get Started</a>
                  </div>
                </div>
              </nav>
              <div className="mobile-menu">
                <div className="search-form-box">
                  <form className="search-form">
                    <input type="search" className="search-field" placeholder="Enter keyword..." />
                    <button type="submit" className="search-submit">
                      <i className="material-icons open-search">search</i> 
                    </button>
                  </form>
                </div>
                <div className="shopping-cart-box">
                  <a className="shop-icon" href="cart.html">
                    <i className="material-icons">shopping_cart</i>
                    Cart
                    <span className="studiare-cart-number">0</span>
                  </a>
                </div>
                <nav className="mobile-nav">
                  <ul className="mobile-menu-list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="drop-link">
                      <a href="#">Pages</a>
                      <ul className="drop-level">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="pricing.html">Pricing Packages</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="single-project.html">Portfolio Single</a></li>
                        <li><a href="teachers.html">Teachers</a></li>
                        <li><a href="single-teacher.html">Teacher Single</a></li>
                        <li><a href="cart.html">Shopping Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="single-teacher.html">Teacher Single</a></li>
                        <li className="drop-link">
                          <a href="#">Submenu Level 1</a>
                          <ul className="drop-level">
                            <li><a href="#">Submenu Level 2</a></li>
                            <li className="drop-link">
                              <a href="#">Submenu Level 2</a>
                              <ul className="drop-level">
                                <li><a href="#">Submenu Level 3</a></li>
                                <li><a href="#">Submenu Level 3</a></li>
                              </ul>
                            </li>
                            <li><a href="#">Submenu Level 2</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="drop-link">
                      <a href="blog.html">Blog</a>
                      <ul className="drop-level">
                        <li className="drop-link">
                          <a href="blog-list.html">Blog List</a>
                          <ul className="drop-level">
                            <li><a href="blog-list-leftsidebar.html">Blog List - Sidebar Left</a></li>
                            <li><a href="blog-list-rightsidebar.html">Blog List - Sidebar Right</a></li>
                            <li><a href="blog-list.html">No Sidebar</a></li>
                          </ul>
                        </li>
                        <li className="drop-link">
                          <a href="blog-grid-3.html">Blog Grid</a>
                          <ul className="drop-level">
                            <li><a href="blog-grid-3.html">3 Column</a></li>
                            <li><a href="blog-grid-4.html">4 Column</a></li>
                            <li><a href="blog-grid-leftsidebar.html">Sidebar Left</a></li>
                            <li><a href="blog-grid-rightsidebar.html">Sidebar Right</a></li>
                          </ul>
                        </li>
                        <li><a href="blog.html">Blog Classic</a></li>
                        <li><a href="single-post.html">Post Single</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="courses.html">Courses</a>
                    </li>
                    <li>
                      <a href="events.html">Events</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            {/* End Header */}
            {/* page-banner-section 
              ================================================== */}
            <section className="page-banner-section">
              <div className="container">
                <h1>Nature of University</h1>
                <ul className="page-depth">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="single-project.html">Nature of University</a></li>
                </ul>
              </div>
            </section>
            {/* End page-banner-section */}
            {/* portfolio-section 
              ================================================== */}
            <section className="portfolio-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="project-image">
                      <img src="./assets/upload/portfolio/portfolio-image-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="project-details">
                      <h1>Portfolio Details</h1>
                      <p>We are excited to launch our new company and product Ooooh. After being featured in too many magazines to mention and having created an online stir, we know that Ooooh is going to be big. You may have seen us in the Dinosaurs’ Den where we were we told that we didn’t need them because we were already doing it so well ourselves.</p>
                      <table>
                        <tbody>
                          <tr>
                            <th>Client:</th>
                            <td>Omar Akil</td>
                          </tr>
                          <tr>
                            <th>Role:</th>
                            <td>Campus Images</td>
                          </tr>
                        </tbody>
                      </table>
                      <a href="#">View Project</a>
                    </div>
                  </div>
                </div>
                <div className="post-nav">
                  <div className="post-nav-btn prev-btn">
                    <a href="#" className="post-nav-link prev">
                      <i className="material-icons">arrow_back</i>
                      <span>Newer</span>
                      Southeastern Arts
                    </a>
                  </div>
                  <div className="post-nav-btn next-btn">
                    <a href="#" className="post-nav-link next">
                      <i className="material-icons">arrow_forward</i>
                      <span>Older</span>
                      Beauty of Bucknell
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* End portfolio section */}
            {/* footer 
              ================================================== */}
            <footer>
              <div className="container">
                <div className="up-footer">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="footer-widget text-widget">
                        <a href="index.html" className="footer-logo"><img src="./assets/images/logo_light.svg" alt="" /></a>
                        <p>We named our theme Studiare because to us,<br /> the best brands are simple ones. Brands thrive<br /> on their ability to be understood.</p>
                        <ul>
                          <li>
                            <div className="contact-info-icon">
                              <i className="material-icons">location_on</i>
                            </div>
                            <div className="contact-info-value">127 Elizabeth Street, NY New York</div>
                          </li>
                          <li>
                            <div className="contact-info-icon">
                              <i className="material-icons">phone_android</i>
                            </div>
                            <div className="contact-info-value">+55-11-3097-0508</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="footer-widget quick-widget">
                        <h2>Quick Links</h2>
                        <ul className="quick-list">
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="pricing.html">Pricing Packages</a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="courses.html">Courses</a></li>
                          <li><a href="blog.html">News</a></li>
                          <li><a href="index.html">Home</a></li>
                          <li><a href="#">Sample Page</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="footer-widget subscribe-widget">
                        <h2>Newsletter</h2>
                        <p>Don’t miss anything, sign up now and keep informed about our company.</p>
                        <div className="newsletter-form">
                          <input className="form-control" type="email" name="EMAIL" placeholder="Enter Your E-mail" required />
                          <input type="submit" defaultValue="Subscribe" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-copyright copyrights-layout-default">
                <div className="container">
                  <div className="copyright-inner">
                    <div className="copyright-cell"> © 2019 <span className="highlight">Studiare</span>. Created by CodeBean Team.</div>
                    <div className="copyright-cell">
                      <ul className="studiare-social-links">
                        <li><a href="#" className="facebook"><i className="fa fa-facebook-f" /></a></li>
                        <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* End footer */}
          </div>
          {/* End Container */}
        </div>
      );
    }
  }
  export default SingleProject;