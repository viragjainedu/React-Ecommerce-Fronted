import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
class Pricing extends React.Component{
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
                <h1>Pricing Packages</h1>
                <ul className="page-depth">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="pricing.html">Pricing Packages</a></li>
                </ul>
              </div>
            </section>
            {/* End page-banner-section */}
            {/* pricing-section 
              ================================================== */}
            <section className="pricing-section">
              <div className="container">
                <div className="pricing-box">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-table">
                        <div className="pricing-head">
                          <h2>Basic Plan</h2>
                          <p>We are just getting started</p>
                          <span>$25.99</span>
                        </div>
                        <div className="pricing-content">
                          <ul className="pricing-list">
                            <li>Full Access</li>
                            <li>Documentation</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Unlimited Domains</li>
                          </ul>
                          <a className="button-one" href="#">Start Free Trial</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-table">
                        <div className="pricing-head">
                          <h2>Pro Plan</h2>
                          <p>We are just getting started</p>
                          <span>$45.99</span>
                        </div>
                        <div className="pricing-content">
                          <ul className="pricing-list">
                            <li>Full Access</li>
                            <li>Documentation</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Unlimited Domains</li>
                          </ul>
                          <a className="button-one" href="#">Start Free Trial</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="pricing-table">
                        <div className="pricing-head">
                          <h2>Studiare Teams</h2>
                          <p>We are just getting started</p>
                          <span>$299</span>
                        </div>
                        <div className="pricing-content">
                          <ul className="pricing-list">
                            <li>Full Access</li>
                            <li>Documentation</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Unlimited Domains</li>
                          </ul>
                          <a className="button-one" href="#">Start Free Trial</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End pricing section */}
            {/* question-section 
              ================================================== */}
            <section className="question-section">
              <div className="container">
                <div className="question-box">
                  <h3><span>Who is this for?</span></h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="block-content">
                        <div className="icon">
                          <i className="fa fa-question-circle" />
                        </div>
                        <div className="content">
                          <h2>How do I recommend new content/new suggestions?</h2>
                          <p>At this time you can email us at support@codebean.co with the subject line “Content Suggestion”. We review all emails and make note each month of what our students are wanting to see. This helps shape our decisions about content and features in the near future!</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="block-content">
                        <div className="icon">
                          <i className="fa fa-question-circle" />
                        </div>
                        <div className="content">
                          <h2>Can I download project files for a course?</h2>
                          <p>Yes, you can download individual lesson videos for any course that you have purchased, or for any course in our library if you are subscribed to the Yearly or Yearly Pro plans. Subscribers to Envato Elements or the Monthly plan are not able to download videos. Fair use policies also apply.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End question section */}
            <Footer/>
          </div>
          {/* End Container */}
        </div>
      );
    }
  }
  export default Pricing;