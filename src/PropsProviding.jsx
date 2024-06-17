import React from "react";
import { PropsReceiving } from './PropsReceiving';

export class PropsProviding extends React.Component{

    constructor(){
        super();
        this.state={
            is_loggedIn:false,
            customerInfo:{
                cname:'Sanitha ',
                cemail:'p@gmail.com'

            }
        }
    }
    render(){
        return(
            <>
            <h2>{this.state.is_loggedIn?this.state.customerInfo.cname:'Guest Login'}</h2>
            <button onClick={()=>this.setState({is_loggedIn:!this.state.is_loggedIn})}>{this.state.is_loggedIn?"LogOut":"LogIn"}</button>
           { /*<PropsReceiving customerName="Paru" email=" s@gmail.com"/>   */ }
           
            <PropsReceiving userLoggedIn={this.state.is_loggedIn} customerData={this.state.customerInfo}>

               <h4>This is  child 1.</h4> 
               <h5>This is child 2.</h5>
               

                </PropsReceiving>
            </>
        )
    }
} 