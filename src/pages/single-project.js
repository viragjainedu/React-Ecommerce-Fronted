import React from 'react';

class SingleProject extends React.Component{
    render(){
        return(
        <div>
          
          {/* Container */}
          <div id="container">
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
          </div>
          {/* End Container */}
        </div>
      );
    }
  }
  export default SingleProject;