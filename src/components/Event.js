import React from 'react';

class Course extends React.Component{
    render(){
        return(
            <div className="events-post">
                <div className="event-inner-content">
                    <div className="top-part">
                    <div className="date-holder">
                        <div className="date">
                        <span className="date-day">22</span>
                        <span className="date-month">Oct</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="event-meta">
                        <span className="event-meta-piece start-time">
                            <i className="material-icons">access_time</i> 6:00 am - 12:00 pm
                        </span>
                        <span className="event-meta-piece location">
                            <i className="material-icons">location_on</i> New York , US of America
                        </span>
                        </div>
                        <h2 className="title"><a href="/SingleEvent">Summer High School Journalism Camp Registration Form</a></h2>
                    </div>
                    <a href="/SingleEvent" className="events-image"><img src="upload/events/events7.jpg" alt="" /></a>
                    </div>
                </div>
                </div>
            )
    }
}
export default Course;
