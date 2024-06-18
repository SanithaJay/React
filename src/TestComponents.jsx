import React from 'react';
import PropTypes from 'prop-types';

export default class TestComponents extends React.Component {

constructor(props){
    super(props);
    
}


  render() {
    return (
        <>
      <h2>TestComponents For Props</h2>
      <div >courseName is {this.props.course}</div>
      
      
      </>
    )
  }
}

  TestComponents.propTypes={

    course: PropTypes.string
    //course:PropTypes.any will accept any data type
  }

