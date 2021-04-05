import React from 'react';

class SingleTeacher extends React.Component{
    render(){
        return(
      <div>
        
        {/* Container */}
        <div id="container">
          {/* page-banner-section 
			================================================== */}
          <section className="page-banner-section">
            <div className="container">
              <h1>Leslie Williams</h1>
              <ul className="page-depth">
                <li><a href="index.html">Studiare</a></li>
                <li><a href="teachers.html">Teachers</a></li>
                <li><a href="single-teacher.html">Leslie Williams</a></li>
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
                  <div className="col-lg-6">
                    <div className="profile-image">
                      <div className="image-holder">
                        <img src="./assets/upload/teachers/teacher4.jpg" alt="" />
                      </div>
                      <ul className="social-links">
                        <li><a href="#" className="facebook"><i className="fa fa-facebook-f" /></a></li>
                        <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="profile-details">
                      <h1>My details</h1>
                      <p>Ullamcorper hendrerit odio. Nunc nec orci porttitor, suscipit nisi sed, rhoncus nisi. Maecenas laoreet enim sit amet elementum dapibus.</p>
                      <div className="line-details">
                        <div className="detail-item">
                          <div className="icon-holder">
                            <i className="fa fa-map-marker" />
                          </div>
                          <div className="detail-content">
                            <h2>Postal Address:</h2>
                            <span>127 Elizabeth St 10013 NY New York USA</span>
                          </div>
                        </div>
                      </div>
                      <div className="line-details">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="detail-item">
                              <div className="icon-holder">
                                <i className="fa fa-external-link" />
                              </div>
                              <div className="detail-content">
                                <h2>Website:</h2>
                                <a href="#">codebean.co</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="detail-item">
                              <div className="icon-holder">
                                <i className="fa fa-envelope-o" />
                              </div>
                              <div className="detail-content">
                                <h2>Email:</h2>
                                <a href="#">michael@studiare.com</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="line-details">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="detail-item">
                              <div className="icon-holder">
                                <i className="fa fa-skype" />
                              </div>
                              <div className="detail-content">
                                <h2>Skype:</h2>
                                <span>michael.studiare</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="detail-item">
                              <div className="icon-holder">
                                <i className="fa fa-mobile" />
                              </div>
                              <div className="detail-content">
                                <h2>Phone:</h2>
                                <span>+52 1 55 8421 8283</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="teacher-content">
                  <h1>Mission &amp; Biography</h1>
                  <p>Michael Main holds an QE in Theatre Practice and a PhD in Trafalgar Studios Theatre from London University. He is a Certified Teacher of stage combat with the BASSC, a fight examiner for Stage Combat and holds a black belt in Aikido. Michael has worked for many theatre companies including: the Orange Tree, Stephen Joseph Theatre, Royal &amp; Derngate, Crucible Theatre, Graeae.</p>
                  <p>He has directed several shows for East 15 – including a Martin Lynch premier and has also directed numerous productions for the Royal Armouries at the Tower of London. He was the fight arranger for the feature film The Roundabout and Assistant Fight Arranger on the feature, Faintheart. In what feels like a past life, he performed in Conquest, a series for the History Channel.</p>
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="skills-box">
                        <h1>Skills</h1>
                        <div className="skill-line">
                          <span className="fill-text">Development 90%</span>
                          <span className="fill-box" style={{width: '90%'}} />
                        </div>
                        <div className="skill-line">
                          <span className="fill-text">Design 80%</span>
                          <span className="fill-box" style={{width: '80%'}} />
                        </div>
                        <div className="skill-line">
                          <span className="fill-text">Marketing 70%</span>
                          <span className="fill-box" style={{width: '70%'}} />
                        </div>
                        <div className="skill-line">
                          <span className="fill-text">WordPress &amp; PHP 54%</span>
                          <span className="fill-box" style={{width: '54%'}} />
                        </div>
                        <div className="skill-line">
                          <span className="fill-text">After Effects 94%</span>
                          <span className="fill-box" style={{width: '94%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <form className="contact-form">
                        <h1>Send a message</h1>
                        <input name="name" id="name" type="text" placeholder="Name*" />
                        <input name="mail" id="mail" type="text" placeholder="E-mail*" />
                        <textarea name="comment" id="comment" placeholder="Message" defaultValue={""} />
                        <button type="submit" id="submit_contact">Submit Message</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>	
            </div>
          </section>
          {/* End teachers section */}
        </div>
        {/* End Container */}
      </div>
    );
  }
}
export default SingleTeacher;