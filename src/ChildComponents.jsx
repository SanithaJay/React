
import React from 'react';


export default class ChildComponents extends React.Component {

constructor(props){
    super(props);
    this.state= {
        status:'Active'//this data is sending to parent component App.js
    }
}


  render() {
    return (
        <>
      <div>ChildComponents</div>
     
      <div>Persons status is {this.state.status}</div>
      <button onClick={()=>this.props.recieveData(this.state.status)}>Click me for passing data to parent component</button>
      </>
    )
  }
}

  

