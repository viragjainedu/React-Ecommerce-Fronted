import React from 'react';

class Teacher extends React.Component{
    render(){
        return(
          
            <div className="col-lg-3 col-md-6">
            <div className="teacher-post">
              <a href="/SingleTeacher">
                <img src="./assets/upload/teachers/teacher6.jpg" alt="" />
                <div className="hover-post">
                  <h2>Michael Arnet</h2>
                  <span>Photographer</span>
                </div>
              </a>
            </div>
          </div>

        )
    }
}
export default Teacher;
