
import React from "react";
export class SetStatement extends React.Component{
   
    constructor(){
        super();
        this.state={//is an object
            name:"Sanitha",
            age:18,
        };
        console.log(this.state.name);
        this.changeName=this.handleName.bind(this);
       
    }
   
    handleName(){
        this.setState({name:'Parvathy',age:15});//this.setState({age:15}) septly givn wil do the updtn seprtly*/
        console.log(this.state.name);
    }
    render(){
        return(
          
            <>
            <h3>Person Name using "State" is {this.state.name}</h3>
            <h3>Age:{this.state.age}</h3>
            <button onClick={this.changeName}>Change Name Using State</button>
           
            </>
        )
    }

}