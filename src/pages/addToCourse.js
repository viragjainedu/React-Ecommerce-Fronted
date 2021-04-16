import React from 'react';
import {connect} from 'react-redux';
import addItems from '../redux/actions/addItems';


function Header(props){
    return <h3>{props.header}</h3>
}

class addToCourse extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmitFile = this.handleSubmitFile.bind(this);
    this.handleSubmitHeader = this.handleSubmitHeader.bind(this);

  }
  
  handleSubmitFile(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }  
  
  handleSubmitHeader(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    fetch('/api/header-submit-url', {
      method: 'POST',
      body: data,
    });
  }  

    render(){
        return(

<section className="single-course-section">
        <div className="container">
            <div className="row">
              <div className="col-lg-12">

<div className="single-course-content">

<div className="course-section">
  
  <Header header={"1. Header one"}/>
  
  <div className="panel-group">
    
    <div className="course-panel-heading">
      <div className="panel-heading-left">
        <div className="course-lesson-icon">
          <i className="fa fa-play-circle-o" />
        </div>
        <div className="title">
          <h4>1.1 Introduction <span className="badge-item video">video</span>
          </h4>
          <p className="subtitle">01:10</p>
        </div>
      </div>
      <div className="panel-heading-right">

      </div>
    </div>
    
    
    <div className="course-panel-heading">
        <form onSubmit={this.handleSubmitFile} enctype="multipart/form-data">
            <input type="submit" class="btn btn-success" placeholder="Add a lecture"/>
            &nbsp;
            <input type="file" id="my-input" />
        </form>
    </div>
    
    <form onSubmit={this.handleSubmitHeader} >
            <input type="text" class="" placeholder="Add a section"/>
            &nbsp;
            <input type="submit" id="my-input" />
        </form>
  </div>
</div>

</div>
                </div>
            </div>
        </div>
</section>
        )}}

const mapStateToProps = state => {
  return { 
      newState : state._cartItems  
  }
}

const mapDispatchToProps = dispatch => {
return { 
    addItemHandler:(item)=>dispatch(addItems(item))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(addToCourse);
          