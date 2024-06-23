
import React from "react";
export class PropsReceiving extends React.Component {
    constructor(props) {
        console.log("Constructor")
        super(props);
        this.state = {
            personName: this.props.name,

        }
    }




    render() {


        console.log("render");
        console.log(this.state.usersList);
        return (

            <>
                <h2>PropsRecieving </h2>
                {/* <h3>Direct Passing Customer Name:{this.props.customerName}</h3>
            <h3>Direct Passing Email:{this.props.email}</h3>*/}
                {console.log("recieving", this.state.personName)}
                {console.log("recieving prop", this.props.name)}
                {this.props.userLoggedIn &&
                    <>

                        <h3> Passing Customer Name(as Props):{this.props.customerData.cname}</h3>  {/*Here the prop is using directly also as object*/}
                        <h3> Passing Customer Name(Converted to State):{this.state.personName}</h3>
                        <h3> Passing Email:{this.props.customerData.cemail}</h3>
                        <div>{this.props.children}</div>
                        <button onClick={() => this.props.name = "Tom"}>Try to   change prop value</button>
                        <button onClick={() => this.setState({ personName: 'Jerry' })}>Try to change  State value </button>
                    </>
                }

            </>
        )
    }

}