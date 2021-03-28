import React from 'react';

class Blog extends React.Component{
    render(){
        return(
                      <div className="col-lg-6">
                        <div className="blog-post">
                          <a href="single-post.html"><img src="upload/blog/blog-image-1.jpg" alt="" /></a>
                          <div className="post-content">
                            <a className="category" href="#">Academics</a>
                            <h2><a href="single-post.html">Couple Of Happy College Students Graduated</a></h2>
                            <div className="post-meta date">
                              <i className="material-icons">access_time</i> June 13, 2018
                            </div>
                          </div>
                        </div>
                      </div>
            
            )
    }
}
export default Blog;
