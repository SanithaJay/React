
import React from "react";
export class PropsReceiving extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <h2>PropsRecieving </h2>
                {/* <h3>Direct Passing Customer Name:{this.props.customerName}</h3>
            <h3>Direct Passing Email:{this.props.email}</h3>*/}
           
                {this.props.userLoggedIn &&
                    <>

                        <h3> Passing Customer Name:{this.props.customerData.cname}</h3>
                        <h3> Passing Email:{this.props.customerData.cemail}</h3>
                        <h3>{this.props.children}</h3>
                    </>
                }
            </>
        )
    }

}