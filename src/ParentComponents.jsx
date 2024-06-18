import React, { Component } from 'react'
import ChildComponents from './ChildComponents';

export default class ParentComponents extends Component {

    constructor(){
        super();
        this.state={
            is_active:''
        }
        this.recieveData=this.recieveData.bind(this)
    }
    recieveData(status){
        this.setState({is_active:status})

    }
  render() {
    return (
        <>
        <div>
            <div>Parentcomponents status from child(through Call back function):{this.state.is_active}</div>
            <ChildComponents recieveData={this.recieveData}/>
        </div>
        </>
      
    )
  }
}
