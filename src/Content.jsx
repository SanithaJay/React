import React from "react";
class Content extends React.Component {//class component and default export
    constructor() {
        super();

        this.showMsg = this.showMsg.bind(this);

    }
    showMsg = (name) => {

        console.log("clicked", { name });


    }
    render() {
        let name = "Sanitha";


        return (
            <>
                <h1>Hiii</h1>
                <button className="btn" onClick={() => this.showMsg(name)}> Click Me for printing name on console!!!!</button>
            </>
        )
    }
} export default Content;


export class ConentCode extends React.Component {//class component and named export

    constructor() {
        super();
        this.name = "Meera";
        this.lastname = "Vasudev";
        this.input = "Krishna";//statc val: typng on d tbox wl b affctd on d consl(adng 1 ch @lst) but won't disply on tbox and also 1 char can be aded//
        this.showMsg = this.showMsg.bind(this);

    }
    handleLastname() {
        this.lastname = "dev";
        this.forceUpdate();//using state implicitly we can rerender//
    }

    handleInput(e) {
        console.log(e.target.value);


    }
    showMsg = (name) => {
        this.forceUpdate();

        console.log("clicked", { name });
        this.handleLastname();

    }
    render() {
        return (
            <>
                <h2>Welcome to React</h2>
                <h3>Person name is {this.name} and Last Name is {this.lastname}</h3>
                <h4>Input Value is {this.input}</h4>
                <input type="text" onChange={this.handleInput} value={this.input} />
                <button className="btn" onClick={() => this.showMsg(this.input)} > Click for changing last name to Dev & check console (changing tb will reflct on console only not on tb) !!!!</button>
            </>
        )
    }
}