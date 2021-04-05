
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
                <h1>Summer High School Journalism Camp Registration Form</h1>
                <ul className="page-depth">
                  <li><a href="/">Studiare</a></li>
                  <li><a href="/Events">Events</a></li>
                  <li><a href="/SingleEvent">Summer High School Journalism Camp Registration Form</a></li>
                </ul>
              </div>
            </section>
            {/* End page-banner-section */}
            {/* single-event-section 
                ================================================== */}
            <section className="single-event-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="single-event-box">
                      <img src="./assets/upload/events/events7.jpg" alt="" />
                      <div className="event-meta-info">
                        <div className="box-content start-time">
                          <div className="inner">
                            <div className="text">
                              <span className="label">Start Time</span>
                              <p>6:00 am</p>
                              <p>Monday, October 22, 2018</p>
                            </div>
                            <div className="icon">
                              <i className="material-icons">access_time</i>
                            </div>
                          </div>
                        </div>
                        <div className="box-content end-time">
                          <div className="inner">
                            <div className="text">
                              <span className="label">End Time</span>
                              <p>12:00 pm</p>
                              <p>Friday, December 28, 2018</p>
                            </div>
                            <div className="icon">
                              <i className="material-icons">access_time</i>
                            </div>
                          </div>
                        </div>
                        <div className="box-content address">
                          <div className="inner">
                            <div className="text">
                              <span className="label">Address</span>
                              <p>New York , US of America</p>
                            </div>
                            <div className="icon">
                              <i className="material-icons">location_on</i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="event-content">
                        <h1>Event Description</h1>
                        <p>Improve your productivity, get things done, and find more time for what’s most important with Time Management Tips. This weekly series provides actionable time management techniques. Help people better manage their time and ultimately become more productive. Time management expert Dave Crenshaw provides a new tip every Monday, touching on a wide variety of topics. Tune in to learn about everything from managing emails and calendars to setting priorities.</p>
                        <div className="event-columns-list">
                          <h1>Learning Objectives</h1>
                          <div className="row">
                            <div className="col-md-6">
                              <ul className="list">
                                <li>Nam semper diam quis tellus luctus,</li>
                                <li>Integer vehicula diam ac aliquet porta.</li>
                                <li>Ut suscipit lectus in turpis finibus eu</li>
                                <li>Nulla ut ex dignissim, feugiat nulla</li>
                                <li>Sed convallis tortor at porta fringilla</li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <ul className="list">
                                <li>Nam semper diam quis tellus luctus,</li>
                                <li>Integer vehicula diam ac aliquet porta.</li>
                                <li>Ut suscipit lectus in turpis finibus eu</li>
                                <li>Nulla ut ex dignissim, feugiat nulla</li>
                                <li>Sed convallis tortor at porta fringilla</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div id="map" />
                        <ul className="share-list">
                          <li><span>Share:</span></li>
                          <li><a href="#" className="facebook"><i className="fa fa-facebook-f" /></a></li>
                          <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>
                          <li><a href="#" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar">
                      <div className="widget buy-widget">
                        <h2>Buy Tickets</h2>
                        <table>
                          <tbody>
                            <tr>
                              <th>Total Slots:</th>
                              <td>200</td>
                            </tr>
                            <tr>
                              <th>Booked Slots:</th>
                              <td>87</td>
                            </tr>
                            <tr>
                              <th>Cost:</th>
                              <td><span>$40.00/Slot</span></td>
                            </tr>
                            <tr>
                              <th>Quantity:</th>
                              <td><input type="number" name="number_slots" id="number_slots" placeholder={0} /></td>
                            </tr>
                            <tr>
                              <th>Pay with:</th>
                              <td><img src="./assets/images/paypal.png" alt="" /></td>
                            </tr>
                          </tbody>
                        </table>
                        <a className="button-one" href="#">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End single-event section */}
            <Footer/>
          </div>
    
        )
    }
}
export default Cart;