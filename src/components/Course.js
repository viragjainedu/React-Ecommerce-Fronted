import React from 'react';

class Course extends React.Component{
  constructor(props){
    super(props);
  
  
  }
    render(){
        return(
            <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="course-post">
                      <div className="course-thumbnail-holder">
                        <a href="/SingleCourse">
                          <img src="./assets/upload/courses/2.jpg" alt="" />
                        </a>    
                      </div>
                      <div className="course-content-holder">
                        <div className="course-content-main">
                          <h2 className="course-title">
                            <a href="/SingleCourse">{this.props.coursename}</a>
                          </h2>
                          <div className="course-rating-teacher">
                            <div className="star-rating has-ratings" title="Rated 5.00 out of 5">
                              <span style={{width: '100%'}}>
                                <span className="rating">3.50</span>
                                <span className="votes-number">2 Votes</span>
                              </span>
                            </div>
                            <a href="#" className="course-loop-teacher">{this.props.teacher}</a>
                          </div>
                        </div>
                        <div className="course-content-bottom">
                          <div className="course-students">
                            <i className="material-icons">group</i>
                            <span>134</span>
                          </div>
                          <div className="course-price">
                            <span>£74.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  

        )
    }
}
export default Course;
