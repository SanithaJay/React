
import React from "react";
export class Events extends React.Component {

    render() {
        function showMsg() {

            console.log("clicked");


        }


        return (

            <>
                <div style={{ 'display': 'flex', 'gap': '10px' }}>
                    <button className="btn" onClick={showMsg}>Click Me !!!!</button>
                    <button className="btn1" onClick={() => alert("inline")}>Click Me for inline event!!!!</button>
                </div>
            </>
        )

    }


}