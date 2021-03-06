
import React from 'react';

import Teacher from '../components/Teacher';


class Teachers extends React.Component{
    render(){
        return(
            <div id="container">
            {/* page-banner-section 
                ================================================== */}
            <section className="page-banner-section">
              <div className="container">
                <h1>Teachers</h1>
                <ul className="page-depth">
                  <li><a href="/">Studiare</a></li>
                  <li><a href="/Teachers">Teachers</a></li>
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

                  <Teacher/>
                    
                  </div>
                </div>	
              </div>
            </section>
            {/* End teachers section */}
          </div>
    
        )
    }
}
export default Teachers;