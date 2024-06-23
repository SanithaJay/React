import React, { Component } from 'react'

export default class ReactLifeCycle extends Component {


    constructor(props) {
        super(props);
        console.log("1.Constructor");
        this.state = {
            count: '',
            usersList: {}

        }
    }
    static getDerivedStateFromProps(props,state) {
        console.log("2.GetDerivedState");
        return { count: props.name}//immuttable state
    }


    componentDidMount() {
        console.log("4.ComponentDidMount")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()).then(data => this.setState({ usersList: data }))
            .then(json => console.log(json))
    }
    render() {
        console.log("3.Rendering");

        console.log(this.state.usersList);
        return (
            <>
                <h3>REACT LIFE CYCLE METHODS(Check Console for more information)</h3>
                <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
                {
                    this.state.usersList.length && this.state.usersList.map(users => {
                        return (
                            <div key={users.id}>


                                <h5 >Name:-{users.name} Email:- {users.email}</h5>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
