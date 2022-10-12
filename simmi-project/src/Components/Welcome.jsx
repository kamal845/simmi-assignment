import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import port5 from "/Users/kamal-project/kamal react js/reactJs Simmi project/simmi-project/src/images/map-dark.png";
const Welcome =()=>{
    return(
        <>
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-md-8">
<div className="welcome1">
<h3>Welcome to <b className="good">SIMMI</b></h3>
<p>
Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.
</p>
</div>
                </div>
                <div className="col-md-4">
                    <div className="welcome2">
<img src={port5} className="welcome20" alt="port5"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Welcome;