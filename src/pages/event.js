import React from 'react';
import Event from '../components/Event';

class Events extends React.Component{
    render(){
        return(
        <div>
          
          {/* Container */}
          <div id="container">
            {/* page-banner-section 
              ================================================== */}
            <section className="page-banner-section">
              <div className="container">
                <h1>Events</h1>
                <ul className="page-depth">
                  <li><a href="index.html">Studiare</a></li>
                  <li><a href="events.html">Events</a></li>
                </ul>
              </div>
            </section>
            {/* End page-banner-section */}
            {/* events-section 
              ================================================== */}
            <section className="events-section events-page">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="events-box">
                      <Event/>
                      <Event/>
                      <Event/>
                      <Event/>
                      <Event/>
                      
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar">
                      <div className="ads-widget widget">
                        <a href="#">
                          <img src="upload/blog/ad-banner.jpg" alt="" />
                        </a>
                      </div>
                      <div className="archives-widget widget">
                        <h2>Archives</h2>
                        <ul className="archives-list">
                          <li><a href="#">September 2019</a></li>
                          <li><a href="#">October 2019</a></li>
                          <li><a href="#">November 2019</a></li>
                          <li><a href="#">December 2019</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End events section */}
          </div>
          {/* End Container */}
        </div>
      );
    }
  }
  export default Events;