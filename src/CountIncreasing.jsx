import React from "react";
export class CountIncreasing extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0,
            hasError:false
        }
this.handleCount=this.handleCount.bind(this);
    }

    handleCount(){
        console.log("clicked");
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 };
        });

    }
    static errorChecking(){
        if(this.state.counter>10)
return{hasError:false}

    }
render(){
    if(this.state.counter>10){
        return<h2>OOPPSSS Wrong</h2>
    }
    return(
        <>
        <h2>Counter:{this.state.counter}</h2>
        <button onClick={this.handleCount}>Click Here  increament count</button>
        
        </>
    )
}
}
