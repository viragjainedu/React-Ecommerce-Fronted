import React from 'react';
import Course from '../components/Course';
import {NotificationManager} from 'react-notifications';
import { ExternalLink } from 'react-external-link';
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
    
      if (this.state.email.length < 1) {
        NotificationManager.error ('Please provide email!!');
        return;
      }
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test (
          this.state.email
        )
      ) {
        NotificationManager.error ('Invalid email format!!');
        return;
      }
      
        if(this.state.phone.length<10){
        NotificationManager.error ('Please provide valid phone number!!');
        return;
        }
  
      
    NotificationManager.success('Profile Updated', 'Success');
    
    
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
                            <i className="fa fa-picture-o" />
                          </div>
                          <div className="detail-content">
                            <h2>Upload Profile</h2>
                            <input type="file"  name="img" accept="image/*"></input>                          </div>
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
                      <button type="submit" value="Submit" >Update</button>
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
                        <li><a href="#"  className="google"><i className="fa fa-google-plus" /></a></li>
                        <li><a  className="linkedin" ><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="teacher-content">
                  
                  <h1>Your Courses</h1>
                  <p>6 courses created</p>
                  <div className="scroll">
                  <div className="row">
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                  
                  </div>
                  </div>
                </div>
                <br></br>
                <div className="teacher-content">
                  <h1>Events Enrolled</h1>
                  <p>5 Courses Enrolled</p>
                  <div className="scroll">
                  <div className="row">
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                  
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
export default Teacher_Profile;