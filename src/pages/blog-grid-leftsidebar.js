import React from 'react';
import Blog from '../components/Blog';


class BlogGridLeftsidebar extends React.Component{
    render(){
        return(
      <div>
        
        {/* Container */}
        <div id="container">
          {/* page-banner-section 
			================================================== */}
          <section className="page-banner-section">
            <div className="container">
              <h1>News</h1>
              <ul className="page-depth">
                <li><a href="index.html">Studiare</a></li>
                <li><a href="blog.html">News</a></li>
              </ul>
            </div>
          </section>
          {/* End page-banner-section */}
          {/* blog-section 
			================================================== */}
          <section className="blog-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <div className="sidebar">
                    <div className="search-widget widget">
                      <form className="search-form">
                        <input type="search" className="search-field" placeholder="Enter keyword..." />
                        <button type="submit" className="search-submit">
                          <i className="material-icons">search</i>
                        </button>
                      </form>
                    </div>
                    <div className="ads-widget widget">
                      <a href="#">
                        <img src="upload/blog/ad-banner.jpg" alt="" />
                      </a>
                    </div>
                    <div className="category-widget widget">
                      <h2>Categories</h2>
                      <ul className="category-list">
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Advertisement</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Campus Life</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Government</a></li>
                        <li><a href="#">Schools</a></li>
                        <li><a href="#">Uncategorized</a></li>
                      </ul>
                    </div>
                    <div className="tags-widget widget">
                      <h2>Tags</h2>
                      <ul className="tags-list">
                        <li><a href="#">codebean</a></li>
                        <li><a href="#">course</a></li>
                        <li><a href="#">parents</a></li>
                        <li><a href="#">schools</a></li>
                        <li><a href="#">students</a></li>
                        <li><a href="#">teacher</a></li>
                        <li><a href="#">theme</a></li>
                        <li><a href="#">wordpress</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-md-7">
                  <div className="blog-box">
                    <div className="row">

                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>

                    </div>              
                    <ul className="page-pagination">
                      <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                      <li><a href="#" className="active">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End blog section */}
        </div>
        {/* End Container */}
      </div>
    );
  }
}
export default BlogGridLeftsidebar;