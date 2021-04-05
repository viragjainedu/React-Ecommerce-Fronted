import React from 'react';

class Contact extends React.Component{
    render(){
        return(
        <div>
          {/* <title>Studiare</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,500i,600,700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="css/studiare-assets.min.css" />
          <link rel="stylesheet" type="text/css" href="./assets/css/fonts/font-awesome/font-awesome.min.css" media="screen" />
          <link rel="stylesheet" type="text/css" href="./assets/css/fonts/elegant-icons/style.css" media="screen" />
          <link rel="stylesheet" type="text/css" href="./assets/css/fonts/iconfont/material-icons.css" media="screen" />
          <link rel="stylesheet" type="text/css" href="./assets/css/style.css" /> */}
          {/* Container */}
          <div id="container">
            {/* map section */}
            <div id="map" />
            {/* end map section */}
            {/* contact-section 
              ================================================== */}
            <section className="contact-section">
              <div className="container">
                <div className="contact-box">
                  <h1>Get in Touch</h1>
                  <p>Someone finds it difficult to understand your creative idea? There is a better visualisation. Share your views with us, we’re looking forward to hear from you.</p>
                  <form id="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="name">Your Name (required)</label>
                        <input name="name" id="name" type="text" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="mail">Your Email (required)</label>
                        <input name="mail" id="mail" type="text" />
                      </div>
                    </div>
                    <label htmlFor="tel-number">Your Phone Number</label>
                    <input name="tel-number" id="tel-number" type="text" />
                    <label htmlFor="comment">Your Message (required)</label>
                    <textarea name="comment" id="comment" defaultValue={""} />
                    <button type="submit" id="submit_contact">Submit Message</button>
                    <div id="msg" className="message" />
                  </form>
                </div>
              </div>
            </section>
            {/* End contact section */}
            {/* contact-info-section 
              ================================================== */}
            <section className="contact-info-section">
              <div className="container">
                <div className="contact-info-box">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="info-post">
                        <div className="icon">
                          <i className="fa fa-envelope-o" />
                        </div>
                        <div className="info-content">
                          <p>
                            Tel: +1 (420) 899 4400 <br />
                            E-Mail: <a href="#">hello@codebean.co</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="info-post">
                        <div className="icon">
                          <i className="fa fa-map-marker" />
                        </div>
                        <div className="info-content">
                          <p>
                            6100 Wilshire Blvd 2nd Floor Los <br />
                            Angeles CA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="info-post">
                        <div className="icon">
                          <i className="fa fa-clock-o" />
                        </div>
                        <div className="info-content">
                          <p>
                            Our office is open:<br />
                            Mon to Fri from 8am to 6pm
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End contact-info section */}
          </div>
          {/* End Container */}
        </div>
      );
    }
  }
  export default Contact;