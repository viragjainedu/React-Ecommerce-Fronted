import React from 'react';

class Project extends React.Component{
    render(){
        return(
          <div className="project-post university">
                        <div className="inner-project">
                          <div className="image-holder">
                            <img src="./assets/upload/portfolio/portfolio-image-7.jpg" alt="" />
                            <a href="SingleProject">
                              <i className="material-icons">arrow_forward</i>
                            </a>
                          </div>
                          <div className="content-holder">
                            <h2><a href="/SingleProject">Students Looking Resource(New)</a></h2>
                            <span>Nature of University</span>
                          </div>
                        </div>
                      </div>
      );
    }
  }
  export default Project;