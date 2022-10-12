import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
const Help =()=>{
    return(
        <>
         <div className="help">
            <h3>How can you help us</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="help1">
                            <h4>Collaborate</h4>
                            <hr></hr>
<p>Simmi Foundation serves in the collaboration with schools, colleges and other institutions.</p>
<h5>Collaborate with us <i className="fa fa-arrow-right" aria-hidden="true"></i></h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="help2">
                        <h4>Donate Money</h4>
                        <hr></hr>
<p>Your donation will further our mission of ensuring a happy and healthy life of those in need.</p>
<h5>Donate now  <i className="fa fa-arrow-right" aria-hidden="true"></i></h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="help3">
                        <h4>Be a Volunteer</h4>
                        <hr></hr>
<p>Even the all-powerful Pointing has no control about the blind texts.</p>
<h5>Read more  <i className="fa fa-arrow-right" aria-hidden="true"></i></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Help;