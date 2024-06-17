
import React from "react";
export class ForceUpdting extends React.Component{
   
    constructor(){
        super();
        this.name="Sanitha";
        this.showMsg=this.showMsg.bind(this);//with out binding the change in name won't reflect
    }
    showMsg(){
        this.name="Parvathy";
        console.log("Changed Name:",this.name);
        this.forceUpdate();//for rendering

    }
   
    render(){
        console.log("------Rerendering-----");//will show twice.since in index.js there is a <R.StrctMod> and  will rerender twice can remove//
        return(
          
            <>
          
            <h3>Person Name :{this.name}</h3>
           
            <button onClick={this.showMsg}>Change Name Using ForceUpdate</button>
            </>
        )
    }

}