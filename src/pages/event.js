import React from 'react';
import Event from '../components/Event';

class Events extends React.Component{
    render(){
      var jobj= {
        "Events":[
          {"Title": "Summer High School Journalism Camp Registration Form","Location": "New York , US of America"},
          {"Title": "Spring high School","Location": "Mumbai,Maharastra"},
          {"Title": "Autumn high School","Location": "Pune,Maharastra"}
        ]
      };
      const item = jobj.Events.map((obj) => <Event event={obj}/>
      
);
        return(
        <div>
          {console.log(jobj.Events)}
          {/* Container */}
          <div id="container">
            {/* page-banner-section 
              ================================================== */}
            <section className="page-banner-section">
              <div className="container">
                <h1>Events</h1>
                <ul className="page-depth">
                  <li><a href="/">Studiare</a></li>
                  <li><a href="Event">Events</a></li>
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
                    {item}

                    
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