import React from 'react';
import Course from '../components/Course';

class Teacher_Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name: 'Vighnesh', subject:"Markting", detail:"PHD, Btech in abc, 5 years experience in teaching",email:"vighnesh@somaiya.edu",phone:9987123123,website:"linkedin.com" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    alert('Profile Details Updated for ' + this.state.name);
    event.preventDefault();
  }
    render(){
        return(
      <div>
        
        {/* Container */}
        <div id="container">
          {/* page-banner-section 
			================================================== */}
          <section className="page-banner-section">
            <div className="container">
              <h1>Profile</h1>
              <ul className="page-depth">
                <li><a href="/">Studiare</a></li>
                <li><a href="/SingleTeacher">{this.state.name}</a></li>
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
                    <div className="profile-details">
                    <form className="contact-form" onSubmit={this.handleSubmit}>
                    
                        <div className="detail-item">
                          <div className="icon-holder">
                            <i className="fa fa-user" />
                          </div>
                          <div className="detail-content">
                            <h2>Name:</h2>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} ></input>
                          </div>
                        </div>
                        <br></br>
                        <div className="line-details">
                        <div className="detail-item">
                          <div className="icon-holder">
                            <i className="fa fa-info-circle" />
                          </div>
                          <div className="detail-content">
                            <h2>About You:</h2>
                            <textarea name="detail" value={this.state.detail} onChange={this.handleChange} />                          </div>
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
                                <input type="text" name="website" value={this.state.website} onChange={this.handleChange} ></input>
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
                                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} ></input>
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
                                <i className="fa fa-book" />
                              </div>
                              <div className="detail-content">
                                <h2>Subject:</h2>
                                <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} ></input>
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
                                <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} ></input>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <input type="submit" value="Submit" />
                    </form>
                    </div>
                  </div>
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
                </div>
                <div className="teacher-content">
                  <h1>Your Courses</h1>
                  <p>6 courses created</p>
                  <div className="row">
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                  
                </div>
                  
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
                    {/* <div className="col-lg-5">
                      <form className="contact-form">
                        <h1>Send a message</h1>
                        <input name="name" id="name" type="text" placeholder="Name*" />
                        <input name="mail" id="mail" type="text" placeholder="E-mail*" />
                        <textarea name="comment" id="comment" placeholder="Message" defaultValue={""} />
                        <button type="submit" id="submit_contact">Submit Message</button>
                      </form>
                    </div> */}
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
export default Teacher_Profile;