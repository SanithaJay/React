import React from "react";

export  class ToDoList extends React.Component{
    constructor(){
        super();
        this.state={
            nameList:[
                'Sanitha','Parvathy','Akshara','Soumya'
            ],input:''
        }
        this.addNames=this.addNames.bind(this);
    }

    addNames(){
        console.log("Adding Names");
      /*  this.state.nameList.push(this.state.input);//this line won't do show effect on the result.So we have to use setState
        
        const newArr=this.state.nameList;
       this.setState({nameList:newArr});*/

       this.setState({nameList:[...this.state.nameList,this.state.input]})
        console.log(this.state.nameList)

    }
    render(){
        console.log(this.state.input);
        return(

            <>
            <h2>TODOLIST</h2>
            <input type="text" value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})}/>
            <button onClick={this.addNames}>Add Names </button>
            {this.state.nameList.map((names,index)=><li key={index